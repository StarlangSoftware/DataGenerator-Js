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
    exports.LastIGContainsTagInstrumentalAttribute = void 0;
    const LastIGContainsTagAttribute_1 = require("./LastIGContainsTagAttribute");
    const MorphologicalTag_1 = require("nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalTag");
    class LastIGContainsTagInstrumentalAttribute extends LastIGContainsTagAttribute_1.LastIGContainsTagAttribute {
        constructor(parse) {
            super(parse, MorphologicalTag_1.MorphologicalTag.INSTRUMENTAL);
        }
    }
    exports.LastIGContainsTagInstrumentalAttribute = LastIGContainsTagInstrumentalAttribute;
});
//# sourceMappingURL=LastIGContainsTagInstrumentalAttribute.js.map