# A chat widget for your live.
![Chat example](https://i.ibb.co/k9fkJxD/Screenshot-2022-01-04-at-18-46-14-Stream-Elements-The-ultimate-tools-for-live-streaming.png "Chat example of the overlay")

This is a custom template that I made 4 fun and decided to make it public for everyone that wishes to use!

It was created inside the streamelements overlay using a custom widget

+ Features:
    + Customizable background color
    + Customizable Message background color
    + Customizable time to the message appear
    + Customizable time to the message disappear
    + Customizable ignored users from apprearing in overlay
    + Customizable font
+ Option to ignore the !
+ Messages auto deleted in the chat will also be deleted from the widget

## How to add in my overlay

1. Generate a new overlay in the streamelements dashboard. I recommend 480x720, but you can do whatever you want
2. Add a Custom Widget, you can find it in Static/Custom -> Custom Widget
3. Click in the Custom Widget that you have just created and click in "Position, size and style"
    1. Put the Width and the Height to the size you chose in the overlay
    2. Put Top and Left to 0   
4. Click in the Custom Widget that you have just created and click in open editor on the left side
    1. Copy everything in [index.html](./index.html) inside the HTML tab
    2. Copy everything in [style.css](./style.css) inside the CSS tab
    3. Copy everything in [script.js](./script.js) inside the JS tab
    4. Copy everything in [fields.json](./fields.json) inside the FIELDS tab
    5. Copy everything in [data.json](./data.json) inside the DATA tab
    6. Click in Done
5.  Select the widget and go to Settings > Fields to make your modifications!

That's all, I hope you enjoy and leave a feedback :)

## To Do

- [ ] Customizable font size
- [ ] Customizable font color
- [ ] Customizable chat size

