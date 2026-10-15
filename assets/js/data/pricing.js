// Starting prices in GBP. The USD figure is worked out from `usdRate`.
// Change a price here and both the price list and the estimator update.

export const usdRate = 1.3;

export const plans = [
  {
    name: "Module",
    for: "One feature or a bug fix",
    gbp: 40,
    includes: ["A single feature or script", "Bug fixes and patches", "Usually done in a day or two"],
  },
  {
    name: "System",
    for: "A full combat, UI or data system",
    gbp: 125,
    popular: true,
    includes: ["One complete system", "Server-side validation", "Revisions and documentation"],
  },
  {
    name: "Large build",
    for: "Several systems that work together",
    gbp: 340,
    includes: ["Multiple linked systems", "Architecture planned up front", "Performance tuning", "Priority replies"],
  },
  {
    name: "Full game",
    for: "A whole game, or ongoing work",
    gbp: 850,
    includes: ["The game built end to end", "Framework and tools", "Option to stay on as a retainer"],
  },
];

export const scopes = [
  { label: "Tiny", multiplier: 0.7 },
  { label: "Small", multiplier: 1 },
  { label: "Medium", multiplier: 1.3 },
  { label: "Large", multiplier: 1.7 },
  { label: "Very large", multiplier: 2.1 },
];

export function toUsd(gbp) {
  return Math.round((gbp * usdRate) / 5) * 5;
}
