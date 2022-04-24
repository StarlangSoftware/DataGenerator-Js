import { LastIGContainsTagAttribute } from "./LastIGContainsTagAttribute";
import { MorphologicalParse } from "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalParse";
export declare class LastIGContainsTagGenitiveAttribute extends LastIGContainsTagAttribute {
    /**
     * Binary attribute for a given word. If the last inflectional group of the word contains GENITIVE tag,
     * the attribute will be "true", otherwise "false".
     * @param parse Morphological parse of the word.
     */
    constructor(parse: MorphologicalParse);
}
