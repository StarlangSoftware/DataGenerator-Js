import {BinaryAttribute} from "nlptoolkit-classification/dist/Attribute/BinaryAttribute";
import {MorphologicalParse} from "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalParse";

export class IsAdjectiveAttribute extends BinaryAttribute{

    /**
     * Binary attribute for a given word. If the word is an adjective, the attribute will have
     * the value "true", otherwise "false".
     * @param parse Morphological parse of the word.
     */
    constructor(parse: MorphologicalParse) {
        super(parse.isAdjective());
    }
}