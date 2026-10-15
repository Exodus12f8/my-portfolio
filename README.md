# my-portfolio

Portfolio site for ExodusF8, a Roblox systems programmer. Plain HTML, CSS and JavaScript with no build step.

## Structure

```
index.html            Home page
work.html             All projects, with category filter
pricing.html          Price list, estimator, payment terms and FAQ
assets/
  css/
    base.css          Colours, type scale and resets
    layout.css        Header, footer, hero and page sections
    components.css    Buttons, project tiles, video player, pricing, FAQ
  js/
    main.js           Starts everything on each page
    data/
      projects.js     Project list and YouTube video IDs
      pricing.js      Plans, prices and estimator sizes
    components/       Nav, project grid, video player and pricing code
  images/             Image files
```

## Common edits

**Swap a video:** open `assets/js/data/projects.js` and replace the project's `videoId` with the ID from its YouTube link (the part after `watch?v=`). Thumbnails come from YouTube automatically.

**Add a project:** copy one of the entries in `projects.js` and change its details. Set `featured: true` to show it on the home page; the first featured project is the big one at the top.

**Change prices:** edit the `gbp` values in `assets/js/data/pricing.js`. The price list, the estimator and the "From £…" on the home page all update from there.

## Running locally

The scripts are ES modules, so open the site through a local server rather than double-clicking the file:

```
python -m http.server
```

Then visit http://localhost:8000.
