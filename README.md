# Google Fonts Live Website Previewer

View your website with various google-font selections. E.g. see what your headers (h1, h2, h3...) look like with one particular google font, and another for paragraphs. You can use any CSS style selector to target your markup.

Demo coming soon

## Usage
Include the javascript, and instantiate it with `GFLP`.
```
<script src="GFLP.js"></script>
<script>
  var options = {}; // none currently exist, this is a todo
  GFLP(options);
</script>
```

## Options
No options currently exist, but I' planning on adding finer grain control in future versions. Some of these include -

 - Include your own google fonts file reference
 - Position of the app (e.g. top-left (current default), top-right, bottom-left, bottom-right)
 - Default Script (e.g. Latin, Vietnamese, Hebrew)
 - etc.

## How's it work
The app requests a (daily) cached json file of the google fonts api that I've hosted on S3, along with a stylesheet for the app's styles, and then generates a React.js app with a fixed button on the left to start editing. When editing, you specificy a CSS selector and a font-family. Once you submit the the selection, the head of the html is injected with the font-family's font styleheet link, and an internal style of the selection you make is injected into the head as well.

for example:
 - h1
 - span
 - .some-class
 - .some-class .and-a-descendant
 - .some-class.and-a-child
 - etc.

### Todo
 - Live preview of font during browsing.
 - Ability to click text on the page to determine what a selector it is, and auto-fill the selector input of that choice.
 - More filters - category, script, variants, etc
 - Add to collection feature (similar to google.com/fonts)
 - Links to google fonts on chosen fonts
