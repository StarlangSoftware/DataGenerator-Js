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
    exports.RootWordDataSetGenerator = void 0;
    const DataSetGenerator_1 = require("./DataSetGenerator");
    class RootWordDataSetGenerator extends DataSetGenerator_1.DataSetGenerator {
        /**
         * Constructor for the RootWordDataSetGenerator which takes input the data directory, the pattern for the training files
         * included, includepunctuation, and an instanceGenerator. The constructor calls its super class with these inputs.
         * @param directory Directory where the treebank files reside.
         * @param pattern Pattern of the tree files to be included in the treebank. Use "." for all files.
         * @param includePunctuation If true, punctuation symbols are also included in the dataset, false otherwise.
         * @param rootWordInstanceGenerator The instance generator used to generate the dataset.
         */
        constructor(directory, pattern, includePunctuation, rootWordInstanceGenerator) {
            super(directory, pattern, includePunctuation, rootWordInstanceGenerator);
        }
    }
    exports.RootWordDataSetGenerator = RootWordDataSetGenerator;
});
//# sourceMappingURL=RootWordDataSetGenerator.js.map