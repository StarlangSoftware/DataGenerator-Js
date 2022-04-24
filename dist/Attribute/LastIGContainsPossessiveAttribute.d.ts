import { BinaryAttribute } from "nlptoolkit-classification/dist/Attribute/BinaryAttribute";
import { MorphologicalParse } from "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalParse";
export declare class LastIGContainsPossessiveAttribute extends BinaryAttribute {
    /**
     * Binary attribute for a given word. If the last inflectional group of the word contains POSSESSIVE tag,
     * the attribute will be "true", otherwise "false".
     * @param parse Morphological parse of the word.
     */
    constructor(parse: MorphologicalParse);
}
