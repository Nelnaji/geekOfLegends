import {
    Personnage
} from "./personnage.js";

class Boss extends Personnage {
    constructor(nom, atq, vie) {
        super(nom, atq, vie);
    }
}

const boss1 = new Boss("Sauron", 70, 80);
const boss2 = new Boss("Chronos", 50, 120);
const boss3 = new Boss("lilith", 30, 180);