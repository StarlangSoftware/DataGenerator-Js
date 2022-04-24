import {BinaryAttribute} from "nlptoolkit-classification/dist/Attribute/BinaryAttribute";
import {Gazetteer} from "nlptoolkit-namedentityrecognition/dist/Gazetteer";

export class IsLocationGazetteer extends BinaryAttribute{

    static gazetteer : Gazetteer = new Gazetteer("LOCATION", "gazetteer-location.txt")

    /**
     * Binary attribute for a given word. If the word is listed in the Location Gazetteer file, the attribute will
     * have the value "true", otherwise "false".
     * @param surfaceForm Surface form of the word.
     */
    constructor(surfaceForm: string) {
        super(IsLocationGazetteer.gazetteer.contains(surfaceForm));
    }
}