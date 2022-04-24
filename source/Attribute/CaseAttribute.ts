import {DiscreteAttribute} from "nlptoolkit-classification/dist/Attribute/DiscreteAttribute";
import {MorphologicalParse} from "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalParse";

export class CaseAttribute extends DiscreteAttribute{

    /**
     * Discrete attribute for a given word. If the last inflectional group of the word contains case information, the
     * attribute will have that case value. Otherwise, the attribute will have the value null.
     * @param parse Morphological parse of the word.
     */
    constructor(parse: MorphologicalParse) {
        super(parse.lastIGContainsCase());
    }
}