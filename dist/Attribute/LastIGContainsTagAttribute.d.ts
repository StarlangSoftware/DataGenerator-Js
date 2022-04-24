import { BinaryAttribute } from "nlptoolkit-classification/dist/Attribute/BinaryAttribute";
import { MorphologicalParse } from "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalParse";
import { MorphologicalTag } from "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalTag";
export declare class LastIGContainsTagAttribute extends BinaryAttribute {
    constructor(parse: MorphologicalParse, tag: MorphologicalTag);
}
