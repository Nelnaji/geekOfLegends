class Hero {
    constructor(nom, atq, vie) {
        this.nom = nom;
        this.pointAttaque = atq;
        this.pointDeVie = vie;

    }
}

class Mage extends Hero {
    constructor(nom, atq, vie, mana) {
        super(nom, atq, vie);
        this.mana = mana;
    }
}