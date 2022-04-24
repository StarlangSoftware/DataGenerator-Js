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
    exports.Predicate = void 0;
    const DiscreteAttribute_1 = require("nlptoolkit-classification/dist/Attribute/DiscreteAttribute");
    class Predicate extends DiscreteAttribute_1.DiscreteAttribute {
        /**
         * Discrete attribute for a given word. Returns the nearest predicate word to the given word
         * @param sentence Sentence where current word is in.
         * @param index Position of the current word in the sentence
         */
        constructor(sentence, index) {
            super(sentence.getPredicate(index));
        }
    }
    exports.Predicate = Predicate;
});
//# sourceMappingURL=Predicate.js.map