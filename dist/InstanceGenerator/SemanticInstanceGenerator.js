(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./SimpleWindowInstanceGenerator", "nlptoolkit-classification/dist/Instance/CompositeInstance"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SemanticInstanceGenerator = void 0;
    const SimpleWindowInstanceGenerator_1 = require("./SimpleWindowInstanceGenerator");
    const CompositeInstance_1 = require("nlptoolkit-classification/dist/Instance/CompositeInstance");
    class SemanticInstanceGenerator extends SimpleWindowInstanceGenerator_1.SimpleWindowInstanceGenerator {
        /**
         * Constructor for the semantic instance generator. Takes morphological analyzer and wordnet as input to set the
         * corresponding variables.
         * @param fsm Morphological analyzer to be used.
         * @param wordNet Wordnet to be used.
         */
        constructor(fsm, wordNet) {
            super();
            this.fsm = fsm;
            this.wordNet = wordNet;
        }
        /**
         * Generates a single classification instance of the WSD problem for the given word of the given sentence. If the
         * word has not been labeled with sense tag yet, the method returns null. In the WSD problem, the system also
         * generates and stores all possible sense labels for the current instance. In this case, a classification
         * instance will not have all labels in the dataset, but some subset of it.
         * @param sentence Input sentence.
         * @param wordIndex The index of the word in the sentence.
         * @return Classification instance.
         */
        generateInstanceFromSentence(sentence, wordIndex) {
            let possibleSynSets = sentence.constructSynSets(this.wordNet, this.fsm, wordIndex);
            let word = sentence.getWord(wordIndex);
            let classLabel = word.getSemantic();
            if (classLabel == undefined || possibleSynSets.length == 0) {
                return undefined;
            }
            let current = new CompositeInstance_1.CompositeInstance(classLabel);
            let possibleClassLabels = new Array();
            for (let synSet of possibleSynSets) {
                possibleClassLabels.push(synSet.getId());
            }
            current.setPossibleClassLabels(possibleClassLabels);
            this.addAttributes(current, sentence, wordIndex);
            return current;
        }
    }
    exports.SemanticInstanceGenerator = SemanticInstanceGenerator;
});
//# sourceMappingURL=SemanticInstanceGenerator.js.map