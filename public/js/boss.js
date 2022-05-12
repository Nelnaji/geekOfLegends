import {
    Personnage
} from "./personnage.js";

export class Boss extends Personnage {
    constructor(nom, atq, vie) {
        super(nom, atq, vie);
        this.enigme = () => {

        };
    }
}