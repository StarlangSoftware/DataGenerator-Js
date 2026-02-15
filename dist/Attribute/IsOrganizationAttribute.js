"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsOrganizationAttribute = void 0;
const BinaryAttribute_1 = require("nlptoolkit-classification/dist/Attribute/BinaryAttribute");
const Word_1 = require("nlptoolkit-dictionary/dist/Dictionary/Word");
class IsOrganizationAttribute extends BinaryAttribute_1.BinaryAttribute {
    constructor(surfaceForm) {
        super(Word_1.Word.isOrganization(surfaceForm));
    }
}
exports.IsOrganizationAttribute = IsOrganizationAttribute;
//# sourceMappingURL=IsOrganizationAttribute.js.map