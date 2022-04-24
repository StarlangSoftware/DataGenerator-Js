(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./DataSetGenerator"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DisambiguationDataSetGenerator = void 0;
    const DataSetGenerator_1 = require("./DataSetGenerator");
    class DisambiguationDataSetGenerator extends DataSetGenerator_1.DataSetGenerator {
        /**
         * Constructor for the DisambiguationDataSetGenerator which takes input the data directory, the pattern for the training files
         * included, includepunctuation, and an instanceGenerator. The constructor calls its super class with these inputs.
         * @param directory Directory where the treebank files reside.
         * @param pattern Pattern of the tree files to be included in the treebank. Use "." for all files.
         * @param includePunctuation If true, punctuation symbols are also included in the dataset, false otherwise.
         * @param disambiguationInstanceGenerator The instance generator used to generate the dataset.
         */
        constructor(directory, pattern, includePunctuation, disambiguationInstanceGenerator) {
            super(directory, pattern, includePunctuation, disambiguationInstanceGenerator);
        }
    }
    exports.DisambiguationDataSetGenerator = DisambiguationDataSetGenerator;
});
//# sourceMappingURL=DisambiguationDataSetGenerator.js.map