import {BinaryAttribute} from "nlptoolkit-classification/dist/Attribute/BinaryAttribute";

export class IsCapitalAttribute extends BinaryAttribute{

    /**
     * Binary attribute for a given word. If the starting letter of the word is capital, the attribute will have
     * the value "true", otherwise "false".
     * @param surfaceForm Surface form of the word.
     */
    constructor(surfaceForm: string) {
        super(surfaceForm[0].toLocaleUpperCase("tr") == surfaceForm[0]);
    }
}