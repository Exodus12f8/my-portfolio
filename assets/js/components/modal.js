let modal;
let iframe;

export function openModal(w) {
  iframe.src = `https://www.youtube.com/embed/${w.id}?autoplay=1&rel=0`;
  document.getElementById("modal-tag").textContent = w.tag;
  document.getElementById("modal-title").textContent = w.title;
  document.getElementById("modal-desc").textContent = w.desc;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  iframe.src = "";
  document.body.style.overflow = "";
}

export function initModal() {
  modal = document.getElementById("modal");
  iframe = document.getElementById("modal-iframe");
  document.getElementById("modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}
