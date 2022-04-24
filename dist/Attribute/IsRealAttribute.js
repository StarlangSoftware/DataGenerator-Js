(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-classification/dist/Attribute/BinaryAttribute"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IsRealAttribute = void 0;
    const BinaryAttribute_1 = require("nlptoolkit-classification/dist/Attribute/BinaryAttribute");
    class IsRealAttribute extends BinaryAttribute_1.BinaryAttribute {
        /**
         * Binary attribute for a given word. If the word is represents a real number (if the morphological parse contains
         * tag REAL), the attribute will have the value "true", otherwise "false".
         * @param parse Morphological parse of the word.
         */
        constructor(parse) {
            super(parse.isReal());
        }
    }
    exports.IsRealAttribute = IsRealAttribute;
});
//# sourceMappingURL=IsRealAttribute.js.map