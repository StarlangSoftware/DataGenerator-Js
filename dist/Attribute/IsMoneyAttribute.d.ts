import { BinaryAttribute } from "nlptoolkit-classification/dist/Attribute/BinaryAttribute";
export declare class IsMoneyAttribute extends BinaryAttribute {
    /**
     * Binary attribute for a given word. If the word is "dolar", "euro", "sterlin", etc., the attribute will have the
     * value "true", otherwise "false".
     * @param surfaceForm Surface form of the word.
     */
    constructor(surfaceForm: string);
}
