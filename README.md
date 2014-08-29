Boopup
======

Bootstrap Popups
---

This is a reimplementation of the browser popups: alert, confirm and (TODO) prompt, using bootstrap modals.

Instructions for using:

1) Add a link to the js file in your html:

```html
<script src="/dist/boopup.js"></script>
```

Warning: this will apend the bootstrap modals to your body!

2) Use the global variable Boopup:

```javascript
Boopup.alert("This is a boopup alert!");

Boopup.confirm("This is a boopup confirm!", function(result) {
    console.log(result);
})
            
```

Bootstrap and jquery must already be loaded.
