"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootPosAttribute = void 0;
const DiscreteAttribute_1 = require("nlptoolkit-classification/dist/Attribute/DiscreteAttribute");
class RootPosAttribute extends DiscreteAttribute_1.DiscreteAttribute {
    /**
     * Discrete attribute for a given word. Returns the part of speech of the root word
     * @param parse Morphological parse of the word.
     */
    constructor(parse) {
        super(parse.getRootPos());
    }
}
exports.RootPosAttribute = RootPosAttribute;
//# sourceMappingURL=RootPosAttribute.js.map