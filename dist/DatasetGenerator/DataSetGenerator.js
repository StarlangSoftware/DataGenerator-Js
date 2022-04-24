(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-annotatedtree/dist/TreeBankDrawable", "nlptoolkit-classification/dist/DataSet/DataSet"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DataSetGenerator = void 0;
    const TreeBankDrawable_1 = require("nlptoolkit-annotatedtree/dist/TreeBankDrawable");
    const DataSet_1 = require("nlptoolkit-classification/dist/DataSet/DataSet");
    class DataSetGenerator {
        /**
         * Constructor for the DataSetGenerator which takes input the data directory, the pattern for the training files
         * included, includepunctuation, and an instanceGenerator. The constructor loads the treebank from the given directory
         * including the given files having the given pattern. If punctuations are not included, they are removed from
         * the data.
         * @param directory Directory where the treebank files reside.
         * @param pattern Pattern of the tree files to be included in the treebank. Use "." for all files.
         * @param includePunctuation If true, punctuation symbols are also included in the dataset, false otherwise.
         * @param instanceGenerator The instance generator used to generate the dataset.
         */
        constructor(directory, pattern, includePunctuation, instanceGenerator) {
            this.treeBank = new TreeBankDrawable_1.TreeBankDrawable(directory, pattern);
            this.instanceGenerator = instanceGenerator;
            if (!includePunctuation) {
                this.treeBank.stripPunctuation();
            }
        }
        /**
         * The method generates a set of instances (an instance from each word in the tree) from a single tree. The method
         * calls the instanceGenerator for each word in the sentence.
         * @param parseTree Parsetree for which a set of instances will be created
         * @return An array of instances.
         */
        generateInstanceListFromTree(parseTree) {
            let instanceList = Array();
            let annotatedSentence = parseTree.generateAnnotatedSentence();
            for (let i = 0; i < annotatedSentence.wordCount(); i++) {
                let generatedInstance = this.instanceGenerator.generateInstanceFromSentence(annotatedSentence, i);
                if (generatedInstance != undefined) {
                    instanceList.push(generatedInstance);
                }
            }
            return instanceList;
        }
        /**
         * Mutator for the instanceGenerator attribute.
         * @param instanceGenerator Input instanceGenerator
         */
        setInstanceGenerator(instanceGenerator) {
            this.instanceGenerator = instanceGenerator;
        }
        /**
         * Creates a dataset from the treeBank. Calls generateInstanceListFromTree for each parse tree in the treebank.
         * @return Created dataset.
         */
        generate() {
            let dataSet = new DataSet_1.DataSet();
            for (let i = 0; i < this.treeBank.size(); i++) {
                let parseTree = this.treeBank.get(i);
                dataSet.addInstanceList(this.generateInstanceListFromTree(parseTree));
            }
            return dataSet;
        }
    }
    exports.DataSetGenerator = DataSetGenerator;
});
//# sourceMappingURL=DataSetGenerator.js.map