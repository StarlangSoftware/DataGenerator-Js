"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsOrganizationGazetteer = void 0;
const BinaryAttribute_1 = require("nlptoolkit-classification/dist/Attribute/BinaryAttribute");
const Gazetteer_1 = require("nlptoolkit-namedentityrecognition/dist/Gazetteer");
class IsOrganizationGazetteer extends BinaryAttribute_1.BinaryAttribute {
    static gazetteer = new Gazetteer_1.Gazetteer("ORGANIZATION", "gazetteer-organization.txt");
    /**
     * Binary attribute for a given word. If the word is listed in the Organization Gazetteer file, the attribute will
     * have the value "true", otherwise "false".
     * @param surfaceForm Surface form of the word.
     */
    constructor(surfaceForm) {
        super(IsOrganizationGazetteer.gazetteer.contains(surfaceForm));
    }
}
exports.IsOrganizationGazetteer = IsOrganizationGazetteer;
//# sourceMappingURL=IsOrganizationGazetteer.js.map