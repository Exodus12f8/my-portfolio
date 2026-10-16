import { initModal } from "./components/modal.js";
import { renderRows } from "./components/rows.js";
import { renderServices, renderPlans, renderFaq } from "./components/sections.js";
import { initEstimator } from "./components/estimator.js";
import { initNav, initReveal } from "./components/nav.js";

initModal();
renderRows();
renderServices();
renderPlans();
renderFaq();
initEstimator();
initNav();
initReveal();
