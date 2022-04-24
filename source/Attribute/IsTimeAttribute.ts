import {BinaryAttribute} from "nlptoolkit-classification/dist/Attribute/BinaryAttribute";
import {Word} from "nlptoolkit-dictionary/dist/Dictionary/Word";

export class IsTimeAttribute extends BinaryAttribute{

    /**
     * Binary attribute for a given word. If the word represents a time form, the attribute will have the
     * value "true", otherwise "false".
     * @param surfaceForm Surface form of the word.
     */
    constructor(surfaceForm: string) {
        super(Word.isTime(surfaceForm));
    }

}