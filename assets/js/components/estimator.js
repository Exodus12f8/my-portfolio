import { PLANS } from "../data/content.js";

const SCOPE_MULT = { 1: 0.7, 2: 1, 3: 1.3, 4: 1.7, 5: 2.1, 6: 2.5, 7: 3 };
const SCOPE_LABEL = { 1: "Tiny", 2: "Small", 3: "Medium", 4: "Large", 5: "Heavy", 6: "Massive", 7: "Enormous" };

function animateNum(el, target) {
  const start = parseInt(el.textContent.replace(/\D/g, "")) || 0;
  const dur = 400;
  const t0 = performance.now();
  function step(now) {
    const p = Math.min((now - t0) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(start + (target - start) * e);
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export function initEstimator() {
  const typeChips = document.getElementById("type-chips");
  const scopeEl = document.getElementById("scope");
  const gbpEl = document.getElementById("est-gbp");
  const usdEl = document.getElementById("est-usd");
  let selType = 1;
  let selScope = 3;

  function calc() {
    const gbp = Math.round((PLANS[selType].gbp * SCOPE_MULT[selScope]) / 5) * 5;
    animateNum(gbpEl, gbp);
    usdEl.textContent = Math.round((gbp * 1.3) / 5) * 5;
  }

  PLANS.forEach((t, i) => {
    const b = document.createElement("button");
    b.className = "est-chip" + (i === selType ? " active" : "");
    b.textContent = t.name;
    b.addEventListener("click", () => {
      selType = i;
      [...typeChips.children].forEach((c, j) => c.classList.toggle("active", j === i));
      document.getElementById("type-val").textContent = t.name;
      calc();
    });
    typeChips.appendChild(b);
  });

  scopeEl.addEventListener("input", () => {
    selScope = +scopeEl.value;
    document.getElementById("scope-val").textContent = SCOPE_LABEL[selScope];
    calc();
  });

  calc();
}
