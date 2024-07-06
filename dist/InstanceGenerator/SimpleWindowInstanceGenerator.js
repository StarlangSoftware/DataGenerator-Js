(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./InstanceGenerator"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SimpleWindowInstanceGenerator = void 0;
    const InstanceGenerator_1 = require("./InstanceGenerator");
    class SimpleWindowInstanceGenerator extends InstanceGenerator_1.InstanceGenerator {
        /**
         * addAttributes adds all attributes of the previous words, the current wordn, and next words of the given word
         * to the given instance. If the previous or next words does not exists, the method calls
         * addAttributesForEmptyWords method. If the word does not exists in the dictionary or the required annotation layer
         * does not exists in the annotated word, the method throws InstanceNotGenerated. The window size determines the
         * number of previous and next words.
         * @param current Current classification instance to which attributes will be added.
         * @param sentence Input sentence.
         * @param wordIndex The index of the word in the sentence.
         * @throws InstanceNotGenerated If attributes can not be added, throws InstanceNotGenerated.
         */
        addAttributes(current, sentence, wordIndex) {
            for (let i = 0; i < this.windowSize; i++) {
                if (wordIndex - this.windowSize + i >= 0) {
                    this.addAttributesForWords(current, sentence, wordIndex);
                }
                else {
                    this.addAttributesForEmptyWords(current, "<s>");
                }
            }
            this.addAttributesForWords(current, sentence, wordIndex);
            for (let i = 0; i < this.windowSize; i++) {
                if (wordIndex + i + 1 < sentence.wordCount()) {
                    this.addAttributesForWords(current, sentence, wordIndex + i + 1);
                }
                else {
                    this.addAttributesForEmptyWords(current, "<s>");
                }
            }
        }
    }
    exports.SimpleWindowInstanceGenerator = SimpleWindowInstanceGenerator;
});
//# sourceMappingURL=SimpleWindowInstanceGenerator.js.map