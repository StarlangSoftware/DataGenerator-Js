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
    exports.RootFormAttribute = void 0;
    const DiscreteAttribute_1 = require("nlptoolkit-classification/dist/Attribute/DiscreteAttribute");
    class RootFormAttribute extends DiscreteAttribute_1.DiscreteAttribute {
        /**
         * Discrete attribute for a given word. Returns the the root word
         * @param parse Morphological parse of the word.
         */
        constructor(parse) {
            super(parse.getWord().getName());
        }
    }
    exports.RootFormAttribute = RootFormAttribute;
});
//# sourceMappingURL=RootFormAttribute.js.map