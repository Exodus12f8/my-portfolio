const FADE_IN_DELAY = 1500;

export function initHeroVideo() {
  const holder = document.querySelector(".hero-video");
  if (!holder) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const id = holder.dataset.videoId;
  const params = new URLSearchParams({
    autoplay: 1,
    mute: 1,
    loop: 1,
    playlist: id,
    controls: 0,
    disablekb: 1,
    playsinline: 1,
    rel: 0,
    iv_load_policy: 3,
    modestbranding: 1
  });

  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube-nocookie.com/embed/${id}?${params}`;
  iframe.title = "Background video";
  iframe.tabIndex = -1;
  iframe.setAttribute("aria-hidden", "true");
  iframe.allow = "autoplay; encrypted-media";
  iframe.addEventListener("load", () => {
    setTimeout(() => holder.classList.add("playing"), FADE_IN_DELAY);
  });

  holder.appendChild(iframe);
}
