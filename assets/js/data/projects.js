// Every project shown on the site.
// To swap a video, replace `videoId` with the ID from the YouTube link
// (youtube.com/watch?v=THIS_PART or youtu.be/THIS_PART).
// Featured projects cycle on the main menu's Work tile; the first one is
// also the blurred background on every page.

export const categories = ["Core systems", "Combat", "Admin tools"];

export const projects = [
  {
    title: "Gun framework",
    category: "Combat",
    videoId: "UsqTtrUZg1A",
    featured: true,
    description:
      "Server-validated firing, recoil, spread and reload states, with a config per weapon. New guns drop in without touching the core code.",
  },
  {
    title: "Inventory system",
    category: "Core systems",
    videoId: "T_odMpCE69g",
    featured: true,
    description:
      "Categorised slots that only accept the right item type, with drag and drop checked on the server.",
  },
  {
    title: "Movement system",
    category: "Core systems",
    videoId: "Qbl2wr_xLnw",
    featured: true,
    description:
      "Smooth movement animations, camera bob, a first-person view model and shift lock.",
  },
  {
    title: "Fireball projectile",
    category: "Combat",
    videoId: "7oXFKr7aSWY",
    featured: true,
    description:
      "A projectile ability with custom effects, server-side hit detection and impact effects.",
  },
  {
    title: "Vault system",
    category: "Core systems",
    videoId: "KZaGAI2Krtg",
    featured: true,
    description:
      "Vault over walls and ledges, with adjustable vault height and speed.",
  },
  {
    title: "Cmdr global messages",
    category: "Admin tools",
    videoId: "H1m-YQsI29w",
    featured: false,
    description:
      "A Cmdr command that sends a message to every live server through MessagingService, limited to admins.",
  },
];
