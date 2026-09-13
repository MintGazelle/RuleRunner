// RuleRunner games list — the single place that knows which games exist.
//
// To add a new game: create its data/<id>.js file (see RULES-PROCESS.md),
// then add one entry below pointing to it. index.html loads whatever's in
// this list automatically — it never needs to be edited to add a game.
//
// Each entry:
//   id          — must match the key that game's data file sets on GAMES
//   description — short one-line blurb shown on the landing page's game card
//   file        — path to that game's data file, relative to index.html
//
// The display name, example prompt, and BGG/rules link live inside the game's
// own data file (as GAMES["id"].name / .example / .infoUrl) — not here.

const GAME_LIST = [
  { id: "spirit-island", description: "Cooperative spirits defending an island from invaders.", file: "data/spirit-island.js" },
  { id: "terraforming-mars", description: "Corporations racing to terraform Mars.", file: "data/terraforming-mars.js" },
  { id: "root", description: "Asymmetric woodland warfare and politics.", file: "data/root.js" },
  { id: "warhammer-40k", description: "Tabletop miniatures combat across the grimdark 41st millennium.", file: "data/warhammer-40k.js" },
  { id: "carcassonne", description: "Tile-laying medieval roads, cities, and farms.", file: "data/carcassonne.js" },
];

// The first game in the list above is used as the app's default selection.
const DEFAULT_GAME = GAME_LIST[0].id;
