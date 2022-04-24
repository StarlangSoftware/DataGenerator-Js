import {BinaryAttribute} from "nlptoolkit-classification/dist/Attribute/BinaryAttribute";
import {Word} from "nlptoolkit-dictionary/dist/Dictionary/Word";

export class IsOrganizationAttribute extends BinaryAttribute{

    constructor(surfaceForm: string) {
        super(Word.isOrganization(surfaceForm));
    }
}