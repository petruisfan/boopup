Boopup
======

Bootstrap Popups
---

This is a reimplementation of the browser popups: alert, confirm and prompt, using bootstrap modals.

Instructions for using:

1) Add a link to the js and css file in your html:

```html
<script src="/dist/boopup.js"></script>
<link rel="stylesheet" href="/dist/boopup.min.css"/>
```

Warning: this will apend the bootstrap modals to your body!

2) Use the global variable Boopup:

```javascript
Boopup.alert("This is a boopup alert!");

Boopup.confirm("This is a boopup confirm!", function(agree) {
    console.log(agree);
})

Boopup.prompt("This is a boopup prompt!", function(input) {
    console.log(input);
})
            
```

Bootstrap and jquery must already be loaded.
You can customize the css by overriding boopup.min.css classes.