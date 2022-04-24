(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./LastIGContainsTagAttribute", "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalTag"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LastIGContainsTagGenitiveAttribute = void 0;
    const LastIGContainsTagAttribute_1 = require("./LastIGContainsTagAttribute");
    const MorphologicalTag_1 = require("nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalTag");
    class LastIGContainsTagGenitiveAttribute extends LastIGContainsTagAttribute_1.LastIGContainsTagAttribute {
        /**
         * Binary attribute for a given word. If the last inflectional group of the word contains GENITIVE tag,
         * the attribute will be "true", otherwise "false".
         * @param parse Morphological parse of the word.
         */
        constructor(parse) {
            super(parse, MorphologicalTag_1.MorphologicalTag.GENITIVE);
        }
    }
    exports.LastIGContainsTagGenitiveAttribute = LastIGContainsTagGenitiveAttribute;
});
//# sourceMappingURL=LastIGContainsTagGenitiveAttribute.js.map