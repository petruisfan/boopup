Boopup
======

Bootstrap Popups
---

This is a reimplementation of the browser popups: alert, confirm and prompt, using bootstrap modals.

Instructions for using:

1) Add a link to the js and css file in your html:

```html
<script src="/bower_components/boopup/dist/boopup.js"></script>
<link rel="stylesheet" href="bower_components/boopup/dist/boopup.min.css"/>
```

Warning: this will append the bootstrap modals to your body!

2) Use the global variable Boopup:

## Alert

```javascript
Boopup.alert("This is a boopup alert!");
```

![Example](/screenshots/alert.png?raw=true)

## Confirm

```javascript
Boopup.confirm("This is a boopup confirm!", function(agree) {
    console.log(agree);
})
```

![Example](/screenshots/confirm.png?raw=true)

## Prompt

```javascript
Boopup.prompt("This is a boopup prompt!", function(input) {
    console.log(input);
})          
```

![Example](/screenshots/prompt.png?raw=true)


Bootstrap and jquery must already be loaded.
You can customize the css by overriding boopup.min.css classes.

