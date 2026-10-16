import { WORK, ROW_SUBS } from "../data/projects.js";
import { PLAY, ARROW_LEFT, ARROW_RIGHT } from "./icons.js";
import { openModal } from "./modal.js";

function createCard(w, rank) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="card-thumb">
      <span class="card-rank">${rank}</span>
      <span class="card-tag">${w.tag}</span>
      <img src="https://img.youtube.com/vi/${w.id}/maxresdefault.jpg"
           onerror="this.onerror=null;this.src='https://img.youtube.com/vi/${w.id}/hqdefault.jpg';"
           alt="${w.title}" loading="lazy" />
      <div class="card-grad"></div>
      <div class="card-base">${w.title}</div>
      <div class="card-play"><div class="pbtn">${PLAY}</div></div>
      <div class="card-info"><h4>${w.title}</h4><p>${w.desc}</p></div>
    </div>`;
  card.addEventListener("click", () => openModal(w));
  return card;
}

function createRow(cat, items, nextRank) {
  const row = document.createElement("div");
  row.className = "row reveal";
  row.innerHTML = `
    <div class="row-head">
      <div>
        <div class="row-title">${cat.replace(/&/, '<span class="accent">&amp;</span>')}</div>
        <div class="row-sub">${ROW_SUBS[cat] || ""}</div>
      </div>
    </div>
    <div class="row-scroller-wrap">
      <button class="row-arrow left" aria-label="Scroll left">${ARROW_LEFT}</button>
      <div class="row-scroller"></div>
      <button class="row-arrow right" aria-label="Scroll right">${ARROW_RIGHT}</button>
    </div>`;

  const scroller = row.querySelector(".row-scroller");
  items.forEach((w) => scroller.appendChild(createCard(w, String(nextRank()).padStart(2, "0"))));

  const amount = () => Math.max(scroller.clientWidth * 0.8, 280);
  row.querySelector(".row-arrow.left").addEventListener("click", (e) => {
    e.stopPropagation();
    scroller.scrollBy({ left: -amount(), behavior: "smooth" });
  });
  row.querySelector(".row-arrow.right").addEventListener("click", (e) => {
    e.stopPropagation();
    scroller.scrollBy({ left: amount(), behavior: "smooth" });
  });

  return row;
}

export function renderRows() {
  const rowsEl = document.getElementById("rows");
  let rank = 1;
  const nextRank = () => rank++;
  Object.entries(WORK).forEach(([cat, items]) => rowsEl.appendChild(createRow(cat, items, nextRank)));
}
