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
    exports.LastIGContainsTagAttribute = void 0;
    const BinaryAttribute_1 = require("nlptoolkit-classification/dist/Attribute/BinaryAttribute");
    class LastIGContainsTagAttribute extends BinaryAttribute_1.BinaryAttribute {
        constructor(parse, tag) {
            super(parse.lastIGContainsTag(tag));
        }
    }
    exports.LastIGContainsTagAttribute = LastIGContainsTagAttribute;
});
//# sourceMappingURL=LastIGContainsTagAttribute.js.map