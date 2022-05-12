import {
    Boss
} from "./boss.js";

import {
    Guerrier,
    Mage,
    Archer
} from "./hero.js";


const boss1 = new Boss("Sauron", 70, 80);
const boss2 = new Boss("Chronos", 50, 120);
const boss3 = new Boss("lilith", 30, 180);

const bossArr = [boss1, boss2, boss3];

// ce code vas choisir un boss au hasard
let bossSelected = bossArr[Math.trunc(Math.random() * bossArr.length)];;


// Instance des personnages


const mage = new Mage();
const guerrier = new Guerrier();
const archer = new Archer();

// Generateur de fleches entre 7 et 11.


function flecheGenerateur(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

const nbrFleches = flecheGenerateur(7, 11);

// generateur de la mana du mage entre 7 9 11

const manaPool = [7, 9, 11];
let mageMana = manaPool[Math.trunc(Math.random() * manaPool.length)];

// Logic des tours et variable de depart
let tour = 1;
let vieEquipe;
let atqEquipe;










// setup des fleches de la mana et de la rage 


mage.mana = mageMana;
archer.fleche = nbrFleches;
guerrier.rage = 0;



















alert(`***************Bienvenue dans GEEEEK OF LEGENDDDDS !*************
                      Pour une Bonne expèrience activez la console`)
console.log(`******Bienvenue dans GEEEEK OF LEGENDDDDS !******

-------------Une Aventure EPIQUE.----------------- 
---dans la quelle vous devrez combattre à MORT----
-------avec votre équipe de 3 personnages !-------`)

// Selection du nom des Héro par l'utilisateur
guerrier.nom = prompt(`Veuillez nommer votre Guerrier : `)
console.log(`Merci votre Guerrier s'appel ${guerrier.nom}`)
archer.nom = prompt(`Veuillez nommer votre Archer : `)
console.log(`Merci votre Archer s'appel ${archer.nom}`)
mage.nom = prompt(`Veuillez nommer votre Mage : `)
console.log(`Merci votre Mage s'appel ${mage.nom}`)

// repartition de 100 pdv pour chaque personnage
let vieTotal = 100;

guerrier.pointDeVie = +prompt(`Bonjour veuillez selectionner la vie de chaqun de vos heros, vous avez ${vieTotal} points de vies a partager : 
Combien de point de vie votre guerrier ${guerrier.nom} aura ? (entre 20 et 35) `)


// si la vietotal est moins de 15 elle serra automatiquement ajouter au hero3



if (guerrier.pointDeVie >= 20 && guerrier.pointDeVie <= 35) {
    vieTotal = vieTotal - guerrier.pointDeVie;

    console.log(`la vie de ${guerrier.nom} est : ${guerrier.pointDeVie}, il vous reste encore ${vieTotal} a partager entre vos personnages restant`)
} else {
    guerrier.pointDeVie = +prompt(`Bonjour veuillez selectionner la vie de chaqun de vos heros, vous avez ${vieTotal} points de vies a partager : 
    Combien de point de vie ${guerrier.nom} aura ? (entre 20 et 35) `)
}

archer.pointDeVie = +prompt(`Bonjour veuillez selectionner la vie de ${archer.nom} il ne vous reste plus que ${vieTotal}, le restant serra automatiquement attribué a ${mage.nom}  (entre 20 et 35)  `)

if (archer.pointDeVie <= 35 && archer.pointDeVie >= 20) {
    vieTotal = vieTotal - archer.pointDeVie;
    mage.pointDeVie = vieTotal;
    console.log(`la vie de ${archer.nom} est : ${archer.pointDeVie}, le restant de votre total ${vieTotal} fut transferer à ${mage.nom}`)
    console.log(`votre Mage ${mage.nom} a ${mage.pointDeVie} pdv.`)
}



// Repartition de la force



alert(`Maintenant que la vie de nos personnage est faite, passons a l'attaque`)
let atqTotal = 50;

guerrier.pointAttaque = +prompt(`Bonjour veuillez selectionner l'attaque de chaqun de vos heros, vous avez ${atqTotal} points d'attaques a partager : 
Combien d'attaque ${guerrier.nom} aura ? (entre 10 et 15) `)

if (guerrier.pointAttaque >= 10 && guerrier.pointAttaque <= 14) {
    atqTotal = atqTotal - guerrier.pointAttaque;

    console.log(`l'attaque de votre Guerrie ${guerrier.nom} est : ${guerrier.pointAttaque}, il vous reste encore ${atqTotal} a partager entre vos personnages restant`)
}

archer.pointAttaque = +prompt(`Bonjour veuillez selectionner l'attaque de votre Archer ${archer.nom} parmis l'attaque restante :  ${atqTotal} point d'attaque, le restant serra automatiquement attribué a votre Mage ${mage.nom}  (entre 10 et 15)  `)

if (archer.pointAttaque <= 15 && archer.pointAttaque >= 10) {
    atqTotal = atqTotal - archer.pointAttaque;
    mage.pointAttaque = atqTotal;
    console.log(`${mage.nom} a ${mage.pointAttaque} points d'attaque.`)
}

console.log(`Voicis les stats de vos personnages`);
alert(`Vous pouvez voir les informations de vos personnages dans la console`)
console.log(guerrier);
console.log(archer);
console.log(mage);
alert(`Le combat ce deroule en tour par tour, un Boss serra selectionné au Hazard parmis la pool de Boss`)
alert(`Le bosse sélectionné est ${bossSelected.nom}, ses stats sont affichés dans votre console.`)
console.log(`voici les informations du boss selectionné`)
console.log(bossSelected)

alert(`Le premier Tour Commence ! vos personnages ont la main`)
console.log(`vos personnages attaqueront en même temps, vous pouvez choisir entre 3 positions différente : l'Attaque, La defense, Et Neutre`);
let position = prompt(`Veuillez écrire la position que vos personnages devront adopter durant ce tour : Defense, Attaque, Neutre`);

vieEquipe = guerrier.pointDeVie + mage.pointDeVie + archer.pointDeVie;
atqEquipe = guerrier.pointAttaque + mage.pointAttaque + archer.pointAttaque;


// Modification des stats en fonction de la selection du joueur.
if (position === "Neutre") {
    archer.neutre();
    mage.neutre();
    guerrier.neutre();

    console.log(`vous avez selectionner la position Neutre : votre équipe a en tout ${vieEquipe} points de vie; et ${atqEquipe} points d'attaque`)
} else if (position === "Defense") {
    archer.defense();
    mage.defense();
    guerrier.defense();

    console.log(`vous avez selectionner la position Defense : votre équipe a en tout ${vieEquipe} points de vie; et ${atqEquipe} points d'attaque`)

} else if (position === "Attaque") {
    archer.attaque();
    mage.attaque();
    guerrier.attaque();

    console.log(`vous avez selectionner la position Attaque : votre équipe a en tout ${vieEquipe} points de vie; et ${atqEquipe} points d'attaque`)
}

console.log(`Votre équipe attaque ${bossSelected.nom}`)
console.log(`${bossSelected.nom} perd ${bossSelected.vie}points de vies `)