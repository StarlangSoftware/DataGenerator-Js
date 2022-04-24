(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./SemanticInstanceGenerator"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VectorizedSemanticInstanceGenerator = void 0;
    const SemanticInstanceGenerator_1 = require("./SemanticInstanceGenerator");
    class VectorizedSemanticInstanceGenerator extends SemanticInstanceGenerator_1.SemanticInstanceGenerator {
        /**
         * Constructor of VectorizedNerInstanceGenerator which takes input a {@link VectorizedDictionary}, a window size
         * and a word format and sets corresponding attributes with these inputs.
         * @param fsm Morphological analyzer used to create multi-word expressions.
         * @param wordNet WordNet for checking multii-word and single-word expressions.
         * @param dictionary Dictionary in the vector form. Each word is stored in vector form in this dictionary.
         * @param windowSize Number of previous (next) words to be considered in adding attributes.
         */
        constructor(fsm, wordNet, dictionary, windowSize) {
            super(fsm, wordNet);
            this.dictionary = dictionary;
            this.windowSize = windowSize;
        }
        /**
         * Abstract function for adding attributes for empty words to the word sense disambiguation  problem. The number of
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
         * Abstract function for adding vectorized attributes to the word sense disambiguation problem. The number of
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
    exports.VectorizedSemanticInstanceGenerator = VectorizedSemanticInstanceGenerator;
});
//# sourceMappingURL=VectorizedSemanticInstanceGenerator.js.map