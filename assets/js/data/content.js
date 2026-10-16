// Services, pricing plans and FAQ. Plan prices also drive the quote estimator.

export const SERVICES = [
  { t: "Combat Systems", d: "Melee combos, ranged projectiles, server-validated and lag-compensated.", f: ["Abilities & VFX", "Server-side hitboxes", "Gun frameworks"] },
  { t: "UI Systems", d: "Menus, inventories, shops and HUDs — fully animated and responsive.", f: ["Tweened & adaptive", "GamePass integration", "2D & 3D interfaces"] },
  { t: "Backend & Data", d: "ProfileStore, data migration, global leaderboards and webhooks.", f: ["ProfileStore setup", "Global leaderboards", "Discord webhooks"] },
  { t: "Frameworks", d: "Custom networking, ECS and modular systems built to scale.", f: ["OOP & ECS", "Networking layers", "Modular architecture"] },
  { t: "Game Mechanics", d: "NPC AI, pathfinding, placement systems and quest logic.", f: ["NPC AI & pathfinding", "Quest & tool logic", "Placement systems"] },
  { t: "Admin & Moderation", d: "CMDR, custom admin panels and anti-exploit hardening.", f: ["CMDR & panels", "Anti-exploit", "Audit logging"] }
];

export const PLANS = [
  { name: "Module", forw: "Single feature / bug fix", gbp: 50, usd: 65, feats: ["One feature or module", "Bug fixes & patches", "Standalone scripts", "Quick turnaround"], featured: false },
  { name: "Standard System", forw: "Combat · UI · backend", gbp: 150, usd: 195, feats: ["A complete system", "Server-validated logic", "Revisions included", "Clean documentation"], featured: true },
  { name: "Complex Build", forw: "Multi-system jobs", gbp: 400, usd: 520, feats: ["Multiple linked systems", "Advanced architecture", "Performance tuning", "Priority support"], featured: false },
  { name: "Full Experience", forw: "Full game / retainer", gbp: 1000, usd: 1300, feats: ["End-to-end game build", "Ongoing retainer option", "Framework & tooling", "1k+ CCU ready"], featured: false }
];

export const FAQ = [
  { q: "Do you offer refunds?", a: "No. Once a project is finished and delivered, refunds are not issued under any circumstances. That's why scope is agreed clearly upfront." },
  { q: "How does payment work?", a: "PayPal only (GBP or USD), with Robux via DevEx rates currently accepted too. Small modules are paid on completion. Larger systems require a 30–50% non-refundable deposit before work begins, with the remainder due on delivery." },
  { q: "What should I include when I DM?", a: "What you need built, your budget range, and your deadline. \"Hey are you free?\" with no other info gets skipped. The more detail you give upfront, the faster you get a quote." },
  { q: "How long do projects take?", a: "Modules can turn around in a day or two. Standard systems usually take a few days; complex builds and full experiences are scheduled with a clear timeline before we start." },
  { q: "Do you do long-term work?", a: "Yes, as long as it's decently paid. Reach out with your game, what you need and your budget." }
];
