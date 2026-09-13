// RuleRunner game data — carcassonne
// Lives at data/carcassonne.js in the repo, loaded by index.html.
// Independently-written rule summaries — not copied from any rulebook.
//
// SCOPE NOTE (read before adding more): Carcassonne has 10 official large
// expansions and 20+ small/promotional mini-expansions released over 20+
// years (many were convention exclusives or magazine inserts, never sold
// as standalone boxes). This file covers the base game plus the 9 major
// numbered expansions that are actually sold as standalone products:
// Inns & Cathedrals, Traders & Builders, Princess & Dragon, The Tower,
// Abbey & Mayor, The Count of Carcassonne, The Catapult, Bridges/Castles/
// Bazaars, and The River. It deliberately does NOT cover the 20+ small
// promotional mini-expansions (Crop Circles, Flying Machines, Ferries,
// Gold Mines, Mage & Witch, The Robbers, Wind Roses, the annual
// "Bonusplättchen" tiles, etc.) — those can be added incrementally later
// following the same process, but doing all of them here would have meant
// shallow, under-researched coverage rather than the standard the rest of
// this project holds to.

GAMES["carcassonne"] = {
  name: "Carcassonne",
  example: "how does farmer scoring work?",
  infoUrl: "https://boardgamegeek.com/boardgame/822/carcassonne",
  rules: [
    { id:"carc-tile-placement", title:"Tile Placement", phase:"General", keywords:["tile placement","placing a tile","how do i place a tile"],
      text:"On your turn, draw one tile and place it adjacent to at least one already-placed tile, so that every edge you connect it to matches (road to road, city to city, field to field). If you can't legally place the tile anywhere, it's set aside out of the game and you draw a replacement." },
    { id:"carc-followers", title:"Followers (Meeples)", phase:"General", keywords:["followers","meeple","meeples","placing a meeple"],
      text:"After placing a tile, you may place one follower from your supply onto that tile, as a Thief on a road, a Knight in a city, a Monk in a cloister, or a Farmer in a field. You can only place a follower on a feature that doesn't already have one, and you only get one follower placement per turn." },
    { id:"carc-roads", title:"Roads", phase:"Scoring", keywords:["roads","road scoring"],
      text:"A road scores 1 point per tile it passes through once both its ends are closed off, by a city edge, a cloister, or an intersection. It's scored immediately when completed, and its Thief returns to its owner's supply." },
    { id:"carc-cities", title:"Cities", phase:"Scoring", keywords:["cities","city scoring"],
      text:"A completed city scores 2 points per tile it's made of, plus 2 more for each shield symbol among those tiles. It's scored immediately when its last open edge is closed off, and its Knight returns to its owner's supply." },
    { id:"carc-cloisters", title:"Cloisters", phase:"Scoring", keywords:["cloister","cloister scoring","monastery"],
      text:"A cloister scores 9 points total — 1 for itself and 1 for each of the 8 tiles surrounding it — once all 8 surrounding spaces have a tile placed in them. It's scored immediately when completed, and its Monk returns to its owner's supply." },
    { id:"carc-farms", title:"Farms & Farmer Scoring", phase:"Scoring", linkTerm:"Farmer", keywords:["farms","farmer scoring","fields"],
      text:"Farmers are placed in fields and are never returned to your supply or scored during play — they stay on the board until final scoring. At game end, each farm scores 3 points for every completed city it touches, to whichever player has the most farmers in that farm; a farm can score multiple times if it touches multiple completed cities, and tied players each score the full amount." },
    { id:"carc-clar-farmer-scoring-editions", title:"Two Different Farmer Scoring Systems Exist", phase:"Clarification", relatedTo:"carc-farms", keywords:["old farmer scoring","4 points per city farmer","which farmer scoring"],
      text:"Older printings (the original Rio Grande Games English edition) scored farmers differently: 4 points per completed city, with each city only ever paying out once regardless of how many farms touched it. The current standard, used in modern reprints and the Big Box editions, is 3 points per completed city per farm that touches it, allowing multiple payouts for a well-connected farm. If your farmer scores feel off compared to what you remember, this edition difference is usually why — agree with your group on which version you're using before the game starts." },
    { id:"carc-completing-features", title:"Completing a Feature", phase:"General", keywords:["completing a feature","when does a feature score"],
      text:"Roads, cities, and cloisters are scored the instant they're completed, whether or not it's the completing player's own turn's follower — a tile you place can complete and score an opponent's road or city just as easily as your own." },
    { id:"carc-final-scoring", title:"Final Scoring", phase:"Scoring", keywords:["final scoring","end of game scoring","incomplete features"],
      text:"When the last tile is placed, incomplete features are scored at reduced value: an unfinished road scores 1 point per tile, an unfinished city scores 1 point per tile plus 1 per shield, and an unfinished cloister scores 1 point for itself plus 1 per already-placed surrounding tile. Farms are then scored last, using the normal farm scoring rule." },
    { id:"carc-game-end", title:"Game End", phase:"General", keywords:["game end","how does the game end","last tile"],
      text:"The game ends the moment the last tile from the shared supply is drawn and placed. Final scoring happens immediately after that placement, including any follower it places." },
    { id:"carc-inns-cathedrals", title:"Inns & Cathedrals", phase:"Expansion", keywords:["inns and cathedrals","inns cathedrals","large meeple","big meeple"],
      text:"Each player gets one large follower, which counts as 2 ordinary followers when determining who scores a feature. Inn tiles double a road's score when it's completed, but reduce it to zero if the road is still incomplete at game end; Cathedral tiles do the same for a city's score, tripling it when complete or zeroing it if not." },
    { id:"carc-traders-builders", title:"Traders & Builders", phase:"Expansion", keywords:["traders and builders","traders builders","builder token","trade goods"],
      text:"A Builder follower placed on a road or city you already control lets you take an immediate second tile placement if that tile extends the same feature. Trade goods (wine, grain, and cloth) are collected when their city is completed, and whoever holds the most of each type scores 10 bonus points for it at game end, with ties scoring the full amount." },
    { id:"carc-princess-dragon", title:"Princess & the Dragon", phase:"Expansion", keywords:["princess and the dragon","princess dragon","dragon tile","fairy","volcano"],
      text:"When a Dragon tile is drawn, the Dragon moves several tiles and eats any followers it lands on, returning them to their owners without scoring. A Princess tile lets you remove one Knight from that city, letting a Farmer or a fresh follower take over it for free. The Fairy protects a follower and grants it bonus points at the end of each of its owner's turns." },
    { id:"carc-the-tower", title:"The Tower", phase:"Expansion", keywords:["tower","the tower expansion","tower tile","capturing a follower"],
      text:"Tower tiles let you build tower segments over multiple turns. Once built high enough, a tower can capture an enemy follower within its reach, holding that follower prisoner until its owner trades a prisoner of their own (or one of their own tower-holding opponents) to get it back." },
    { id:"carc-abbey-mayor", title:"Abbey & Mayor", phase:"Expansion", keywords:["abbey and mayor","abbey mayor","mayor meeple","wagon","barn"],
      text:"Abbey tiles can be played into any single-tile gap on the board regardless of matching edges, and immediately complete every feature touching them. The Mayor scores a city based on its number of pennants rather than tile count; the Wagon moves to an adjacent incomplete feature when the one it's on is completed; and the Barn lets a farm score partway through the game instead of only at the end." },
    { id:"carc-count-of-carcassonne", title:"The Count of Carcassonne", phase:"Expansion", keywords:["count of carcassonne","carcassonne city board"],
      text:"This expansion replaces the starting tile with a multi-tile city board representing Carcassonne itself. Whenever a tile you place lets an opponent score, you may place one of your followers into the city instead of on the board; those followers can later move out to newly-placed features, except from whichever quarter currently holds the Count token." },
    { id:"carc-the-catapult", title:"The Catapult", phase:"Expansion", keywords:["catapult","the catapult expansion","catapult piece"],
      text:"The Catapult adds a physical flicking mechanic: players launch small tokens from a plastic catapult piece to try to land on and affect specific tiles or followers on the board, rather than resolving those effects through normal placement rules. It's the most dexterity-based of the expansions and is commonly left out by groups who prefer Carcassonne's normal, no-physical-skill pace." },
    { id:"carc-bridges-castles-bazaars", title:"Bridges, Castles & Bazaars", phase:"Expansion", keywords:["bridges castles and bazaars","bridges castles bazaars","bazaar tile","castle token"],
      text:"Bridges let a road continue across a field tile it would otherwise dead-end into, effectively ignoring that tile's field edge. Castle tokens are placed on 2-segment cities and pay out extra points based on the next feature completed adjacent to them. Bazaar tiles trigger an auction where players bid points to choose from several newly-revealed tiles before placing." },
    { id:"carc-the-river", title:"The River", phase:"Expansion", keywords:["river","the river expansion","river tiles"],
      text:"The River replaces the single starting tile with a set of river tiles that get laid out first, one per player turn, before normal city/road/field tiles are used. It simply varies the starting layout and doesn't add new scoring rules of its own." },
    { id:"carc-clar-large-meeple-majority", title:"The Large Meeple Counts as 2 for Majority Ties Too", phase:"Clarification", relatedTo:"carc-inns-cathedrals", keywords:["large meeple majority","big meeple tie"],
      text:"When comparing followers to determine who has the majority on a feature, a large follower counts as 2 ordinary followers for that comparison, not just for the final point total — so a single large meeple can outright win a majority against two ordinary meeples from another player." },
  ]
};
