// Each key is a row on the site, shown in this order. To swap a video, replace `id` with the part
// after "watch?v=" in the YouTube link. Thumbnails load from YouTube.

export const WORK = {
  "Combat & Abilities": [
    { id: "G40qGEAJHQs", title: "Gun Framework", tag: "Framework", desc: "Modular gun framework with server-validated firing, recoil, spread, reload states and per-weapon configs. Drop new guns in without touching core logic." },
    { id: "7oXFKr7aSWY", title: "Projectile System", tag: "Ability", desc: "Fireball projectile ability with custom VFX, server-validated hit detection and impact effects on contact." }
  ],
  "Core Systems": [
    { id: "T_odMpCE69g", title: "Inventory System", tag: "System", desc: "Categorised inventory — each slot is type-locked so shirts go in shirt slots, weapons in weapon slots, etc. Full drag-and-drop with validation." },
    { id: "Qbl2wr_xLnw", title: "Movement System", tag: "System", desc: "Smooth animations with camera bobbing, a first-person view model and buttery shiftlock." },
    { id: "y8DnUTPBamI", title: "Catalog Avatar Creator System", tag: "System", desc: "Catalog Avatar Creator style marketplace — browse items by category, inspect and equip them on your avatar, save outfits and switch between R6 and R15." }
  ],
  "Admin & Tools": [
    { id: "H1m-YQsI29w", title: "CMDR — Global Messages", tag: "Admin", desc: "Custom CMDR command broadcasting global messages to every server via MessagingService. Supports formatting and admin-level permissions." }
  ]
};

export const ROW_SUBS = {
  "Combat & Abilities": "Guns · VFX · server-validated hitboxes",
  "Core Systems": "Inventory · movement · mechanics",
  "Admin & Tools": "Moderation · anti-exploit · commands"
};
