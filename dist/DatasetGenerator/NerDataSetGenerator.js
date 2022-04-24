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
    exports.NerDataSetGenerator = void 0;
    const DataSetGenerator_1 = require("./DataSetGenerator");
    class NerDataSetGenerator extends DataSetGenerator_1.DataSetGenerator {
        /**
         * Constructor for the NerDataSetGenerator which takes input the data directory, the pattern for the training files
         * included, and an instanceGenerator. The constructor calls its super class with these inputs.
         * @param directory Directory where the treebank files reside.
         * @param pattern Pattern of the tree files to be included in the treebank. Use "." for all files.
         * @param nerInstanceGenerator The instance generator used to generate the dataset.
         */
        constructor(directory, pattern, nerInstanceGenerator) {
            super(directory, pattern, true, nerInstanceGenerator);
        }
    }
    exports.NerDataSetGenerator = NerDataSetGenerator;
});
//# sourceMappingURL=NerDataSetGenerator.js.map