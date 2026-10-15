import { projects, categories } from "../data/projects.js";
import { openVideo } from "./video-dialog.js";

export function thumbnailFor(videoId) {
  const img = document.createElement("img");
  img.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  img.alt = "";
  img.loading = "lazy";
  img.decoding = "async";
  img.addEventListener(
    "error",
    () => {
      img.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    },
    { once: true }
  );
  return img;
}

const PLAY_ICON =
  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l12.5-7.5z"/></svg>';

function createTile(project, index) {
  const tile = document.createElement("button");
  tile.type = "button";
  tile.className = "project";
  tile.style.setProperty("--i", index);
  tile.setAttribute("aria-label", `Play video: ${project.title}`);

  const play = document.createElement("span");
  play.className = "project-play";
  play.innerHTML = PLAY_ICON;

  const body = document.createElement("div");
  body.className = "project-body";

  const type = document.createElement("p");
  type.className = "project-type";
  type.textContent = project.category;

  const heading = document.createElement("h3");
  heading.textContent = project.title;

  const desc = document.createElement("p");
  desc.className = "project-desc";
  desc.textContent = project.description;

  body.append(type, heading, desc);
  tile.append(thumbnailFor(project.videoId), play, body);
  tile.addEventListener("click", () => openVideo(project));

  return tile;
}

function render(grid, list) {
  grid.replaceChildren(...list.map(createTile));
}

function initFilter(bar, grid, source) {
  const options = ["All", ...categories];

  const buttons = options.map((name) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = name;
    button.setAttribute("aria-pressed", String(name === "All"));

    button.addEventListener("click", () => {
      buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
      const filtered = name === "All" ? source : source.filter((p) => p.category === name);
      render(grid, filtered);
    });

    return button;
  });

  bar.replaceChildren(...buttons);
}

export function initProjectGrids() {
  document.querySelectorAll("[data-project-grid]").forEach((grid) => {
    const list = projects;

    render(grid, list);

    const bar = document.querySelector(`[data-project-filter="${grid.id}"]`);
    if (bar) initFilter(bar, grid, list);
  });
}
