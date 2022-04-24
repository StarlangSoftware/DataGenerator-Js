(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-annotatedtree/dist/TreeBankDrawable", "nlptoolkit-namedentityrecognition/dist/NERCorpus", "nlptoolkit-annotatedsentence/dist/ViewLayerType"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NERCorpusGenerator = void 0;
    const TreeBankDrawable_1 = require("nlptoolkit-annotatedtree/dist/TreeBankDrawable");
    const NERCorpus_1 = require("nlptoolkit-namedentityrecognition/dist/NERCorpus");
    const ViewLayerType_1 = require("nlptoolkit-annotatedsentence/dist/ViewLayerType");
    class NERCorpusGenerator {
        /**
         * Constructor for the NERCorpusGenerator which takes input the data directory and the pattern for the training files
         * included. The constructor loads the treebank from the given directory including the given files having the given
         * pattern.
         *
         * @param directory Directory where the treebank files reside.
         * @param pattern Pattern of the tree files to be included in the treebank. Use "." for all files.
         */
        constructor(directory, pattern) {
            this.treeBank = new TreeBankDrawable_1.TreeBankDrawable(directory, pattern);
        }
        /**
         * Creates a named entity recognition corpus from the treeBank. Calls generateAnnotatedSentence for each parse tree
         * in the treebank.
         *
         * @return Created corpus.
         */
        generate() {
            let corpus = new NERCorpus_1.NERCorpus();
            for (let i = 0; i < this.treeBank.size(); i++) {
                let parseTree = this.treeBank.get(i);
                if (parseTree.layerAll(ViewLayerType_1.ViewLayerType.NER)) {
                    let sentence = parseTree.generateAnnotatedSentence();
                    corpus.addSentence(sentence);
                }
            }
            return corpus;
        }
    }
    exports.NERCorpusGenerator = NERCorpusGenerator;
});
//# sourceMappingURL=NERCorpusGenerator.js.map