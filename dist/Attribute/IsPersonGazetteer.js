"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsPersonGazetteer = void 0;
const BinaryAttribute_1 = require("nlptoolkit-classification/dist/Attribute/BinaryAttribute");
const Gazetteer_1 = require("nlptoolkit-namedentityrecognition/dist/Gazetteer");
class IsPersonGazetteer extends BinaryAttribute_1.BinaryAttribute {
    static gazetteer = new Gazetteer_1.Gazetteer("PERSON", "gazetteer-person.txt");
    /**
     * Binary attribute for a given word. If the word is listed in the Person Gazetteer file, the attribute will
     * have the value "true", otherwise "false".
     * @param surfaceForm Surface form of the word.
     */
    constructor(surfaceForm) {
        super(IsPersonGazetteer.gazetteer.contains(surfaceForm));
    }
}
exports.IsPersonGazetteer = IsPersonGazetteer;
//# sourceMappingURL=IsPersonGazetteer.js.map