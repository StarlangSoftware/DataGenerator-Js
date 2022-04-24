import { DiscreteAttribute } from "nlptoolkit-classification/dist/Attribute/DiscreteAttribute";
import { MorphologicalParse } from "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalParse";
export declare class RootFormAttribute extends DiscreteAttribute {
    /**
     * Discrete attribute for a given word. Returns the the root word
     * @param parse Morphological parse of the word.
     */
    constructor(parse: MorphologicalParse);
}
