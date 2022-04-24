(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-classification/dist/Attribute/BinaryAttribute", "nlptoolkit-namedentityrecognition/dist/Gazetteer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IsPersonGazetteer = void 0;
    const BinaryAttribute_1 = require("nlptoolkit-classification/dist/Attribute/BinaryAttribute");
    const Gazetteer_1 = require("nlptoolkit-namedentityrecognition/dist/Gazetteer");
    class IsPersonGazetteer extends BinaryAttribute_1.BinaryAttribute {
        /**
         * Binary attribute for a given word. If the word is listed in the Person Gazetteer file, the attribute will
         * have the value "true", otherwise "false".
         * @param surfaceForm Surface form of the word.
         */
        constructor(surfaceForm) {
            super(IsPersonGazetteer.gazetteer.contains(surfaceForm));
        }
    }
    exports.IsPersonGazetteer = IsPersonGazetteer;
    IsPersonGazetteer.gazetteer = new Gazetteer_1.Gazetteer("PERSON", "gazetteer-person.txt");
});
//# sourceMappingURL=IsPersonGazetteer.js.map