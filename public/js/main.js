// Generateur de fleches entre 7 et 11.

/*
function flecheGenerateur(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

const nbrFleches = flecheGenerateur(7, 11);
console.log(nbrFleches);
// generateur de la mana du mage entre 7 9 11

const manaPool = [7, 9, 11];
let mageMana = manaPool[Math.trunc(Math.random() * manaPool.length)];

console.log(mageMana);
*/


// repartition de 100 pdv pour chaque personnage
let vieTotal = 100;

let vieHero3;

let vieHero1 = +prompt(`Bonjour veuillez selectionner la vie de chaqun de vos heros, vous avez ${vieTotal} points de vies a partager : 
Combien de point de vie "nom de hero" aura ? (entre 20 et 35) `)


// si la vietotal est moins de 15 elle serra automatiquement ajouter au hero3
if (vieTotal >= 15) {
    if (vieHero1 >= 20 && vieHero1 <= 35) {
        vieTotal = vieTotal - vieHero1;

        console.log(`la vie de "nom de hero" est : ${vieHero1}, il vous reste encore ${vieTotal} a partager entre vos personnages restant`)
    }

} else {
    vieHero3 = vieTotal
}

let vieHero2 = +prompt(`Bonjour veuillez selectionner la vie de "nom de hero" il ne vous reste plus que ${vietotal}, le restant serra automatiquement attribué a "nom de hero"`)