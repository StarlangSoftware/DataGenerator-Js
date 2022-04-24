(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-classification/dist/Attribute/BinaryAttribute", "nlptoolkit-dictionary/dist/Dictionary/Word"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IsMoneyAttribute = void 0;
    const BinaryAttribute_1 = require("nlptoolkit-classification/dist/Attribute/BinaryAttribute");
    const Word_1 = require("nlptoolkit-dictionary/dist/Dictionary/Word");
    class IsMoneyAttribute extends BinaryAttribute_1.BinaryAttribute {
        /**
         * Binary attribute for a given word. If the word is "dolar", "euro", "sterlin", etc., the attribute will have the
         * value "true", otherwise "false".
         * @param surfaceForm Surface form of the word.
         */
        constructor(surfaceForm) {
            super(Word_1.Word.isMoney(surfaceForm));
        }
    }
    exports.IsMoneyAttribute = IsMoneyAttribute;
});
//# sourceMappingURL=IsMoneyAttribute.js.map