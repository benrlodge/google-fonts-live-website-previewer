# Google Fonts Live Website Previewer

View your website with various google-font selections. E.g. see what your headers (h1, h2, h3...) look like with one particular google font, and another for paragraphs. You can use any CSS style selector to target your markup.

Demo coming soon (for now you clone this repo, and follow the development instructions at the bottom)

## Purpose
You may be wondering, isn't there probably a chrome extension that already does this? Yep, but that's not the idea here. The audience for this is freelancers or other agencies that design websites for people who want to make it easy for their clients to view their website with various fonts. Let's be honest, many clients are not tech-savvy, so telling them to go download a chrome extension is not always a wise idea. Furthermore, I plan on adding fine grain control which will allow you to limit which fonts are given as options, as well as preload selections (saved in a query string). And I was looking for a fun new project to work on, so here it is. Feature requests and PRs are welcome.

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
The app requests a (daily) cached json file of the google fonts api that I've hosted on S3, along with a stylesheet for the app's styles, and then generates a React.js app with a fixed button on the left to start editing. When editing, you specifiy a CSS selector and a font-family. Once you submit the the selection, the head of the html is injected with the font-family's font styleheet link, and an internal style of the selection you make is injected into the head as well.

When choosing a selector, use normal CSS selectors, for example:
 - h1
 - span
 - .some-class
 - .some-class .and-a-descendant
 - .some-class > .and-a-child
 - etc.

### Todo
In no real order

 - Live preview of fonts during browsing.
 - Ability to click text on the page to determine what a selector it is, and auto-fill the selector input of that choice.
 - More filters - category, script, variants, etc
 - Add to collection feature (similar to google.com/fonts)
 - Links to google fonts on chosen fonts
 - Deep linking (e.g. query string) of selections made.
 - Options object:
   - Limit which fonts are displayed as options
   - Default Script (e.g. Latin, Vietnamese, Hebrew), and limit type of scripts
   - Custom google api url (e.g. if you want to host yourself)
   - Position of the app (e.g. top-left (current default), top-right, bottom-left, bottom-right)


### Development
If you'd like to run it locally:
 - run `npm start` to start webpack and a local dev server at localhost:8080 (loads the dist/index.html)
 - run `npm test` to run tests

To build, run `npm run build`
