import { projects } from "../data/projects.js";
import { thumbnailFor } from "./project-grid.js";

const SLIDE_MS = 4000;

function thumbUrl(videoId) {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export function initBackdrop() {
  const image = document.querySelector(".backdrop-image");
  const first = projects.find((p) => p.featured) ?? projects[0];
  if (!image || !first) return;

  image.style.setProperty("--backdrop-url", `url("${thumbUrl(first.videoId)}")`);
}

export function initWorkSlideshow() {
  const media = document.querySelector("[data-work-slideshow]");
  if (!media) return;

  const featured = projects.filter((p) => p.featured);
  const slides = featured.map((project) => {
    const img = thumbnailFor(project.videoId);
    img.loading = "eager";
    return img;
  });

  if (!slides.length) return;

  media.replaceChildren(...slides);
  slides[0].classList.add("is-active");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (slides.length < 2 || reduceMotion) return;

  let current = 0;
  setInterval(() => {
    slides[current].classList.remove("is-active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("is-active");
  }, SLIDE_MS);
}
