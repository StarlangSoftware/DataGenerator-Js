import {DiscreteAttribute} from "nlptoolkit-classification/dist/Attribute/DiscreteAttribute";
import {MorphologicalParse} from "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalParse";

export class MainPosAttribute extends DiscreteAttribute{

    /**
     * Discrete attribute for a given word. Returns the last part of speech (main part of speech) of the word
     * @param parse Morphological parse of the word.
     */
    constructor(parse: MorphologicalParse) {
        super(parse.getPos());
    }
}