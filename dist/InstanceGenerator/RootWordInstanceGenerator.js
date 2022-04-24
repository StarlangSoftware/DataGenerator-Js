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
    exports.RootWordInstanceGenerator = void 0;
    const InstanceGenerator_1 = require("./InstanceGenerator");
    const Instance_1 = require("nlptoolkit-classification/dist/Instance/Instance");
    class RootWordInstanceGenerator extends InstanceGenerator_1.InstanceGenerator {
        generateInstanceFromSentence(sentence, wordIndex) {
            let word = sentence.getWord(wordIndex);
            let current = new Instance_1.Instance(word.getParse().getWord().getName());
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
    exports.RootWordInstanceGenerator = RootWordInstanceGenerator;
});
//# sourceMappingURL=RootWordInstanceGenerator.js.map