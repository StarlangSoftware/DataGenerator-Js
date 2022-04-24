import {BinaryAttribute} from "nlptoolkit-classification/dist/Attribute/BinaryAttribute";
import {MorphologicalParse} from "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalParse";

export class IsProperNounAttribute extends BinaryAttribute{

    /**
     * Binary attribute for a given word. If the word represents a date (if the morphological parse contains
     * tag PROPERNOUN), the attribute will have the value "true", otherwise "false".
     * @param parse Morphological parse of the word.
     */
    constructor(parse: MorphologicalParse) {
        super(parse.isProperNoun());
    }
}