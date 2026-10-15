import { plans, scopes, toUsd } from "../data/pricing.js";

const gbp = (amount) => `£${amount.toLocaleString("en-GB")}`;
const usd = (amount) => `$${amount.toLocaleString("en-US")}`;

function createPriceRow(plan) {
  const row = document.createElement("article");
  row.className = "panel price-row" + (plan.popular ? " price-row--popular" : "");

  const head = document.createElement("div");
  const name = document.createElement("h3");
  name.textContent = plan.name;
  if (plan.popular) {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = "Most booked";
    name.append(badge);
  }
  const audience = document.createElement("p");
  audience.className = "price-for";
  audience.textContent = plan.for;
  head.append(name, audience);

  const list = document.createElement("ul");
  plan.includes.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.append(li);
  });

  const price = document.createElement("p");
  price.className = "price-amount";
  price.innerHTML = `from ${gbp(plan.gbp)}<small>about ${usd(toUsd(plan.gbp))}</small>`;

  row.append(head, list, price);
  return row;
}

function initPriceList(container) {
  container.replaceChildren(...plans.map(createPriceRow));
}

function initEstimator(form) {
  const typeOptions = form.querySelector(".type-options");
  const range = form.querySelector('input[type="range"]');
  const scopeValue = form.querySelector(".scope-value");
  const amount = form.querySelector(".estimate-amount");
  const converted = form.querySelector("[data-estimate-usd]");

  const defaultPlan = Math.max(0, plans.findIndex((p) => p.popular));

  plans.forEach((plan, index) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="plan" value="${index}"><span></span>`;
    label.querySelector("span").textContent = plan.name;
    label.querySelector("input").checked = index === defaultPlan;
    typeOptions.append(label);
  });

  range.max = String(scopes.length - 1);
  range.value = "2";

  const update = () => {
    const plan = plans[Number(form.elements.plan.value)];
    const scope = scopes[Number(range.value)];
    const total = Math.round((plan.gbp * scope.multiplier) / 5) * 5;

    scopeValue.textContent = scope.label;
    range.setAttribute("aria-valuetext", scope.label);
    amount.textContent = `${gbp(total)}+`;
    converted.textContent = usd(toUsd(total));
  };

  form.addEventListener("input", update);
  form.addEventListener("submit", (event) => event.preventDefault());
  update();
}

export function initPricing() {
  const list = document.querySelector("[data-price-list]");
  if (list) initPriceList(list);

  const estimator = document.querySelector("[data-estimator]");
  if (estimator) initEstimator(estimator);
}
