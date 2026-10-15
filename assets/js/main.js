import { initNav } from "./components/nav.js";
import { initBackdrop, initWorkSlideshow } from "./components/menu.js";
import { initVideoDialog } from "./components/video-dialog.js";
import { initProjectGrids } from "./components/project-grid.js";
import { initPricing } from "./components/pricing.js";
import { plans } from "./data/pricing.js";

initNav();
initBackdrop();
initWorkSlideshow();
initVideoDialog();
initProjectGrids();
initPricing();

document.querySelectorAll("[data-lowest-price]").forEach((el) => {
  el.textContent = `£${Math.min(...plans.map((p) => p.gbp))}`;
});

document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
