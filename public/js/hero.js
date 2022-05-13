import {
    Personnage
} from "./personnage.js";

export class Hero extends Personnage {
    constructor(nom, atq, vie, defense, attaque) {
        super(nom, atq, vie);
        this.defense = () => {
            this.pointAttaque = this.pointAttaque * .5;
            this.pointDeVie = this.pointDeVie * 2.5;
            // augmenter les chances d'être attaquer par le boss
        };
        this.attaque = () => {
            this.pointAttaque = this.pointAttaque * 1.4;
            this.pointDeVie = this.pointDeVie * .75;
        };
        this.neutre = () => {
            this.pointAttaque = this.pointAttaque * 1;
            this.pointDeVie = this.pointDeVie * 1;
        }
    }
}


export class Guerrier extends Hero {
    constructor(nom, atq, vie, defense, attaque, rage) {
        super(nom, atq, vie, defense, attaque);
        this.rage = rage;
    }
}
export class Mage extends Hero {
    constructor(nom, atq, vie, defense, attaque, mana) {
        super(nom, atq, vie, defense, attaque);
        this.mana = mana;
    }
}
export class Archer extends Hero {
    constructor(nom, atq, vie, defense, attaque, fleche) {
        super(nom, atq, vie, defense, attaque);
        this.fleche = fleche;
    }
}