// RuleRunner game data — terraforming-mars
// Lives at data/terraforming-mars.js in the repo, loaded by index.html.
// Independently-written rule summaries — not copied from any rulebook.
// This file only needs GAMES to already exist as an object (declared in
// index.html before this file is loaded). It adds exactly one key to it.
//
// To add or edit a rule: find the entry by its `id` and edit its `text`/
// `keywords`/`phase` fields, or copy an existing entry as a template for a
// new one. See RULES-PROCESS.md for the full process.

GAMES["terraforming-mars"] = {
    name: "Terraforming Mars",
    example: "when does the game end?",
    infoUrl: "https://boardgamegeek.com/boardgame/167791/terraforming-mars",
    rules: [
      { id:"tm-generation", title:"Generation Structure", phase:"General", linkTerm:"Generation", keywords:["generation","round structure"],
        text:"Each generation (except the first) opens with a Research phase where players draft or buy cards, followed by an Action phase where players take turns performing one or two actions until everyone has passed, then a Production phase." },
      { id:"tm-action-phase-steps", title:"Action Phase — What Counts as an Action", phase:"General", keywords:["action phase steps","what can i do on my turn","what counts as an action"],
        text:"On your turn in the Action phase, you can take up to two actions before passing play to the next player: play a card, use a Standard Project, claim a Milestone, fund an Award, use a card's Active ability, or convert 8 Plants into a Greenery / 8 Heat into a Temperature step. You can also simply pass for the rest of the generation." },
      { id:"tm-tr", title:"Terraforming Rating (TR)", phase:"General", linkTerm:["Terraforming Rating","TR"], keywords:["terraforming rating","tr"],
        text:"Terraforming Rating increases whenever you raise a global parameter (temperature, oxygen, or oceans). It pays out that many M€ at the start of each Production phase and also counts directly as victory points at game end." },
      { id:"tm-global-parameters", title:"Global Parameters", phase:"General", linkTerm:"Global Parameters", keywords:["global parameters","temperature","oxygen level","ocean tiles"],
        text:"The three global parameters are Temperature (rises in steps of 2°C), Oxygen (rises in steps of 1%), and Oceans (placed as tiles, up to 9). Raising any of them by a step typically raises the acting player's TR by 1, and some thresholds trigger one-time bonuses." },
      { id:"tm-standard-projects", title:"Standard Projects", phase:"General", linkTerm:"Standard Project", keywords:["standard project"],
        text:"Standard Projects are fixed-cost actions always available to every player — such as Power Plant, Asteroid, Aquifer, Greenery, or City — usable instead of playing a card when you don't have (or don't want to spend) a useful hand." },
      { id:"tm-production", title:"Production Phase", phase:"General", linkTerm:"Production Phase", keywords:["production phase"],
        text:"Each player gains resources equal to their production values for Megacredits, Steel, Titanium, Plants, Energy, and Heat. Base Megacredit income equals your TR, and any unused Energy converts automatically into Heat at the end of this phase." },
      { id:"tm-tile-adjacency", title:"Tile Placement & Adjacency", phase:"General", keywords:["adjacency bonus","tile placement","greenery tile","city tile"],
        text:"Placing a tile on a bonus hex grants the resources shown there. Greenery tiles raise Oxygen by one step and score a point per adjacent tile you own at game end; City tiles score a point for every adjacent Greenery tile at game end." },
      { id:"tm-milestones-awards", title:"Milestones & Awards", phase:"Scoring", linkTerm:["Milestones","Awards"], keywords:["milestone","award"],
        text:"Milestones are claimed during the game for a fixed fee once you meet their requirement, scoring 5 points; only 5 can ever be claimed. Awards are funded during the game at an escalating fee and scored at game end to whoever leads that category." },
      { id:"tm-card-play", title:"Playing Cards", phase:"General", keywords:["play a card","card requirement","playing cards","play cards"],
        text:"Playing a card costs Megacredits (reduced by any matching discounts you have) and must meet any listed requirement, such as a minimum global parameter or a tag you control. Automated cards resolve once, Active cards grant an ongoing ability, and Events resolve once then go to a separate discard." },
      { id:"tm-tags", title:"Tags", phase:"General", linkTerm:"Tags", keywords:["card tags","tag icon","tags"],
        text:"Tags are icons on a card — such as Space, Science, Building, Power, City, Plant, Microbe, or Animal — that interact with other cards' costs and effects, and are counted toward several Milestones and Awards." },
      { id:"tm-end-of-game", title:"End of Game", phase:"General", keywords:["end of the game","game end trigger","does the game end","when does the game end"],
        text:"The game-end trigger fires once Temperature, Oxygen, and Oceans have all reached their maximum. Finish the current generation as normal, resolve one final Production phase, then score final tile adjacency and Awards/Milestones." },
      { id:"tm-clar-greenery-after-max", title:"Placing Greenery After Oxygen Is Maxed", phase:"Clarification", relatedTo:"tm-global-parameters", keywords:["greenery after oxygen","oxygen maxed"],
        text:"You can still place a Greenery tile after Oxygen has hit its maximum. It just won't raise Oxygen or grant that step's TR bump — it still counts as a tile you own for end-game adjacency scoring." },
      { id:"tm-clar-passing", title:"What Passing Actually Locks You Out Of", phase:"Clarification", relatedTo:"tm-generation", keywords:["passing generation","after you pass"],
        text:"Once you pass for the generation, you take no further actions — no more card plays or Standard Projects — until the next generation begins. You still receive Production normally even though you've passed." },
      { id:"tm-clar-event-tags", title:"Do Event Card Tags Still Count?", phase:"Clarification", relatedTo:"tm-tags", keywords:["event tags","event card tag"],
        text:"Yes — an Event card's tags count toward other cards' tag-counting effects and toward Milestones/Awards even after the Event resolves and is set aside, unless a specific card explicitly excludes Event tags." },
      { id:"tm-clar-requirement-timing", title:"When Card Requirements Are Checked", phase:"Clarification", relatedTo:"tm-card-play", keywords:["requirement timing","when is a requirement checked"],
        text:"A card's play requirement (such as a minimum or maximum global parameter) is checked at the moment you play the card, not when its effect later resolves or at any other time." },
      { id:"tm-clar-shared-milestones", title:"Milestones and Awards Are Shared, Not Per-Player", phase:"Clarification", relatedTo:"tm-milestones-awards", keywords:["how many milestones","shared milestones"],
        text:"Milestones and Awards are a single shared pool for the whole table — only 5 Milestones total and (typically) 3 Awards can ever be claimed or funded across all players combined, not 5 and 3 per player." },
      { id:"tm-clar-city-adjacency", title:"City-to-City Adjacency Scores Nothing", phase:"Clarification", relatedTo:"tm-tile-adjacency", keywords:["city adjacent to city","city city adjacency"],
        text:"Cities don't score points for being adjacent to other Cities — only Greenery tiles score adjacency points for Cities, and Greenery tiles themselves only score from adjacency to tiles you own." },
      { id:"tm-clar-parameter-cap", title:"Excess Beyond a Maxed Parameter Is Just Lost", phase:"Clarification", relatedTo:"tm-global-parameters", keywords:["temperature already maxed","oxygen already maxed"],
        text:"If an effect would raise Temperature or Oxygen past its maximum, any excess is simply lost — you don't gain extra TR or trigger the step's bonus twice, and there's no penalty for trying." },
      { id:"tm-clar-resource-conversion", title:"Steel and Titanium Only Pay for Matching Tags", phase:"Clarification", relatedTo:"tm-card-play", keywords:["pay with steel","pay with titanium"],
        text:"Steel can only be used to help pay for cards with the Building tag, and Titanium only for cards with the Space tag. You can't use either resource to discount a card that doesn't carry the matching tag." },
      { id:"tm-clar-discounts-stack", title:"Card Discounts Stack", phase:"Clarification", relatedTo:"tm-card-play", keywords:["do discounts stack","multiple card discounts"],
        text:"If you have more than one discount that applies to a card (such as a tag-based discount and a general reduction), they all stack together and are applied before you pay the card's remaining cost." },
      { id:"tm-clar-first-player-marker", title:"The First Player Marker Rotates", phase:"Clarification", relatedTo:"tm-generation", keywords:["first player marker","turn order mars"],
        text:"The First Player marker passes to the next player each generation. Whoever holds it acts first in turn order that generation, which also matters for breaking ties on shared Standard Projects or bonuses." },
      { id:"tm-clar-corporation-locked", title:"Your Corporation Is Locked In For the Game", phase:"Clarification", keywords:["change corporation","switch corporation"],
        text:"Once you choose your Corporation card at the start of the game, it can't be changed later — its starting bonus and ongoing ability apply for the rest of that game." },
    ]
};
