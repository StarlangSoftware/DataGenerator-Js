"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsLocationGazetteer = void 0;
const BinaryAttribute_1 = require("nlptoolkit-classification/dist/Attribute/BinaryAttribute");
const Gazetteer_1 = require("nlptoolkit-namedentityrecognition/dist/Gazetteer");
class IsLocationGazetteer extends BinaryAttribute_1.BinaryAttribute {
    static gazetteer = new Gazetteer_1.Gazetteer("LOCATION", "gazetteer-location.txt");
    /**
     * Binary attribute for a given word. If the word is listed in the Location Gazetteer file, the attribute will
     * have the value "true", otherwise "false".
     * @param surfaceForm Surface form of the word.
     */
    constructor(surfaceForm) {
        super(IsLocationGazetteer.gazetteer.contains(surfaceForm));
    }
}
exports.IsLocationGazetteer = IsLocationGazetteer;
//# sourceMappingURL=IsLocationGazetteer.js.map