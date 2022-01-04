let displayTimeout = 200,
    hideTimeout = 60200,
    vanishTimeout = 61200;
    ignoreExclamation = true;
    ignoredUsers = ['streamelements', 'nightbot', 'streamlabs', 'moobot', 'streamholics'];

window.addEventListener('onEventReceived', function (obj) {
  switch (obj.detail.listener) {
    case 'message':
      handleMessage(obj.detail.event);
      break;
    case 'delete-message':
      deleteMessage(obj.detail.event.msgId);
      break;
  }
});

function handleMessage(event) {
  if (!checkUser(event.data.nick) && !checkText(event.data.text) && !checkExclamation(event.data.text)) {
    // Getting info
    let displayName = event.data.displayName;
    let displayColor = event.data.displayColor;
    let renderedText = event.renderedText;
    let badges = '';
    event.data.badges.forEach(badge => {
      badges += `<img class="main-msg--header--badge" src="${badge.url}" alt="badge">`;
    });

    // Creating elements
    let divmsg = document.createElement('div');
    divmsg.classList.add('main-msg');
    divmsg.setAttribute('data-msgId', event.data.msgId);
    divmsg.style.opacity = '0';

    let divmsgheader = document.createElement('div');
    divmsgheader.classList.add('main-msg--header');

    let divmsgtext = document.createElement('div');
    divmsgtext.classList.add('main-msg--text');
    divmsgtext.innerHTML = renderedText;

    let divmsgheadername = document.createElement('div');
    divmsgheadername.classList.add('main-msg--header--name');
    divmsgheadername.innerText = displayName;
    divmsgheadername.style.color = displayColor;

    let divmsgheaderbadges = document.createElement('div')
    divmsgheaderbadges.classList.add('main-msg--header--badges')
    divmsgheaderbadges.innerHTML = badges;

    // Building elements
    divmsgheader.appendChild(divmsgheadername);
    divmsgheader.appendChild(divmsgheaderbadges);
    divmsg.appendChild(divmsgheader);
    divmsg.appendChild(divmsgtext);
    document.querySelector('.main-container').append(divmsg);

    // Showing on screen
    window.scrollTo(0, document.body.scrollHeight);
    setTimeout(() => {
      divmsg.style.opacity = '1'
    }, displayTimeout);
    setTimeout(() => {
      divmsg.style.opacity = '0'
    }, hideTimeout);
    setTimeout(() => {
      divmsg.style.display = 'none'
    }, vanishTimeout);
  }
}

function checkUser(nick) {
  return ignoredUsers.includes(nick);
}

function checkText(text) {
  text = text.toLowerCase();
  return text.includes('src');
}

function deleteMessage(msgId) {
  let no = document.querySelector(`div[data-msgid="${msgId}"]`);
  no.parentNode.removeChild(no);
}

function checkExclamation(text) {
  return ignoreExclamation ? (text.charAt(0) === "!" ? true : false) : false
}

window.addEventListener('onWidgetLoad', function (obj) {
  const fieldData = obj.detail.fieldData;
  displayTimeout = fieldData.displayTimeout * 1000;
  hideTimeout = (fieldData.hideTimeout * 1000) + displayTimeout;
  vanishTimeout = hideTimeout + 1000;
  ignoreExclamation = fieldData.ignoreExclamation === 'no' ? false : true;
  ignoredUsers = fieldData.ignoredUsers.split(" ");
});