import { BinaryAttribute } from "nlptoolkit-classification/dist/Attribute/BinaryAttribute";
import { MorphologicalParse } from "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalParse";
export declare class IsFractionAttribute extends BinaryAttribute {
    /**
     * Binary attribute for a given word. If the word is represents a fraction (if the morphological parse contains
     * tag FRACTION), the attribute will have the value "true", otherwise "false".
     * @param parse Morphological parse of the word.
     */
    constructor(parse: MorphologicalParse);
}
