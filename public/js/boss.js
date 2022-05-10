import {
    Personnage
} from "./personnage.js";

class Boss extends Personnage {
    constructor(nom, atq, vie) {
        super(nom, atq, vie);
    }
}

const boss1 = new Boss("Le Blob", 100, 100);
const boss2 = new Boss("Aragna", 100, 100);
const boss3 = new Boss("Joker", 100, 100);