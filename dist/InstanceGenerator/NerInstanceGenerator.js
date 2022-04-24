(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./SimpleWindowInstanceGenerator", "nlptoolkit-classification/dist/Instance/Instance", "nlptoolkit-namedentityrecognition/dist/NamedEntityTypeStatic"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NerInstanceGenerator = void 0;
    const SimpleWindowInstanceGenerator_1 = require("./SimpleWindowInstanceGenerator");
    const Instance_1 = require("nlptoolkit-classification/dist/Instance/Instance");
    const NamedEntityTypeStatic_1 = require("nlptoolkit-namedentityrecognition/dist/NamedEntityTypeStatic");
    class NerInstanceGenerator extends SimpleWindowInstanceGenerator_1.SimpleWindowInstanceGenerator {
        /**
         * Generates a single classification instance of the NER problem for the given word of the given sentence. If the
         * word has not been labeled with NER tag yet, the method returns null.
         * @param sentence Input sentence.
         * @param wordIndex The index of the word in the sentence.
         * @return Classification instance.
         */
        generateInstanceFromSentence(sentence, wordIndex) {
            let word = sentence.getWord(wordIndex);
            let classLabel = NamedEntityTypeStatic_1.NamedEntityTypeStatic.getNamedEntity(word.getNamedEntityType());
            if (classLabel == undefined) {
                return undefined;
            }
            let current = new Instance_1.Instance(classLabel);
            this.addAttributes(current, sentence, wordIndex);
            return current;
        }
    }
    exports.NerInstanceGenerator = NerInstanceGenerator;
});
//# sourceMappingURL=NerInstanceGenerator.js.map