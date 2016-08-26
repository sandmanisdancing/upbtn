# upbtn

A simple jQuery plugin that adds to page a button that can scroll you to top of it.

## Usage:

Include jQuery and jquery.upbtn scripts and styles in HTML document:
```html
<link href="styles/jquery.upbtn.css">

<script src="jquery.js"></script>
<script src="scripts/jquery.upbtn.js"></script>
```
and then just:
```javascript
$(document).ready(function() {
  $('.up-btn').handleUptn();
});
```

You don't have to create HTML-element `.up-btn` in HTML-document before call, it will be created by plugin. If you need this button somewhere else but at the end of `body` element, you have to put in manually there.
