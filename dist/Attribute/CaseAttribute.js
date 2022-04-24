(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-classification/dist/Attribute/DiscreteAttribute"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CaseAttribute = void 0;
    const DiscreteAttribute_1 = require("nlptoolkit-classification/dist/Attribute/DiscreteAttribute");
    class CaseAttribute extends DiscreteAttribute_1.DiscreteAttribute {
        /**
         * Discrete attribute for a given word. If the last inflectional group of the word contains case information, the
         * attribute will have that case value. Otherwise, the attribute will have the value null.
         * @param parse Morphological parse of the word.
         */
        constructor(parse) {
            super(parse.lastIGContainsCase());
        }
    }
    exports.CaseAttribute = CaseAttribute;
});
//# sourceMappingURL=CaseAttribute.js.map