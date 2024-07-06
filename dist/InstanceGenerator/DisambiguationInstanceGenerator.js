(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./InstanceGenerator", "nlptoolkit-classification/dist/Instance/Instance"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DisambiguationInstanceGenerator = void 0;
    const InstanceGenerator_1 = require("./InstanceGenerator");
    const Instance_1 = require("nlptoolkit-classification/dist/Instance/Instance");
    class DisambiguationInstanceGenerator extends InstanceGenerator_1.InstanceGenerator {
        /**
         * Generates a single classification instance of the morphological disambiguation problem for the given word of the
         * given sentence. If the word does not have a morphological parse, the method throws InstanceNotGenerated.
         * @param sentence Input sentence.
         * @param wordIndex The index of the word in the sentence.
         * @return Classification instance.
         */
        generateInstanceFromSentence(sentence, wordIndex) {
            let word = sentence.getWord(wordIndex);
            let current = new Instance_1.Instance(word.getParse().getMorphologicalParseTransitionList());
            for (let i = 0; i < this.windowSize; i++) {
                if (wordIndex - this.windowSize + i >= 0) {
                    this.addAttributesForPreviousWords(current, sentence, wordIndex - this.windowSize + i);
                }
                else {
                    this.addAttributesForEmptyWords(current, "<s>");
                }
            }
            this.addAttributesForPreviousWords(current, sentence, wordIndex);
            return current;
        }
    }
    exports.DisambiguationInstanceGenerator = DisambiguationInstanceGenerator;
});
//# sourceMappingURL=DisambiguationInstanceGenerator.js.map