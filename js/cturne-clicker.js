// HTML objects
let app = document.getElementById('app'),
    macca = document.getElementById('macca'),
    danteButton = document.getElementById('danteButton'),
    demonArea = document.getElementById('demonArea'),
    upgradeArea = document.getElementById('upgradeArea');

// The main clock of the game. We will set this later
let mainClock;

// Global variables and constants
let score = 0,
    clickVal = 1,
    unitGrowth = 1.2,
    lifetime = 0;

// Master Switch Board
let learnedDia = false,
    learnedEstoma = false,
    learnedMabufu = false,
    learnedMaziodyne = false,
    learnedEandI = false;

// Making our button give us Macca based on the mult
danteButton.addEventListener('click', function() {
  score += clickVal;
  lifetime += clickVal;
  updateMacca();
});

// This will be called every time our Macca changes
function updateMacca() {
  macca.innerText = score.toFixed(2);
}

// Demon class
let Demon = function(name, price, mps) {
  this.name = '<h4>';
  this.name += name;
  this.name += ' <input type="button" value="Buy" onclick="buy(';
  this.name += name.toLowerCase();
  this.name += ')">';
  this.name += '</h4>';
  this.price = price;
  this.mps = mps/60;
  this.owned = 0;
  this.stats = 'Price: ' + this.price.toFixed(2) + ' Macca // Owned: ' + this.owned + ' // MpS: ' + (this.mps * 60 * this.owned).toFixed(2);
}

function getDemonStats(demon) {
  return 'Price: ' + demon.price.toFixed(2) + ' Macca // Owned: ' + demon.owned + ' // MpS: ' + (demon.mps * 60 * demon.owned).toFixed(2);
}

// making new Demons
let pixie = new Demon('Pixie', 15, 1);
let jackfrost = new Demon('JackFrost', 50, 4);
let mer = new Demon('Mermaid', 500, 7)
let kingfrost = new Demon('King Frost', 1000, 15);
let suku = new Demon('Sukuna-Hikona', 3500, 40)
let okuninushi = new Demon('Okuninushi', 5000, 50);
let roc = new Demon('Roc', 8000, 90);
let maitreya = new Demon('Maitreya', 20000, 108);
let samyaza = new Demon('Samyaza', 75000, 200);
let dante = new Demon('Dante', 100000, 260);
let merkabah = new Demon('Merkabah', 300000, 500);
let lucifer = new Demon('Lucifer', 400000, 616);
let odin = new Demon('Odin', 750000, 1028);
let inanna = new Demon('Inanna', 100000, 1500);
let krishna = new Demon('Krishna', 1500000, 2000)
let dagda = new Demon('Dagda', 3000000, 4096);
let meta = new Demon('Metatron', 5000000, 7000);
let satan = new demon('Satan', 10000000, 10000);
let yhvh = new demon('YHVH', 50000000, 2000000);
let party = [pixie, jackfrost, mer, kingfrost, suku, okuninushi, roc, maitreya, samyaza, dante, merkabah, lucifer, inanna, krishna, dagda, meta, satan, yhvh];

// Drawing the demons on screen
for(i=0; i!=party.length; i++) {
  demonArea.innerHTML += party[i].name;
  demonArea.innerHTML += party[i].stats;
}

// function for buying demons
function buy(demon) {
  if(score >= demon.price) {
    demon.owned++;
    score -= demon.price;
    demon.price = demon.price * unitGrowth;
  }

  updateDemonStats();
}

// Skill class
let Skill = function(name, price, mult, partyMem, improveClick, desc) {
  this.name = '<h4>';
  this.name += name;
  this.name += ' <input type="button" value="Learn" onclick="learn(';
  this.name += name.toLowerCase();
  this.name += ')"></h4>';
  this.price = price;
  this.mult = mult;
  this.learned = false;
  this.partyMem = partyMem;
  this.improveClick = improveClick;
  this.desc = '<p> Cost: ';
  this.desc += this.price;
  this.desc += ' Macca // Effect: ';
  this.desc += desc;
  this.desc += '</p>';

}

// Making new skills
let dia = new Skill('Dia', 100, 2, 0, true, 'Doubles MpS for Pixie(s) and clicking');
let mabufu = new Skill('Mabufu', 300, 2, 1, false, 'Doubles MpS for Jack Frost(s)');
let lullaby = new Skill('Lullaby', 5000, 2, 2, false, 'Doubles MpS for Mermaid(s)');
let coldworld = new Skill('Cold World', 7500, 2, 3, false, 'Doubles MpS for King Frost(s)');
let infhail = new Skill('Infernal Hail', 12000, 2, 4, true, 'Doubles MpS for Sukuna-Hikona(s) and clicking');
let estoma = new Skill('Estoma', 17500, 3, 5, true, 'Triples MpS for Okikunushi(s) and clicking');
let grand = new Skill('Grand Tack', 25000, 2, 6, false, 'Doubles MpS for Roc(s)');
let hands = new Skill('5.6 Billion Hands', 75000, 3, 7, false, 'Triples MpS for Maitreya');
let makabuild = new Skill('Makabuild', 250000, 3, 8, false, 'Triples MpS for Samyaza');
let eandi = new Skill('EandI', 333333, 2, 9, false, 'Doubles MpS for Dante(s)');
let hexagram = new Skill('Hexagram', 500000, 2, 10, false, 'Doubles MpS for Merkabah(s)');
let shine = new Skill('Evil Shine', 666666, 4, 11, false, 'Quadruples MpS for Lucifer(s)');
let raging = new Skill('Raging Elements', 2000000, 2, 12, false, 'Doubles MpS for Inanna(s)');
let raga = new Skill('Dream Raga', 4000000, 4, 13, true, 'Quadruples MpS for Krishna(s) and clicking');
let punch = new Skill('Power Punch', 5000000, 3, 14, false, 'Triples MpS for Dagda(s)');
let sinai = new Skill('Fire of Sinai', 15000000, 2, 15, false, 'Doubles MpS for Metatron(s)');
let stigmata = new Skill('Holy Stigmata', 1000000000, 5, 16, true, 'Quintuples MpS for YHVH(s)');
let skillCards = [dia, mabufu, lullaby, coldworld, infhail, estoma, grand,hands, makabuild, eandi, hexagram, shine, raging, raga, punch, sinai, stigmata];


// Learning skills function
function learn(skill) {
  if(skill.learned == false && score >= skill.price) {
    party[skill.partyMem].mps = party[skill.partyMem].mps * skill.mult;
    skill.learned = true;
    score -= skill.price;
    if(skill.improveClick) { clickVal = clickVal * skill.mult }
    updateDemonStats();
  }
}

// drawing the skills on screen
for(i=0; i!=skillCards.length; i++) {
  upgradeArea.innerHTML += skillCards[i].name;
  upgradeArea.innerHTML += skillCards[i].desc;
}

// Function that returns proper FPS value
function fps(n) { return 1000/n; }

// This will be called every time our demons' stats update:
function updateDemonStats() {
  demonArea.innerHTML = '<h3>Demons</h3>';
  for(i=0; i!=party.length; i++) {
    demonArea.innerHTML += party[i].name;
    party[i].stats = getDemonStats(party[i]);
    demonArea.innerHTML += party[i].stats;
  }
}

// Setting the main clock of the game
mainClock = setInterval(function() {
  for(i=0; i!=party.length; i++) {
    score += party[i].mps * party[i].owned;
    lifetime += party[i].mps * party[i].owned;
  }

  updateMacca();
},fps(60));
