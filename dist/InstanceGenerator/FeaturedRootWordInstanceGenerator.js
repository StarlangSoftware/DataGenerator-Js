(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-classification/dist/Attribute/DiscreteAttribute", "nlptoolkit-classification/dist/Attribute/BinaryAttribute", "../Attribute/MainPosAttribute", "../Attribute/IsCapitalAttribute", "./RootWordInstanceGenerator"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FeaturedRootEordInstanceGenerator = void 0;
    const DiscreteAttribute_1 = require("nlptoolkit-classification/dist/Attribute/DiscreteAttribute");
    const BinaryAttribute_1 = require("nlptoolkit-classification/dist/Attribute/BinaryAttribute");
    const MainPosAttribute_1 = require("../Attribute/MainPosAttribute");
    const IsCapitalAttribute_1 = require("../Attribute/IsCapitalAttribute");
    const RootWordInstanceGenerator_1 = require("./RootWordInstanceGenerator");
    class FeaturedRootEordInstanceGenerator extends RootWordInstanceGenerator_1.RootWordInstanceGenerator {
        /**
         * Constructor method. Gets input window size and sets the corresponding variable.
         * @param windowSize Number of previous (next) words to be considered in adding attributes.
         */
        constructor(windowSize) {
            super();
            this.windowSize = windowSize;
        }
        /**
         * Abstract function for adding attributes for empty words to the root word determination problem. The number of
         * attributes in this function should be equal to the number of attributes in the function
         * addAttributesForPreviousWords.
         * @param current Current classification instance
         * @param emptyWord String form to place for empty words.
         */
        addAttributesForEmptyWords(current, emptyWord) {
            current.addAttribute(new DiscreteAttribute_1.DiscreteAttribute("NULL"));
            current.addAttribute(new BinaryAttribute_1.BinaryAttribute(false));
        }
        /**
         * Abstract function for adding attributes to the root word determination problem. Depending on your design
         * you can add as many attributes as possible. The number of attributes in this function should be equal to the
         * number of attributes in the function addAttributesForEmptyWords.
         * @param current Current classification instance
         * @param sentence Input sentence.
         * @param wordIndex The index of the word in the sentence.
         */
        addAttributesForPreviousWords(current, sentence, wordIndex) {
            let word = sentence.getWord(wordIndex);
            let parse = word.getParse();
            current.addAttribute(new MainPosAttribute_1.MainPosAttribute(parse));
            current.addAttribute(new IsCapitalAttribute_1.IsCapitalAttribute(word.getName()));
        }
    }
    exports.FeaturedRootEordInstanceGenerator = FeaturedRootEordInstanceGenerator;
});
//# sourceMappingURL=FeaturedRootWordInstanceGenerator.js.map