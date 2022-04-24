import {BinaryAttribute} from "nlptoolkit-classification/dist/Attribute/BinaryAttribute";
import {Gazetteer} from "nlptoolkit-namedentityrecognition/dist/Gazetteer";

export class IsPersonGazetteer extends BinaryAttribute{

    static gazetteer : Gazetteer = new Gazetteer("PERSON", "gazetteer-person.txt")

    /**
     * Binary attribute for a given word. If the word is listed in the Person Gazetteer file, the attribute will
     * have the value "true", otherwise "false".
     * @param surfaceForm Surface form of the word.
     */
    constructor(surfaceForm: string) {
        super(IsPersonGazetteer.gazetteer.contains(surfaceForm));
    }
}