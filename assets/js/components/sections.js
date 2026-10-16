import { SERVICES, PLANS, FAQ } from "../data/content.js";
import { CHECK } from "./icons.js";

const featureList = (items) => items.map((f) => `<li>${CHECK}<span>${f}</span></li>`).join("");

export function renderServices() {
  const grid = document.getElementById("services-grid");
  SERVICES.forEach((s) => {
    const el = document.createElement("div");
    el.className = "plan reveal";
    el.innerHTML = `
      <div class="plan-name" style="font-size:1.25rem">${s.t}</div>
      <p class="plan-for" style="margin-top:8px;color:#bdbdbd;font-weight:500">${s.d}</p>
      <div class="plan-line"></div>
      <ul class="plan-feats">${featureList(s.f)}</ul>`;
    grid.appendChild(el);
  });
}

export function renderPlans() {
  const plansEl = document.getElementById("plans");
  PLANS.forEach((p) => {
    const el = document.createElement("div");
    el.className = "plan reveal" + (p.featured ? " featured" : "");
    el.innerHTML = `
      ${p.featured ? '<div class="plan-badge">Most Popular</div>' : ""}
      <div class="plan-name">${p.name}</div>
      <div class="plan-for">${p.forw}</div>
      <div class="plan-price"><span class="cur">£</span>${p.gbp}<span class="plus">+</span></div>
      <div class="plan-usd">≈ $${p.usd}+ USD</div>
      <div class="plan-line"></div>
      <ul class="plan-feats">${featureList(p.feats)}</ul>
      <a href="#contact" class="btn-${p.featured ? "red" : "ghost"} plan-btn">Choose ${p.name.split(" ")[0]}</a>`;
    plansEl.appendChild(el);
  });
}

export function renderFaq() {
  const faqEl = document.getElementById("faq-list");
  FAQ.forEach((f, i) => {
    const det = document.createElement("details");
    det.className = "faq-item";
    if (i === 0) det.open = true;
    det.innerHTML = `
      <summary>
        <span class="faq-q">${f.q}</span>
        <span class="faq-plus"></span>
      </summary>
      <div class="faq-a">${f.a}</div>`;
    faqEl.appendChild(det);
  });
}
