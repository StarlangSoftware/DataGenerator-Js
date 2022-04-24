import {LastIGContainsTagAttribute} from "./LastIGContainsTagAttribute";
import {MorphologicalParse} from "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalParse";
import {MorphologicalTag} from "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalTag";

export class LastIGContainsTagAccusativeAttribute extends LastIGContainsTagAttribute{

    constructor(parse: MorphologicalParse) {
        super(parse, MorphologicalTag.ACCUSATIVE);
    }
}