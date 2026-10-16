import { initModal } from "./components/modal.js";
import { renderRows } from "./components/rows.js";
import { renderServices, renderPlans, renderFaq } from "./components/sections.js";
import { initEstimator } from "./components/estimator.js";
import { initNav, initReveal } from "./components/nav.js";
import { initHeroVideo } from "./components/hero-video.js";

initHeroVideo();
initModal();
renderRows();
renderServices();
renderPlans();
renderFaq();
initEstimator();
initNav();
initReveal();
