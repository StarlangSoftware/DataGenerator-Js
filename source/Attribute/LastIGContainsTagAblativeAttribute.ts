import {MorphologicalParse} from "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalParse";
import {MorphologicalTag} from "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalTag";
import {LastIGContainsTagAttribute} from "./LastIGContainsTagAttribute";

export class LastIGContainsTagAblativeAttribute extends LastIGContainsTagAttribute{

    /**
     * Binary attribute for a given word. If the last inflectional group of the word contains ABLATIVE tag,
     * the attribute will be "true", otherwise "false".
     * @param parse Morphological parse of the word.
     */
    constructor(parse: MorphologicalParse) {
        super(parse, MorphologicalTag.ABLATIVE)
    }

}