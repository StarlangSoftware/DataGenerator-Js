(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalTag", "./LastIGContainsTagAttribute"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LastIGContainsTagAblativeAttribute = void 0;
    const MorphologicalTag_1 = require("nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalTag");
    const LastIGContainsTagAttribute_1 = require("./LastIGContainsTagAttribute");
    class LastIGContainsTagAblativeAttribute extends LastIGContainsTagAttribute_1.LastIGContainsTagAttribute {
        /**
         * Binary attribute for a given word. If the last inflectional group of the word contains ABLATIVE tag,
         * the attribute will be "true", otherwise "false".
         * @param parse Morphological parse of the word.
         */
        constructor(parse) {
            super(parse, MorphologicalTag_1.MorphologicalTag.ABLATIVE);
        }
    }
    exports.LastIGContainsTagAblativeAttribute = LastIGContainsTagAblativeAttribute;
});
//# sourceMappingURL=LastIGContainsTagAblativeAttribute.js.map