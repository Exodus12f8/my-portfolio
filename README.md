# my-portfolio

Portfolio site for ExodusF8, a Roblox systems programmer. Plain HTML, CSS and JavaScript with no build step.

## Structure

```
index.html            Main menu
work.html             All projects, with category filter
pricing.html          Price list, estimator, payment terms and FAQ
about.html            What I build and how hiring works
assets/
  css/
    base.css          Colours, type scale and resets
    layout.css        Header, footer, hero and page sections
    components.css    Buttons, project tiles, video player, pricing, FAQ
    menu.css          Main menu screen and its tiles
  js/
    main.js           Starts everything on each page
    data/
      projects.js     Project list and YouTube video IDs
      pricing.js      Plans, prices and estimator sizes
    components/       Nav, menu, project grid, video player and pricing code
```

## Common edits

**Swap a video:** open `assets/js/data/projects.js` and replace the project's `videoId` with the ID from its YouTube link (the part after `watch?v=`). Thumbnails come from YouTube automatically.

**Add a project:** copy one of the entries in `projects.js` and change its details. Set `featured: true` to include it in the main menu's Work slideshow; the first featured project is also the blurred background on every page.

**Change prices:** edit the `gbp` values in `assets/js/data/pricing.js`. The price list, the estimator and the "from £…" on the main menu all update from there.

## Running locally

The scripts are ES modules, so open the site through a local server rather than double-clicking the file:

```
python -m http.server
```

Then visit http://localhost:8000.
