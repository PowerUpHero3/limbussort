dataSetVersion = "2021-05-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by World",
    key: "world",
    tooltip: "Check this to restrict to certain identity groups.",
    checked: false,
    sub: [
      { name: "Base Sinners", key: "base" },
      { name: "LCCB", key: "lccb" },
	  { name: "LCE", key: "lce" },
	  { name: "Blade Lineage", key: "bl" },
	  { name: "Kurokumo Clan", key: "kk" },
      { name: "Zwei Association", key: "zwei" },
      { name: "Shi Association", key: "shi" },
      { name: "Cinq Association", key: "cinq" },
	  { name: "Liu Association", key: "liu" },
	  { name: "Seven Association", key: "seven" },
      { name: "Oufi Association", key: "oufi" },
      { name: "Dieci Association", key: "dieci" },
      { name: "Devyat Association", key: "devyat" },    
      { name: "The Middle", key: "middle" },
      { name: "The Ring", key: "ring" },
      { name: "Heishou Pack", key: "heishou" },
      { name: "La Manchaland", key: "lamancha" },
      { name: "Fanghunt and Firefist Offices", key: "fixers" },
      { name: "Multicrack Office", key: "mc" },
      { name: "Molar Office & Boatworks", key: "molar" },
      { name: "District 10 Backstreets", key: "dis10" },
	  { name: "District 20 Backstreets", key: "dis20" },
      { name: "District 23 Backstreets", key: "dis23" },
      { name: "Wuthering Heights", key: "wh" },
      { name: "G Corp.", key: "gcorp" },
	  { name: "K Corp.", key: "kcorp" },
	  { name: "L Corp.", key: "lcorp" },
	  { name: "N Corp.", key: "ncorp" },
	  { name: "R Corp.", key: "rcorp" },
	  { name: "T Corp.", key: "tcorp" },
	  { name: "U Corp.", key: "ucorp" },
      { name: "W Corp.", key: "wcorp" },
      { name: "Former Library Guests", key: "guests" },
    ]
  },
  {
    name: "Filter by Rarity",
    key: "rarity",
    tooltip: "Check this to restrict to identities based on their rarity.",
    checked: false,
    sub: [ { name: "0", key: "1star" }, { name: "00", key: "2star" }, { name: "000", key: "3star" }
    ]
  },
  {
    name: "Filter by Season",
    key: "season",
    tooltip: "Check this to restrict to identites from a specific season.",
    checked: false,
    sub: [ { name: "Season 0: Standard Fare", key: "s0" }, { name: "Season 1: Orientation", key: "s1" }, { name: "Season 2: Reminiscence", key: "s2" }, { name: "Season 3: Bon Voyage", key: "s3" }, { name: "Season 4: Clear All Cathy", key: "s4"}, { name: "Season 5: Oblivion", key: "s5" }
    ]
  },
  {
    name: "Filter by Sinner",
	key: "sinner",
    tooltip: "Check this to restrict to specific sinners.",
	checked: false,
    sub: [
      { name: "Yi Sang", tooltip: "Sinner 01 - Dreamy", key: "yisang" },
      { name: "Faust", tooltip: "Sinner 02 - Cerebral", key: "faust" },
      { name: "Don Quixote", tooltip: "Sinner 03 - Oblivion", key: "dq" },
      { name: "Ryoshu", tooltip: "Sinner 04 - Smokey", key: "ryo" },
      { name: "Meursault", tooltip: "Sinner 05 - Decay", key: "mrsalt" },
      { name: "Hong Lu", tooltip: "Sinner 06 - Naive", key: "honglu" },
      { name: "Heathcliff", tooltip: "Sinner 07 - Furious", key: "heath" },
      { name: "Ishmael", tooltip: "Sinner 08 - Isolate", key: "ish" },
      { name: "Rodion", tooltip: "Sinner 09 - Lusty", key: "rodya" },
      { name: "Sinclair", tooltip: "Sinner 11 - Immature", key: "sinc" },
      { name: "Outis", tooltip: "Sinner 12 - Militant", key: "outis" },
      { name: "Gregor", tooltip: "Sinner 13 - Verminous", key: "greg" },
	 ]
  },
  {
    name: "Filter by Status Effect",
	key: "effect",
    tooltip: "Filters by ID's with any instance of the given status effect within their kits. Ring ID's are considered to be bleed only.",
	checked: false,
    sub: [
      { name: "Burn", key: "burn" },
      { name: "Bleed", key: "bleed" },
      { name: "Tremor", key: "tremor" },
      { name: "Rupture", key: "rupture" },
      { name: "Sinking", key: "sinking" },
      { name: "Poise", key: "poise" },
      { name: "Charge", key: "charge" },
      { name: "None", key: "none" },
	 ]
  },
  {
    name: "Vergillius",
    key: "verg",
    tooltip: "For those who want to compare their sinners to allied Vergillius.",
	checked: false
  },
  {
    name: "Xichun",
    key: "xichun",
    tooltip: "For those who want to compare their sinners to allied Xichun.",
	checked: false
  },
  {
    name: "Gregor's Cockroach",
    key: "pablo",
    tooltip: "For the REAL power scaling arguments.",
	checked: false
  }
];

dataSet[dataSetVersion].characterData = [ 
 //Yi Sang
  {
  name: "LCB Sinner Yi Sang",
  img: "hEitl0m.png",
  opts: {
    world: ["base"],
	rarity: ["1star"],
	season: ["s0"],
	sinner: ["yisang"],
	effect: ["sinking"],
   }
  },
  {
  name: "Seven Association South Section 6 Yi Sang",
  img: "d6nwd00.png",
  opts: {
    world: ["seven"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["yisang"],
	effect: ["rupture"],
   }
  },
  {
  name: "Molar Office Fixer Yi Sang",
  img: "RjXhqSw.png",
  opts: {
    world: ["molar"],
	rarity: ["2star"],
	season: ["s2"],
	sinner: ["yisang"],
	effect: ["tremor"],
   }
  },
  {
  name: "The Pequod First Mate Yi Sang",
  img: "i2drTu9.png",
  opts: {
    world: ["ucorp"],
	rarity: ["2star"],
	season: ["s3"],
	sinner: ["yisang"],
	effect: ["bleed", "poise"],
   }
  },
  {
  name: "Dieci Association South Section 4 Yi Sang",
  img: "fWKwFHq.png",
  opts: {
    world: ["dieci"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["yisang"],
	effect: ["sinking"],
   }
  },
  {
  name: "LCE E.G.O::Lantern Yi Sang",
  img: "vQdvapS.png",
  opts: {
    world: ["lce"],
	rarity: ["2star"],
	season: ["s5"],
	sinner: ["yisang"],
	effect: ["rupture"],
   }
  },
  {
  name: "Blade Lineage Salsu Yi Sang",
  img: "0IzrLZ4.png",
  opts: {
    world: ["bl"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["yisang"],
	effect: ["poise"],
   }
  },
  {
  name: "Effloresced E.G.O::Spicebush Yi Sang",
  img: "Tc6OXLE.png",
  opts: {
    world: ["kcorp"],
	rarity: ["3star"],
	season: ["s2"],
	sinner: ["yisang"],
	effect: ["sinking", "tremor"],
   }
  },
  {
  name: "W Corp. L3 Cleanup Agent Yi Sang",
  img: "X0bC7jh.png",
  opts: {
    world: ["wcorp"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["yisang"],
	effect: ["rupture", "charge"],
   }
  },
  {
  name: "The Ring Pointillist Student Yi Sang",
  img: "YHN1kVD.png",
  opts: {
    world: ["ring"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["yisang"],
	effect: ["bleed"],
   }
  },
  {
  name: "Lobotomy E.G.O::Solemn Lament Yi Sang",
  img: "RxTpbyN.png",
  opts: {
    world: ["lcorp"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["yisang"],
	effect: ["sinking"],
   }
  },
  {
  name: "Liu Association South Section 3 Yi Sang",
  img: "LT5Mozs.png",
  opts: {
    world: ["liu"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["yisang"],
	effect: ["burn"],
   }
  },
  
 //Faust
  {
  name: "LCB Sinner Faust",
  img: "y62PpsY.png",
  opts: {
    world: ["base"],
	rarity: ["1star"],
	season: ["s0"],
	sinner: ["faust"],
	effect: ["none"],
   }
  },
  {
  name: "W Corp. L2 Cleanup Agent Faust",
  img: "Fg908eH.png",
  opts: {
    world: ["wcorp"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["faust"],
	effect: ["charge"],
   }
  },
  {
  name: "Lobotomy Corp. Remnant Faust",
  img: "bIKCcS0.png",
  opts: {
    world: ["lcorp"],
	rarity: ["2star"],
	season: ["s1"],
	sinner: ["faust"],
	effect: ["rupture", "poise"],
   }
  },
  {
  name: "Zwei Assoc. South Section 4 Faust",
  img: "qXmMTyt.png",
  opts: {
    world: ["zwei"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["faust"],
	effect: ["none"],
   }
  },
  {
  name: "Wuthering Heights Butler Faust",
  img: "T9G4WYv.png",
  opts: {
    world: ["wh"],
	rarity: ["2star"],
	season: ["s4"],
	sinner: ["faust"],
	effect: ["sinking"],
   }
  },
  {
  name: "The One Who Grips Faust",
  img: "VLcxt86.png",
  opts: {
    world: ["ncorp"],
	rarity: ["3star"],
	season: ["s1"],
	sinner: ["faust"],
	effect: ["bleed"],
   }
  },
  {
  name: "Seven Assoc. South Section 4 Faust",
  img: "XG8LLnO.png",
  opts: {
    world: ["seven"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["faust"],
	effect: ["rupture", "poise"],
   }
  },
  {
  name: "Lobotomy E.G.O::Regret Faust",
  img: "V5Zvrcl.png",
  opts: {
    world: ["lcorp"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["faust"],
	effect: ["tremor"],
   }
  },
  {
  name: "Blade Lineage Salsu Faust",
  img: "k8xLtv2.png",
  opts: {
    world: ["bl"],
	rarity: ["3star"],
	season: ["s3"],
	sinner: ["faust"],
	effect: ["bleed", "poise"],
   }
  },
  {
  name: "MultiCrack Office Rep Faust",
  img: "E7l4s54.png",
  opts: {
    world: ["mc"],
	rarity: ["3star"],
	season: ["s4"],
	sinner: ["faust"],
	effect: ["charge"],
   }
  },
  {
  name: "LCE E.G.O::Ardor Blossom Star Faust",
  img: "4FMiM9H.png",
  opts: {
    world: ["lce"],
	rarity: ["3star"],
	season: ["s5"],
	sinner: ["faust"],
	effect: ["burn"],
   }
  },

  
 //Don Quixote
 {
  name: "LCB Sinner Don Quixote",
  img: "vj7oRfc.png",
  opts: {
    world: ["base"],
	rarity: ["1star"],
	season: ["s0"],
	sinner: ["dq"],
	effect: ["bleed"],
   }
  },
  {
  name: "Shi Assoc. South Section 5 Director Don Quixote",
  img: "bc0xM7z.png",
  opts: {
    world: ["shi"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["dq"],
	effect: ["poise"],
   }
  },
  {
  name: "N Corp. Mittelhammer Don Quixote",
  img: "CNMdSo8.png",
  opts: {
    world: ["ncorp"],
	rarity: ["2star"],
	season: ["s1"],
	sinner: ["dq"],
	effect: ["bleed", "tremor"],
   }
  },
  {
  name: "Lobotomy E.G.O::Lantern Don Quixote",
  img: "cNwf407.png",
  opts: {
    world: ["lcorp"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["dq"],
	effect: ["rupture"],
   }
  },
  {
  name: "Blade Lineage Salsu Don Quixote",
  img: "TKRin70.png",
  opts: {
    world: ["bl"],
	rarity: ["2star"],
	season: ["s3"],
	sinner: ["dq"],
	effect: ["poise"],
   }
  },
  {
  name: "W Corp. L3 Cleanup Agent Don Quixote",
  img: "GN8Sxh5.png",
  opts: {
    world: ["wcorp"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["dq"],
	effect: ["charge", "rupture"],
   }
  },
  {
  name: "Cinq Assoc. South Section 5 Director Don Quixote",
  img: "0zK8Ooq.png",
  opts: {
    world: ["cinq"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["dq"],
	effect: ["none"],
   }
  },
  {
  name: "The Middle Little Sister Don Quixote",
  img: "UY3cpqL.png",
  opts: {
    world: ["middle"],
	rarity: ["3star"],
	season: ["s3"],
	sinner: ["dq"],
	effect: ["bleed"],
   }
  },
  {
  name: "T Corp. Class 3 Collection Staff Don Quixote",
  img: "319xA58.png",
  opts: {
    world: ["tcorp"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["dq"],
	effect: ["tremor"],
   }
  },
  {
  name: "The Manager of La Manchaland Don Quixote",
  img: "TuMJJ1l.png",
  opts: {
    world: ["lamancha"],
	rarity: ["3star"],
	season: ["s5"],
	sinner: ["dq"],
	effect: ["bleed"],
   }
  },
  {
  name: "Cinq Assoc. East Section 3 Don Quixote",
  img: "LcJ6dKR.png",
  opts: {
    world: ["cinq"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["dq"],
	effect: ["burn", "poise"],
   }
  },
  
 //Ryoshu
 {
  name: "LCB Sinner Ryoshu",
  img: "YUzZRYo.png",
  opts: {
    world: ["base"],
	rarity: ["1star"],
	season: ["s0"],
	sinner: ["ryo"],
	effect: ["poise"],
   }
  },
  {
  name: "Seven Assoc. South Section 6 Ryoshu",
  img: "oEdL8qG.png",
  opts: {
    world: ["seven"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["ryo"],
	effect: ["rupture"],
   }
  },
  {
  name: "LCCB Assistant Manager Ryoshu",
  img: "6kOGVmX.png",
  opts: {
    world: ["lccb"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["ryo"],
	effect: ["tremor", "rupture", "poise"],
   }
  },
  {
  name: "Liu Assoc. South Section 4 Ryoshu",
  img: "sCGAlkM.png",
  opts: {
    world: ["liu"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["ryo"],
	effect: ["burn"],
   }
  },
  {
  name: "District 20 Yurodivy Ryoshu",
  img: "Os6TmTD.png",
  opts: {
    world: ["dis20"],
	rarity: ["2star"],
	season: ["s4"],
	sinner: ["ryo"],
	effect: ["tremor"],
   }
  },
  {
  name: "Kurokumo Clan Wakashu Ryoshu",
  img: "ZWP1MNd.png",
  opts: {
    world: ["kk"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["ryo"],
	effect: ["bleed"],
   }
  },
  {
  name: "R.B. Chef de Cuisine Ryoshu",
  img: "mxfnnY4.png",
  opts: {
    world: ["dis23"],
	rarity: ["3star"],
	season: ["s1"],
	sinner: ["ryo"],
	effect: ["bleed"],
   }
  },
  {
  name: "W Corp. L3 Cleanup Agent Ryoshu",
  img: "XYnhzp0.png",
  opts: {
    world: ["wcorp"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["ryo"],
	effect: ["charge"],
   }
  },
  {
  name: "Edgar Family Chief Butler Ryoshu",
  img: "pPUwgVd.png",
  opts: {
    world: ["wh"],
	rarity: ["3star"],
	season: ["s4"],
	sinner: ["ryo"],
	effect: ["poise"],
   }
  },
  {
  name: "Lobotomy E.G.O::Red Eyes & Pentience Ryoshu",
  img: "REPsqCP.png",
  opts: {
    world: ["lcorp"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["ryo"],
	effect: ["bleed", "charge"],
   }
  },
  {
  name: "Heishou Pack - Mao Branch Ryoshu",
  img: "AshUV2H.png",
  opts: {
    world: ["heishou"],
	rarity: ["3star"],
	season: ["s5"],
	sinner: ["ryo"],
	effect: ["rupture"],
   }
  },
  
 //Meursault
 {
  name: "LCB Sinner Meursault",
  img: "JknBS0I.png",
  opts: {
    world: ["base"],
	rarity: ["1star"],
	season: ["s0"],
	sinner: ["mrsalt"],
	effect: ["tremor"],
   }
  },
  {
  name: "Liu Assoc. South Section 6 Meursault",
  img: "VoX9tKI.png",
  opts: {
    world: ["liu"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["mrsalt"],
	effect: ["bleed"],
   }
  },
  {
  name: "Rosespanner Workshop Fixer Meursault",
  img: "BRg5gGh.png",
  opts: {
    world: ["kcorp"],
	rarity: ["2star"],
	season: ["s2"],
	sinner: ["mrsalt"],
	effect: ["tremor", "charge"],
   }
  },
  {
  name: "The Middle Little Brother Meursault",
  img: "Qsz5oOU.png",
  opts: {
    world: ["middle"],
	rarity: ["2star"],
	season: ["s3"],
	sinner: ["mrsalt"],
	effect: ["bleed"],
   }
  },
  {
  name: "Dead Rabbits Boss Meursault",
  img: "4xWlVOc.png",
  opts: {
    world: ["wh"],
	rarity: ["2star"],
	season: ["s4"],
	sinner: ["mrsalt"],
	effect: ["rupture"],
   }
  },
  {
  name: "W Corp. L2 Cleanup Agent Meursault",
  img: "h0lcdMH.png",
  opts: {
    world: ["wcorp"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["mrsalt"],
	effect: ["rupture", "chrage"],
   }
  },
  {
  name: "N Corp. Grobhammer Meursault",
  img: "bOTKBls.png",
  opts: {
    world: ["ncorp"],
	rarity: ["3star"],
	season: ["s1"],
	sinner: ["mrsalt"],
	effect: ["bleed"],
   }
  },
  {
  name: "R Corp. 4th Pack Rhino Meursault",
  img: "nIKqbSE.png",
  opts: {
    world: ["rcorp"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["mrsalt"],
	effect: ["bleed", "charge"],
   }
  },
  {
  name: "Blade Lineage Mentor Meursault",
  img: "KH86V6M.png",
  opts: {
    world: ["bl"],
	rarity: ["3star"],
	season: ["s3"],
	sinner: ["mrsalt"],
	effect: ["bleed", "poise"],
   }
  },
  {
  name: "Dieci Assoc. South Section 4 Director Meursault",
  img: "M1sSgXr.png",
  opts: {
    world: ["dieci"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["mrsalt"],
	effect: ["sinking"],
   }
  },
  {
  name: "Cinq Assoc. West Section 3 Meursault",
  img: "SIJmZ76.png",
  opts: {
    world: ["cinq"],
	rarity: ["3star"],
	season: ["s5"],
	sinner: ["mrsalt"],
	effect: ["rupture", "poise"],
   }
  },
  
 //Hong Lu
 {
  name: "LCB Sinner Hong Lu",
  img: "Sh25yFR.png",
  opts: {
    world: ["base"],
	rarity: ["1star"],
	season: ["s0"],
	sinner: ["honglu"],
	effect: ["rupture", "sinking"],
   }
  },
  {
  name: "Kurokumo Clan Wakashu Hong Lu",
  img: "JvdeVkE.png",
  opts: {
    world: ["kk"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["honglu"],
	effect: ["bleed"],
   }
  },
  {
  name: "Liu Assoc. South Section 5 Hong Lu",
  img: "iJ0eCfX.png",
  opts: {
    world: ["liu"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["honglu"],
	effect: ["burn"],
   }
  },
  {
  name: "W Corp. L2 Cleanup Agent Hong Lu",
  img: "brEAcAn.png",
  opts: {
    world: ["wcorp"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["honglu"],
	effect: ["rupture", "charge"],
   }
  },
  {
  name: "Hook Office Fixer Hong Lu",
  img: "W8oJO2O.png",
  opts: {
    world: ["guests"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["honglu"],
	effect: ["bleed"],
   }
  },
  {
  name: "Fanghunt Office Fixer Hong Lu",
  img: "JBTc5tn.png",
  opts: {
    world: ["fixers"],
	rarity: ["2star"],
	season: ["s5"],
	sinner: ["honglu"],
	effect: ["rupture"],
   }
  },
  {
  name: "Tingtang Gang Gangleader Hong Lu",
  img: "8X4eagD.png",
  opts: {
    world: ["dis10"],
	rarity: ["3star"],
	season: ["s1"],
	sinner: ["honglu"],
	effect: ["bleed"],
   }
  },
  {
  name: "K Corp. Class 3 Excision Staff Hong Lu",
  img: "n2cJlq1.png",
  opts: {
    world: ["kcorp"],
	rarity: ["3star"],
	season: ["s2"],
	sinner: ["honglu"],
	effect: ["rupture"],
   }
  },
  {
  name: "Dieci Assoc. South Section 4 Hong Lu",
  img: "Bdzl6Ts.png",
  opts: {
    world: ["dieci"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["honglu"],
	effect: ["sinking"],
   }
  },
  {
  name: "District 20 Yurodivy Hong Lu",
  img: "ewDmBDL.png",
  opts: {
    world: ["dis20"],
	rarity: ["3star"],
	season: ["s4"],
	sinner: ["honglu"],
	effect: ["tremor"],
   }
  },
  {
  name: "Full-Stop Office Rep Hong Lu",
  img: "Nvzassp.png",
  opts: {
    world: ["guests"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["honglu"],
	effect: ["poise"],
   }
  },
  
 //Heathcliff
 {
  name: "LCB Sinner Heathcliff",
  img: "gMGNw61.png",
  opts: {
    world: ["base"],
	rarity: ["1star"],
	season: ["s0"],
	sinner: ["heath"],
	effect: ["tremor"],
   }
  },
  {
  name: "Shi Assoc. South Section 5 Heathcliff",
  img: "t3AVlNi.png",
  opts: {
    world: ["shi"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["heath"],
	effect: ["poise"],
   }
  },
  {
  name: "N Corp. Kleinhammer Heathcliff",
  img: "Wh5usev.png",
  opts: {
    world: ["ncorp"],
	rarity: ["2star"],
	season: ["s1"],
	sinner: ["heath"],
	effect: ["bleed"],
   }
  },
  {
  name: "Seven Assoc. South Section 4 Heathcliff",
  img: "WEmuBDw.png",
  opts: {
    world: ["seven"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["heath"],
	effect: ["rupture"],
   }
  },
  {
  name: "MultiCrack Office Fixer Heathcliff",
  img: "k5SCo6H.png",
  opts: {
    world: ["mc"],
	rarity: ["2star"],
	season: ["s4"],
	sinner: ["heath"],
	effect: ["charge"],
   }
  },
  {
  name: "R Corp. 4th Pack Rabbit Heathcliff",
  img: "gDLNkg5.png",
  opts: {
    world: ["rcorp"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["heath"],
	effect: ["bleed", "rupture", "charge"],
   }
  },
  {
  name: "Lobotomy E.G.O::Sunshower Heathcliff",
  img: "UxsHVt3.png",
  opts: {
    world: ["kcorp"],
	rarity: ["3star"],
	season: ["s2"],
	sinner: ["heath"],
	effect: ["rupture", "sinking"],
   }
  },
  {
  name: "The Pequod Harpooner Heathcliff",
  img: "NqJ287X.png",
  opts: {
    world: ["ucorp"],
	rarity: ["3star"],
	season: ["s3"],
	sinner: ["heath"],
	effect: ["bleed", "poise"],
   }
  },
  {
  name: "Oufi Assoc. South Section 3 Heathcliff",
  img: "aSo4jNz.png",
  opts: {
    world: ["oufi"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["heath"],
	effect: ["tremor"],
   }
  },
  {
  name: "Wild Hunt Heathcliff",
  img: "BKPIirM.png",
  opts: {
    world: ["wh"],
	rarity: ["3star"],
	season: ["s4"],
	sinner: ["heath"],
	effect: ["sinking"],
   }
  },
  {
  name: "Full-Stop Office Fixer Heathcliff",
  img: "ljKs176.png",
  opts: {
    world: ["guests"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["heath"],
	effect: ["poise"],
   }
  },
  {
  name: "Kurokumo Clan Wakashu Heathcliff",
  img: "1KViLPC.png",
  opts: {
    world: ["kk"],
	rarity: ["3star"],
	season: ["s5"],
	sinner: ["heath"],
	effect: ["bleed"],
   }
  },
  
 //Ishmael
 {
  name: "LCB Sinner Ishmael",
  img: "x4Fwb7j.png",
  opts: {
    world: ["base"],
	rarity: ["1star"],
	season: ["s0"],
	sinner: ["ish"],
	effect: ["tremor"],
   }
  },
  {
  name: "Shi Assoc. South Section 5 Ishmael",
  img: "iCiSmZk.png",
  opts: {
    world: ["shi"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["ish"],
	effect: ["poise"],
   }
  },
  {
  name: "LCCB Assistant Manager Ishmael",
  img: "aWEGGYI.png",
  opts: {
    world: ["lccb"],
	rarity: ["2star"],
	season: ["s1"],
	sinner: ["ish"],
	effect: ["tremor", "rupture"],
   }
  },
  {
  name: "Lobotomy E.G.O::Sloshing Ishmael",
  img: "WP1yrqA.png",
  opts: {
    world: ["kcorp"],
	rarity: ["2star"],
	season: ["s2"],
	sinner: ["ish"],
	effect: ["rupture"],
   }
  },
  {
  name: "Edgar Family Butler Ishmael",
  img: "8eaHL6H.png",
  opts: {
    world: ["wh"],
	rarity: ["2star"],
	season: ["s4"],
	sinner: ["ish"],
	effect: ["poise", "sinking"],
   }
  },
  {
  name: "R Corp. 4th Pack Reindeer Ishmael",
  img: "hdrVvcX.png",
  opts: {
    world: ["rcorp"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["ish"],
	effect: ["sinking", "charge"],
   }
  },
  {
  name: "Liu Assoc. South Section 4 Ishmael",
  img: "rAiQ9RE.png",
  opts: {
    world: ["liu"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["ish"],
	effect: ["burn"],
   }
  },
  {
  name: "Molar Boatworks Fixer Ishmael",
  img: "mgflxEc.png",
  opts: {
    world: ["molar"],
	rarity: ["3star"],
	season: ["s2"],
	sinner: ["ish"],
	effect: ["tremor", "sinking"],
   }
  },
  {
  name: "The Pequod Captain Ishmael",
  img: "ewGvmeF.png",
  opts: {
    world: ["ucorp"],
	rarity: ["3star"],
	season: ["s3"],
	sinner: ["ish"],
	effect: ["bleed", "poise"],
   }
  },
  {
  name: "Zwei Assoc. West Section 3 Ishmael",
  img: "RSFMyqL.png",
  opts: {
    world: ["zwei"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["ish"],
	effect: ["tremor"],
   }
  },
  {
  name: "Kurokumo Clan Captain Ishmael",
  img: "yGMVhxe.png",
  opts: {
    world: ["kk"],
	rarity: ["3star"],
	season: ["s5"],
	sinner: ["ish"],
	effect: ["bleed"],
   }
  },
  
 //Rodya
 {
  name: "LCB Sinner Rodion",
  img: "FBWQKmq.png",
  opts: {
    world: ["base"],
	rarity: ["1star"],
	season: ["s0"],
	sinner: ["rodya"],
	effect: ["bleed"],
   }
  },
  {
  name: "LCCB Assistant Manager Rodion",
  img: "ahKgiRS.png",
  opts: {
    world: ["lccb"],
	rarity: ["2star"],
	season: ["s1"],
	sinner: ["rodya"],
	effect: ["none"],
   }
  },
  {
  name: "N Corp. Mittelhammer Rodion",
  img: "EioCQHr.png",
  opts: {
    world: ["ncorp"],
	rarity: ["2star"],
	season: ["s1"],
	sinner: ["rodya"],
	effect: ["bleed"],
   }
  },
  {
  name: "Zwei Assoc. South Section 5 Rodion",
  img: "vLCYTCc.png",
  opts: {
    world: ["zwei"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["rodya"],
	effect: ["poise"],
   }
  },
  {
  name: "T Corp. Class 2 Collection Staff Rodion",
  img: "kM4DZEw.png",
  opts: {
    world: ["tcorp"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["rodya"],
	effect: ["tremor"],
   }
  },
  {
  name: "Kurokumo Clan Wakashu Rodion",
  img: "F4p0Azf.png",
  opts: {
    world: ["kk"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["rodya"],
	effect: ["bleed", "poise"],
   }
  },
  {
  name: "Rosespanner Workshop Rep Rodion",
  img: "V3CwhWf.png",
  opts: {
    world: ["kcorp"],
	rarity: ["3star"],
	season: ["s2"],
	sinner: ["rodya"],
	effect: ["tremor", "charge"],
   }
  },
  {
  name: "Dieci Assoc. South Section 4 Rodion",
  img: "WKsDZuS.png",
  opts: {
    world: ["dieci"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["rodya"],
	effect: ["sinking"],
   }
  },
  {
  name: "Liu Assoc. South Section 4 Director Rodion",
  img: "rqV9Q3x.png",
  opts: {
    world: ["liu"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["rodya"],
	effect: ["burn"],
   }
  },
  {
  name: "Devyat' Assoc. North Section 3 Rodion",
  img: "JzsvfKS.png",
  opts: {
    world: ["devyat"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["rodya"],
	effect: ["rupture"],
   }
  },
  {
  name: "The Princess of La Manachaland Rodion",
  img: "SgIbSRb.png",
  opts: {
    world: ["lamancha"],
	rarity: ["3star"],
	season: ["s5"],
	sinner: ["rodya"],
	effect: ["bleed"],
   }
  },
  
 //Sinclair
 {
  name: "LCB Sinner Sinclair",
  img: "aEkArRN.png",
  opts: {
    world: ["base"],
	rarity: ["1star"],
	season: ["s0"],
	sinner: ["sinc"],
	effect: ["rupture"],
   }
  },
  {
  name: "Zwei Assoc. South Section 6 Sinclair",
  img: "wDiU2UJ.png",
  opts: {
    world: ["zwei"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["sinc"],
	effect: ["tremor"],
   }
  },
  {
  name: "Los Mariachis Jefe Sinclair",
  img: "ZvGXnK3.png",
  opts: {
    world: ["dis10"],
	rarity: ["2star"],
	season: ["s1"],
	sinner: ["sinc"],
	effect: ["sinking", "poise"],
   }
  },
  {
  name: "Lobotomy E.G.O::Red Sheet Sinclair",
  img: "3a2oJij.png",
  opts: {
    world: ["kcorp"],
	rarity: ["2star"],
	season: ["s2"],
	sinner: ["sinc"],
	effect: ["rupture"],
   }
  },
  {
  name: "Molar Boatworks Fixer Sinclair",
  img: "2Sppdhl.png",
  opts: {
    world: ["molar"],
	rarity: ["2star"],
	season: ["s2"],
	sinner: ["sinc"],
	effect: ["tremor"],
   }
  },
  {
  name: "Zwei Assoc. West Section 3 Sinclair",
  img: "QEqPOPj.png",
  opts: {
    world: ["zwei"],
	rarity: ["2star"],
	season: ["s5"],
	sinner: ["sinc"],
	effect: ["tremor"],
   }
  },
  {
  name: "Blade Lineage Salsu Sinclair",
  img: "7AvPiM3.png",
  opts: {
    world: ["bl"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["sinc"],
	effect: ["bleed", "poise"],
   }
  },
  {
  name: "The One Who Shall Grip Sinclair",
  img: "p2eh1kc.png",
  opts: {
    world: ["ncorp"],
	rarity: ["3star"],
	season: ["s1"],
	sinner: ["sinc"],
	effect: ["burn", "bleed"],
   }
  },
  {
  name: "Cinq Assoc. South Section 4 Director Sinclair",
  img: "jfNXBb7.png",
  opts: {
    world: ["cinq"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["sinc"],
	effect: ["poise"],
   }
  },
  {
  name: "Dawn Office Fixer Sinclair",
  img: "bSp3jVj.png",
  opts: {
    world: ["guests"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["sinc"],
	effect: ["burn"],
   }
  },
  {
  name: "Devyat' Assoc. North Section 3 Sinclair",
  img: "yNNSuZv.png",
  opts: {
    world: ["devyat"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["sinc"],
	effect: ["rupture"],
   }
  },
  {
  name: "The Middle Little Brother Sinclair",
  img: "KH8q1yJ.png",
  opts: {
    world: ["middle"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["sinc"],
	effect: ["bleed"],
   }
  },
  
 //Outis
 {
  name: "LCB Sinner Outis",
  img: "IeJfWkb.png",
  opts: {
    world: ["base"],
	rarity: ["1star"],
	season: ["s0"],
	sinner: ["outis"],
	effect: ["rupture"],
   }
  },
  {
  name: "Blade Lineage Salsu Outis",
  img: "EMOTGJ0.png",
  opts: {
    world: ["bl"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["outis"],
	effect: ["poise"],
   }
  },
  {
  name: "G Corp. Head Manager Outis",
  img: "3ORH25M.png",
  opts: {
    world: ["gcorp"],
	rarity: ["2star"],
	season: ["s1"],
	sinner: ["outis"],
	effect: ["sinking"],
   }
  },
  {
  name: "Cinq Assoc. South Section 4 Outis",
  img: "f3helSF.png",
  opts: {
    world: ["cinq"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["outis"],
	effect: ["poise"],
   }
  },
  {
  name: "The Ring Pointillist Student Outis",
  img: "k3Z7761.png",
  opts: {
    world: ["ring"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["outis"],
	effect: ["bleed"],
   }
  },
  {
  name: "Seven Assoc. South Section 6 Director Outis",
  img: "8QnO6dp.png",
  opts: {
    world: ["seven"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["outis"],
	effect: ["rupture"],
   }
  },
  {
  name: "Molar Office Fixer Outis",
  img: "9atLva7.png",
  opts: {
    world: ["molar"],
	rarity: ["3star"],
	season: ["s2"],
	sinner: ["outis"],
	effect: ["tremor"],
   }
  },
  {
  name: "Lobotomy E.G.O::Magic Bullet Outis",
  img: "oH658EX.png",
  opts: {
    world: ["lcorp"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["outis"],
	effect: ["burn", "poise"],
   }
  },
  {
  name: "Wuthering Heights Chief Butler Outis",
  img: "4PL7ft0.png",
  opts: {
    world: ["wh"],
	rarity: ["3star"],
	season: ["s4"],
	sinner: ["outis"],
	effect: ["sinking"],
   }
  },
  {
  name: "W Corp. L3 Cleanup Captain Outis",
  img: "AQMXuBV.png",
  opts: {
    world: ["wcorp"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["outis"],
	effect: ["rupture", "charge"],
   }
  },
  {
  name: "The Barber of La Manchaland Outis",
  img: "qbfjlGb.png",
  opts: {
    world: ["lamancha"],
	rarity: ["3star"],
	season: ["s5"],
	sinner: ["outis"],
	effect: ["bleed"],
   }
  },
  {
  name: "Heishou Pack - Mao Branch Outis",
  img: "w7KoE7s.png",
  opts: {
    world: ["heishou"],
	rarity: ["3star"],
	season: ["s5"],
	sinner: ["outis"],
	effect: ["rupture"],
   }
  },
  
 //Gregor
 {
  name: "LCB Sinner Gregor",
  img: "l17bKNc.png",
  opts: {
    world: ["base"],
	rarity: ["1star"],
	season: ["s0"],
	sinner: ["greg"],
	effect: ["rupture"],
   }
  },
  {
  name: "Liu Assoc. South Section 6 Gregor",
  img: "cCEfwqf.png",
  opts: {
    world: ["liu"],
	rarity: ["2star"],
	season: ["s0"],
	sinner: ["greg"],
	effect: ["burn"],
   }
  },
  {
  name: "R.B. Sous-chef Gregor",
  img: "RjGqEtO.png",
  opts: {
    world: ["dis23"],
	rarity: ["2star"],
	season: ["s1"],
	sinner: ["greg"],
	effect: ["burn"],
   }
  },
  {
  name: "Rosespanner Workshop Fixer Gregor",
  img: "ybxqduU.png",
  opts: {
    world: ["kcorp"],
	rarity: ["2star"],
	season: ["s2"],
	sinner: ["greg"],
	effect: ["tremor", "rupture", "charge"],
   }
  },
  {
  name: "Kurokumo Clan Captain Gregor",
  img: "C4SXWB3.png",
  opts: {
    world: ["kk"],
	rarity: ["2star"],
	season: ["s3"],
	sinner: ["greg"],
	effect: ["bleed"],
   }
  },
  {
  name: "G Corp. Manager Corporal Gregor",
  img: "9OmFt4u.png",
  opts: {
    world: ["gcorp"],
	rarity: ["3star"],
	season: ["s1"],
	sinner: ["greg"],
	effect: ["rupture"],
   }
  },
  {
  name: "Zwei Assoc. South Section 4 Gregor",
  img: "Vxe8edH.png",
  opts: {
    world: ["zwei"],
	rarity: ["3star"],
	season: ["s0"],
	sinner: ["greg"],
	effect: ["none"],
   }
  },
  {
  name: "Twinhook Pirates First Mate Gregor",
  img: "YImLiFh.png",
  opts: {
    world: ["ucorp"],
	rarity: ["3star"],
	season: ["s3"],
	sinner: ["greg"],
	effect: ["bleed", "poise"],
   }
  },
  {
  name: "Edgar Family Heir Gregor",
  img: "988Cz0a.png",
  opts: {
    world: ["wh"],
	rarity: ["3star"],
	season: ["s4"],
	sinner: ["greg"],
	effect: ["sinking"],
   }
  },
  {
  name: "The Priest of La Manchaland Gregor",
  img: "2AryYEK.png",
  opts: {
    world: ["lamancha"],
	rarity: ["3star"],
	season: ["s5"],
	sinner: ["greg"],
	effect: ["bleed", "rupture"],
   }
  },
  {
  name: "Firefist Office Survivor Gregor",
  img: "5iUqmGt.png",
  opts: {
    world: ["fixers"],
	rarity: ["3star"],
	season: ["s5"],
	sinner: ["greg"],
	effect: ["burn"],
   }
  },
  
 //Miscellaneous
 {
  name: "Vergillius",
  img: "TXUG7gq.png",
  opts: {
    verg: true
   }
  },
  {
  name: "Xichun",
  img: "Sx9LdhP.png",
  opts: {
    xichun: true
   }
  },
  {
  name: "Gregor's Cockroach",
  img: "0fgx1gG.png",
  opts: {
    pablo: true
   }
  }
 
];
