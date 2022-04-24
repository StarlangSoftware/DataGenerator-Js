(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-annotatedsentence/dist/AnnotatedCorpus", "nlptoolkit-classification/dist/DataSet/DataSet"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AnnotatedDataSetGenerator = void 0;
    const AnnotatedCorpus_1 = require("nlptoolkit-annotatedsentence/dist/AnnotatedCorpus");
    const DataSet_1 = require("nlptoolkit-classification/dist/DataSet/DataSet");
    class AnnotatedDataSetGenerator {
        /**
         * Constructor for the AnnotatedDataSetGenerator which takes input the data directory, the pattern for the
         * training files included, and an instanceGenerator. The constructor loads the sentence corpus from the given
         * directory including the given files having the given pattern.
         * @param directory Directory where the corpus files reside.
         * @param pattern Pattern of the tree files to be included in the treebank. Use "." for all files.
         * @param instanceGenerator The instance generator used to generate the dataset.
         */
        constructor(directory, pattern, instanceGenerator) {
            this.corpus = new AnnotatedCorpus_1.AnnotatedCorpus(directory, pattern);
            this.instanceGenerator = instanceGenerator;
        }
        /**
         * Mutator for the instanceGenerator attribute.
         * @param instanceGenerator Input instanceGenerator
         */
        setInstanceGenerator(instanceGenerator) {
            this.instanceGenerator = instanceGenerator;
        }
        /**
         * Creates a dataset from the corpus. Calls generateInstanceFromSentence for each parse sentence in the corpus.
         * @return Created dataset.
         */
        generate() {
            let dataSet = new DataSet_1.DataSet();
            for (let i = 0; i < this.corpus.sentenceCount(); i++) {
                let sentence = this.corpus.getSentence(i);
                for (let j = 0; j < sentence.wordCount(); j++) {
                    let generatedInstance = this.instanceGenerator.generateInstanceFromSentence(sentence, j);
                    if (generatedInstance != undefined) {
                        dataSet.addInstance(generatedInstance);
                    }
                }
            }
            return dataSet;
        }
    }
    exports.AnnotatedDataSetGenerator = AnnotatedDataSetGenerator;
});
//# sourceMappingURL=AnnotatedDataSetGenerator.js.map