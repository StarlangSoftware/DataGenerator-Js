(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./NerInstanceGenerator"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VectorizedNerInstanceGenerator = void 0;
    const NerInstanceGenerator_1 = require("./NerInstanceGenerator");
    class VectorizedNerInstanceGenerator extends NerInstanceGenerator_1.NerInstanceGenerator {
        /**
         * Constructor of VectorizedNerInstanceGenerator which takes input a {@link VectorizedDictionary}, a window size
         * and a word format and sets corresponding attributes with these inputs.
         * @param dictionary Dictionary in the vector form. Each word is stored in vector form in this dictionary.
         * @param windowSize Number of previous (next) words to be considered in adding attributes.
         */
        constructor(dictionary, windowSize) {
            super();
            this.dictionary = dictionary;
            this.windowSize = windowSize;
        }
        /**
         * Abstract function for adding attributes for empty words to the named entity recognition problem. The number of
         * attributes in this function should be equal to the number of attributes in the function
         * addAttributesForWords.
         * @param current Current classification instance
         * @param emptyWord String form to place for empty words.
         */
        addAttributesForEmptyWords(current, emptyWord) {
            let vectorizedWord = this.dictionary.getWord(emptyWord);
            if (vectorizedWord != null) {
                current.addVectorAttribute(vectorizedWord.getVector());
            }
        }
        /**
         * Abstract function for adding vectorized attributes to the named entity recognition problem. The number of
         * attributes in this function should be equal to the number of attributes in the function addAttributesForEmptyWords.
         * @param current Current classification instance
         * @param sentence Input sentence.
         * @param wordIndex The index of the word in the sentence.
         */
        addAttributesForWords(current, sentence, wordIndex) {
            let word = sentence.getWord(wordIndex);
            let vectorizedWord = this.dictionary.getWord(word.getName());
            if (vectorizedWord != null) {
                current.addVectorAttribute(vectorizedWord.getVector());
            }
        }
    }
    exports.VectorizedNerInstanceGenerator = VectorizedNerInstanceGenerator;
});
//# sourceMappingURL=VectorizedNerInstanceGenerator.js.map