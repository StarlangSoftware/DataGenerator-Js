import {BinaryAttribute} from "nlptoolkit-classification/dist/Attribute/BinaryAttribute";
import {MorphologicalParse} from "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalParse";

export class IsRealAttribute extends BinaryAttribute{

    /**
     * Binary attribute for a given word. If the word is represents a real number (if the morphological parse contains
     * tag REAL), the attribute will have the value "true", otherwise "false".
     * @param parse Morphological parse of the word.
     */
    constructor(parse: MorphologicalParse) {
        super(parse.isReal());
    }
}