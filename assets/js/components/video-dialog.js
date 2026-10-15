let dialog;
let frame;
let title;
let description;

function close() {
  dialog.close();
}

function handleClose() {
  frame.src = "";
}

export function initVideoDialog() {
  dialog = document.querySelector(".video-dialog");
  if (!dialog) return;

  frame = dialog.querySelector("iframe");
  title = dialog.querySelector("[data-video-title]");
  description = dialog.querySelector("[data-video-description]");

  dialog.querySelector(".video-close").addEventListener("click", close);
  dialog.addEventListener("close", handleClose);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) close();
  });
}

export function openVideo(project) {
  if (!dialog) return;

  frame.src = `https://www.youtube-nocookie.com/embed/${project.videoId}?autoplay=1&rel=0`;
  frame.title = project.title;
  title.textContent = project.title;
  description.textContent = project.description;
  dialog.showModal();
}
