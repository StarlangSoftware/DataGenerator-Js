"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastIGContainsPossessiveAttribute = void 0;
const BinaryAttribute_1 = require("nlptoolkit-classification/dist/Attribute/BinaryAttribute");
class LastIGContainsPossessiveAttribute extends BinaryAttribute_1.BinaryAttribute {
    /**
     * Binary attribute for a given word. If the last inflectional group of the word contains POSSESSIVE tag,
     * the attribute will be "true", otherwise "false".
     * @param parse Morphological parse of the word.
     */
    constructor(parse) {
        super(parse.lastIGContainsPossessive());
    }
}
exports.LastIGContainsPossessiveAttribute = LastIGContainsPossessiveAttribute;
//# sourceMappingURL=LastIGContainsPossessiveAttribute.js.map