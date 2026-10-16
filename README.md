# my-portfolio

Portfolio site for ExodusF8, a Roblox developer. Plain HTML, CSS and JavaScript with no build step.

## Structure

```
index.html                  Page markup
assets/
  css/
    base.css                Colours, resets, buttons, scroll reveal
    nav.css                 Top bar and mobile menu
    hero.css                Hero banner and stat ticker
    catalog.css             Project rows and cards
    pricing.css             Services, plans, quote estimator, specs
    faq.css                 FAQ
    contact.css             Contact section and footer
    modal.css               Video pop-up
  js/
    main.js                 Starts everything
    data/
      projects.js           Project rows and YouTube video IDs
      content.js            Services, plans/prices and FAQ
    components/             Code that renders each section
```

## Common edits

**Swap or add a video:** edit `assets/js/data/projects.js`. The `id` is the part after `watch?v=` in the YouTube link. Each key (Core Systems, Combat & Abilities, ...) is a row.

**Hero background:** the top of the page plays the gun framework video muted on a loop, with its thumbnail showing while it loads. To change it, swap the video ID in both the `hero-bg` image and the `data-video-id` on `hero-video` in `index.html`.

**Change prices:** edit `PLANS` in `assets/js/data/content.js`. The quote estimator uses the same prices.

## Running locally

The scripts are ES modules, so open the site through a local server:

```
python -m http.server
```
