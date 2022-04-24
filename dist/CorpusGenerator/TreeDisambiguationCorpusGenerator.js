(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-annotatedtree/dist/TreeBankDrawable", "nlptoolkit-morphologicalanalysis/dist/Corpus/DisambiguationCorpus", "nlptoolkit-annotatedsentence/dist/ViewLayerType", "nlptoolkit-annotatedsentence/dist/AnnotatedSentence", "nlptoolkit-morphologicalanalysis/dist/Corpus/DisambiguatedWord"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TreeDisambiguationCorpusGenerator = void 0;
    const TreeBankDrawable_1 = require("nlptoolkit-annotatedtree/dist/TreeBankDrawable");
    const DisambiguationCorpus_1 = require("nlptoolkit-morphologicalanalysis/dist/Corpus/DisambiguationCorpus");
    const ViewLayerType_1 = require("nlptoolkit-annotatedsentence/dist/ViewLayerType");
    const AnnotatedSentence_1 = require("nlptoolkit-annotatedsentence/dist/AnnotatedSentence");
    const DisambiguatedWord_1 = require("nlptoolkit-morphologicalanalysis/dist/Corpus/DisambiguatedWord");
    class TreeDisambiguationCorpusGenerator {
        /**
         * Constructor for the DisambiguationCorpusGenerator which takes input the data directory and the pattern for the
         * training files included. The constructor loads the treebank from the given directory including the given files
         * having the given pattern.
         *
         * @param directory Directory where the treebank files reside.
         * @param pattern Pattern of the tree files to be included in the treebank. Use "." for all files.
         */
        constructor(directory, pattern) {
            this.treeBank = new TreeBankDrawable_1.TreeBankDrawable(directory, pattern);
        }
        /**
         * Creates a morphological disambiguation corpus from the treeBank. Calls generateAnnotatedSentence for each parse
         * tree in the treebank.
         *
         * @return Created disambiguation corpus.
         */
        generate() {
            let corpus = new DisambiguationCorpus_1.DisambiguationCorpus();
            for (let i = 0; i < this.treeBank.size(); i++) {
                let parseTree = this.treeBank.get(i);
                if (parseTree.layerAll(ViewLayerType_1.ViewLayerType.INFLECTIONAL_GROUP)) {
                    let sentence = parseTree.generateAnnotatedSentence();
                    let disambiguationSentence = new AnnotatedSentence_1.AnnotatedSentence();
                    for (let j = 0; j < sentence.wordCount(); j++) {
                        disambiguationSentence.addWord(new DisambiguatedWord_1.DisambiguatedWord(sentence.getWord(j).getName(), sentence.getWord(j).getParse()));
                    }
                    corpus.addSentence(disambiguationSentence);
                }
            }
            return corpus;
        }
    }
    exports.TreeDisambiguationCorpusGenerator = TreeDisambiguationCorpusGenerator;
});
//# sourceMappingURL=TreeDisambiguationCorpusGenerator.js.map