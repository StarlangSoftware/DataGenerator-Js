(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./SimpleWindowInstanceGenerator", "nlptoolkit-classification/dist/Instance/Instance"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ShallowParseInstanceGenerator = void 0;
    const SimpleWindowInstanceGenerator_1 = require("./SimpleWindowInstanceGenerator");
    const Instance_1 = require("nlptoolkit-classification/dist/Instance/Instance");
    class ShallowParseInstanceGenerator extends SimpleWindowInstanceGenerator_1.SimpleWindowInstanceGenerator {
        generateInstanceFromSentence(sentence, wordIndex) {
            let word = sentence.getWord(wordIndex);
            let classLabel = word.getShallowParse();
            if (classLabel == undefined) {
                return undefined;
            }
            let current = new Instance_1.Instance(classLabel);
            this.addAttributes(current, sentence, wordIndex);
            return current;
        }
    }
    exports.ShallowParseInstanceGenerator = ShallowParseInstanceGenerator;
});
//# sourceMappingURL=ShallowParseInstanceGenerator.js.map