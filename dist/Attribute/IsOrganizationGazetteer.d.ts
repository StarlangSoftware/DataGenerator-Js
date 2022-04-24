import { BinaryAttribute } from "nlptoolkit-classification/dist/Attribute/BinaryAttribute";
import { Gazetteer } from "nlptoolkit-namedentityrecognition/dist/Gazetteer";
export declare class IsOrganizationGazetteer extends BinaryAttribute {
    static gazetteer: Gazetteer;
    /**
     * Binary attribute for a given word. If the word is listed in the Organization Gazetteer file, the attribute will
     * have the value "true", otherwise "false".
     * @param surfaceForm Surface form of the word.
     */
    constructor(surfaceForm: string);
}
