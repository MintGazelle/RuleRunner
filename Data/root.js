// RuleRunner game data — root
// Lives at data/root.js in the repo, loaded by index.html.
// Independently-written rule summaries — not copied from any rulebook.
// This file only needs GAMES to already exist as an object (declared in
// index.html before this file is loaded). It adds exactly one key to it.
//
// To add or edit a rule: find the entry by its `id` and edit its `text`/
// `keywords`/`phase` fields, or copy an existing entry as a template for a
// new one. See RULES-PROCESS.md for the full process.

GAMES["root"] = {
    name: "Root",
    example: "how does the eyrie decree work?",
    infoUrl: "https://boardgamegeek.com/boardgame/237182/root",
    howToPlay: [
      { heading:"Objective", text:"Each faction pursues victory through a completely different engine — building, military conquest, political sympathy, or personal quests — and the first to reach the target score (usually 30) triggers the end of the game." },
      { heading:"Setup", text:"Each player picks an asymmetric faction and sets up that faction's unique starting pieces on the board. No two factions play remotely alike, so setup and early priorities differ a lot player to player." },
      { heading:"Turn Structure", text:"Each faction's turn has three steps: Birdsong (a faction-specific setup step), Daylight (the main step — moving, battling, building, crafting), and Evening (draw cards, then discard down to your hand limit)." },
      { heading:"Winning", text:"The moment any faction reaches the victory threshold, the game ends at the end of that round and the highest score wins. The Vagabond and Dominance cards offer alternate ways to win outside the normal points race." },
      { heading:"Quick Tip", text:"Learn your own faction thoroughly before worrying about the others — because the factions are so different, a strong Root player is usually someone who deeply understands the one or two factions they play most." },
    ],
    rules: [
      { id:"root-turn-structure", title:"Turn Structure", phase:"General", keywords:["turn structure","birdsong","daylight","evening"],
        text:"Each faction's turn has three steps: Birdsong (a faction-specific setup step), Daylight (the main step, where most actions like moving, battling, building, and crafting happen), and Evening (draw cards, then discard down to exactly 5 if you have more than that)." },
      { id:"root-clar-no-consent", title:"No Action in Root Requires Consent", phase:"Clarification", keywords:["do i need consent","can i refuse an action"],
        text:"No action in Root ever requires another player's agreement. You can't refuse to be Aided, refuse a Battle, or refuse anything else another faction does to or around you — if the rules let them do it, it just happens." },
      { id:"root-daylight-actions", title:"Daylight — What Actions Are Available", phase:"General", keywords:["daylight actions","what can i do in daylight"],
        text:"During Daylight, most factions can take any combination of: Move (shift warriors between adjacent connected clearings), Battle (attack another faction sharing your clearing), Recruit or Build (faction-specific, usually needs a matching card), Overwork (spend a card to gain a resource), and Craft (use a card matching a crafting slot). Exactly which of these a faction can do, and what they cost, depends on that faction's own sheet." },
      { id:"root-dominance", title:"Dominance Cards", phase:"General", linkTerm:"Dominance", keywords:["dominance card"],
        text:"A Dominance card can be played instead of drawing bonus cards from the deck once you can't match any of its suits requirement. Playing it sets up an alternate win condition tied to that suit, achieved by meeting its printed criteria on a later turn." },
      { id:"root-crafting", title:"Crafting", phase:"General", linkTerm:"Crafting", keywords:["crafting","craft a card"],
        text:"Crafting uses a card whose suit matches an available crafting slot in one of your clearings. The crafted card is set aside face-up for its effect (often points or a persistent bonus), and is no longer available to play as a normal card." },
      { id:"root-battle", title:"Battle", phase:"General", linkTerm:"Battle", keywords:["battle","combat root"],
        text:"The attacker chooses a defender sharing their clearing and rolls two dice, assigning the higher result as their hits and the lower as the defender's hits, modified by ambush cards or faction abilities. Each hit removes one enemy piece, and a defender with no warriors left takes one automatic hit to a building or token instead." },
      { id:"root-marquise", title:"Marquise de Cat", phase:"Faction", linkTerm:"Marquise", keywords:["marquise de cat","cat faction"],
        text:"The Marquise builds Sawmills, Workshops, and Recruiters to generate wood, crafting power, and warriors respectively, and scores points primarily from building count and crafted cards." },
      { id:"root-eyrie", title:"Eyrie Dynasties", phase:"Faction", linkTerm:"Eyrie Dynasties", keywords:["eyrie dynasties","eyrie decree"],
        text:"The Eyrie must add at least one card to their Decree each turn, sorted into Recruit, Move, Battle, and Build columns, then carry out the entire Decree in order on their next turn. Failing to complete any part of it triggers Turmoil: the current leader is deposed, the Decree is discarded, and a new leader with a new ability is chosen." },
      { id:"root-woodland-alliance", title:"Woodland Alliance", phase:"Faction", linkTerm:"Woodland Alliance", keywords:["woodland alliance"],
        text:"The Woodland Alliance gains Supporters whenever other factions take military actions in or near sympathetic clearings. Supporters can be spent to spread Sympathy to new clearings or to trigger a Revolt, converting a sympathetic clearing under enough military pressure into their own base." },
      { id:"root-vagabond", title:"Vagabond", phase:"Faction", linkTerm:"Vagabond", keywords:["vagabond"],
        text:"The Vagabond acts alone, moving between clearings to explore ruins, complete quests, and optionally aid or battle other factions. They score points mainly through completed quests and successful battles, and refresh exhausted items by resting at their camp." },
      { id:"root-vagabond-coalition", title:"Vagabond Coalitions", phase:"Faction", keywords:["vagabond coalition","vagabond four player win"],
        text:"In games with four or more players, the Vagabond can't win through a Dominance card the normal way. Instead, activating a Dominance card lets them form a Coalition with whichever other player currently has the fewest victory points (their choice if tied) — the Vagabond stops scoring points themselves, and if that player wins the game, the Vagabond wins alongside them." },
      { id:"root-clearings-suits", title:"Clearings & Suits", phase:"General", keywords:["clearing suit","rule a clearing"],
        text:"Each clearing has a suit (Fox, Rabbit, or Mouse) that matches card suits for crafting and card-use bonuses. Whichever faction has the most warriors in a clearing rules it; a tie means no one does, which matters for several factions' abilities." },
      { id:"root-scoring", title:"Scoring & Game End", phase:"Scoring", keywords:["scoring track","game end root","scoring","how do i win"],
        text:"Most factions score points through their own distinct engine, tracked on a shared scoreboard. In the base game, the moment any faction reaches 30 points, the game ends at the end of that round and the highest score wins." },
      { id:"root-clar-battle-empty", title:"Can't Battle an Empty Clearing", phase:"Clarification", relatedTo:"root-battle", keywords:["battle empty clearing","no pieces to battle"],
        text:"You can't declare a Battle against a faction with no pieces in that clearing — Battle requires an opposing piece present to target. Taking an uncontested clearing is handled through other actions like Recruit, Move, or Build, not Battle." },
      { id:"root-clar-ambush-order", title:"How Ambush Cards Resolve", phase:"Clarification", relatedTo:"root-battle", keywords:["ambush card timing","ambush order"],
        text:"A defender's Ambush card adds 2 hits before dice are rolled, provided its suit matches (or is a bird, which matches anything). If the attacker also played an Ambush, a matching-suit Ambush from the non-active player can be used to cancel it before hits are applied." },
      { id:"root-clar-hits-order", title:"Hits Go to Warriors Before Buildings", phase:"Clarification", relatedTo:"root-battle", keywords:["hit buildings","hit order warriors"],
        text:"In a Battle, hits must remove all of the defending faction's warriors in that clearing before any hits can be applied to their buildings or tokens there, unless a specific card or faction ability says otherwise." },
      { id:"root-clar-exhausted-vs-damaged", title:"Exhausted vs. Damaged Items", phase:"Clarification", relatedTo:"root-vagabond", keywords:["exhausted item","damaged item"],
        text:"An exhausted Vagabond item is only temporarily unusable and can be refreshed later (such as by resting at camp). A damaged item is removed from play entirely and needs to be repaired before it can be used again — the two are not the same state." },
      { id:"root-clar-no-formal-alliance", title:"There's No Formal Alliance Mechanic", phase:"Clarification", keywords:["team up root","alliance mechanic"],
        text:"The base game has no built-in mechanic for two factions to formally ally against a leader — any \"ganging up\" is just an informal agreement between players, separate from specific faction abilities like the Vagabond's individual quests or favors." },
      { id:"root-clar-turn-order-fixed", title:"Turn Order Doesn't Rotate", phase:"Clarification", relatedTo:"root-turn-structure", keywords:["turn order rotate","does turn order change"],
        text:"Turn order is set once at the start of the game and stays fixed for its entire duration — unlike many other games, there's no rotating start player each round." },
      { id:"root-clar-recruit-all", title:"Recruit Triggers Every Recruiter At Once", phase:"Clarification", relatedTo:"root-marquise", keywords:["recruit action marquise","how many warriors recruit"],
        text:"When the Marquise de Cat takes the Recruit action, every clearing containing a Recruiter gains a new warrior simultaneously — it's not a choice of just one Recruiter per action." },
      { id:"root-clar-eyrie-no-roosts", title:"An Eyrie With No Roosts Is Removed From the Game", phase:"Clarification", relatedTo:"root-eyrie", keywords:["eyrie no roosts","all roosts removed"],
        text:"If the Eyrie Dynasties ever has zero Roosts left on the board, they are removed from the game entirely rather than continuing to play with no buildings." },
      { id:"root-clar-bird-wild", title:"Bird Cards Are Wild for Crafting", phase:"Clarification", relatedTo:"root-crafting", keywords:["bird suit wild","bird card crafting"],
        text:"A card with the Bird suit can be used to satisfy a crafting requirement in a clearing of any suit — Bird acts as wild for crafting purposes, unlike Fox, Rabbit, and Mouse which must match the clearing." },
      { id:"root-clar-sympathy-supply-empty", title:"Empty Sympathy Supply Can End the Game Instantly", phase:"Clarification", relatedTo:"root-woodland-alliance", keywords:["sympathy tokens run out","out of sympathy tokens"],
        text:"If the Woodland Alliance is ever required to place a Sympathy token but none remain in their supply, every other player immediately wins the game together — a rule that's easy to forget until it suddenly matters." },
      { id:"root-clar-sawmill-automatic", title:"Sawmills Produce Wood Automatically", phase:"Clarification", relatedTo:"root-marquise", keywords:["sawmill","sawmill wood income","automatic wood"],
        text:"The Marquise de Cat gains one wood for every Sawmill in play automatically during Birdsong — it doesn't cost an action and isn't optional." },
    ]
};
