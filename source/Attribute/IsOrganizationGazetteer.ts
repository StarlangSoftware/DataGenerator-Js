import {BinaryAttribute} from "nlptoolkit-classification/dist/Attribute/BinaryAttribute";
import {Gazetteer} from "nlptoolkit-namedentityrecognition/dist/Gazetteer";

export class IsOrganizationGazetteer extends BinaryAttribute{

    static gazetteer : Gazetteer = new Gazetteer("ORGANIZATION", "gazetteer-organization.txt")

    /**
     * Binary attribute for a given word. If the word is listed in the Organization Gazetteer file, the attribute will
     * have the value "true", otherwise "false".
     * @param surfaceForm Surface form of the word.
     */
    constructor(surfaceForm: string) {
        super(IsOrganizationGazetteer.gazetteer.contains(surfaceForm));
    }
}