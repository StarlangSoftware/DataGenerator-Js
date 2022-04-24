(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Attribute/IsNumberAttribute", "../Attribute/IsOrganizationAttribute", "../Attribute/IsMoneyAttribute", "../Attribute/MainPosAttribute", "../Attribute/Predicate", "../Attribute/LastIGContainsTagInstrumentalAttribute", "../Attribute/LastIGContainsTagGenitiveAttribute", "../Attribute/LastIGContainsTagAccusativeAttribute", "../Attribute/LastIGContainsTagAblativeAttribute", "../Attribute/LastIGContainsPossessiveAttribute", "../Attribute/IsTimeAttribute", "../Attribute/IsRealAttribute", "../Attribute/IsProperNounAttribute", "../Attribute/IsAdjectiveAttribute", "../Attribute/IsAuxiliaryVerbAttribute", "../Attribute/IsCapitalAttribute", "../Attribute/IsDateAttribute", "../Attribute/IsFractionAttribute", "../Attribute/IsHonorificAttribute", "../Attribute/RootPosAttribute", "../Attribute/RootFormAttribute", "../Attribute/CaseAttribute", "nlptoolkit-classification/dist/Attribute/BinaryAttribute", "nlptoolkit-classification/dist/Attribute/DiscreteAttribute", "./SemanticInstanceGenerator"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FeaturedSemanticInstanceGenerator = void 0;
    const IsNumberAttribute_1 = require("../Attribute/IsNumberAttribute");
    const IsOrganizationAttribute_1 = require("../Attribute/IsOrganizationAttribute");
    const IsMoneyAttribute_1 = require("../Attribute/IsMoneyAttribute");
    const MainPosAttribute_1 = require("../Attribute/MainPosAttribute");
    const Predicate_1 = require("../Attribute/Predicate");
    const LastIGContainsTagInstrumentalAttribute_1 = require("../Attribute/LastIGContainsTagInstrumentalAttribute");
    const LastIGContainsTagGenitiveAttribute_1 = require("../Attribute/LastIGContainsTagGenitiveAttribute");
    const LastIGContainsTagAccusativeAttribute_1 = require("../Attribute/LastIGContainsTagAccusativeAttribute");
    const LastIGContainsTagAblativeAttribute_1 = require("../Attribute/LastIGContainsTagAblativeAttribute");
    const LastIGContainsPossessiveAttribute_1 = require("../Attribute/LastIGContainsPossessiveAttribute");
    const IsTimeAttribute_1 = require("../Attribute/IsTimeAttribute");
    const IsRealAttribute_1 = require("../Attribute/IsRealAttribute");
    const IsProperNounAttribute_1 = require("../Attribute/IsProperNounAttribute");
    const IsAdjectiveAttribute_1 = require("../Attribute/IsAdjectiveAttribute");
    const IsAuxiliaryVerbAttribute_1 = require("../Attribute/IsAuxiliaryVerbAttribute");
    const IsCapitalAttribute_1 = require("../Attribute/IsCapitalAttribute");
    const IsDateAttribute_1 = require("../Attribute/IsDateAttribute");
    const IsFractionAttribute_1 = require("../Attribute/IsFractionAttribute");
    const IsHonorificAttribute_1 = require("../Attribute/IsHonorificAttribute");
    const RootPosAttribute_1 = require("../Attribute/RootPosAttribute");
    const RootFormAttribute_1 = require("../Attribute/RootFormAttribute");
    const CaseAttribute_1 = require("../Attribute/CaseAttribute");
    const BinaryAttribute_1 = require("nlptoolkit-classification/dist/Attribute/BinaryAttribute");
    const DiscreteAttribute_1 = require("nlptoolkit-classification/dist/Attribute/DiscreteAttribute");
    const SemanticInstanceGenerator_1 = require("./SemanticInstanceGenerator");
    class FeaturedSemanticInstanceGenerator extends SemanticInstanceGenerator_1.SemanticInstanceGenerator {
        /**
         * Constructor method. Gets input window size and sets the corresponding variable.
         * @param fsm Morphological analyzer to be used.
         * @param wordNet Wordnet to be used.
         * @param windowSize Number of previous (next) words to be considered in adding attributes.
         */
        constructor(fsm, wordNet, windowSize) {
            super(fsm, wordNet);
            this.windowSize = windowSize;
        }
        /**
         * Abstract function for adding attributes for empty words to the word sense disambiguation problem. The number of
         * attributes in this function should be equal to the number of attributes in the function
         * addAttributesForWords.
         * @param current Current classification instance
         * @param emptyWord String form to place for empty words.
         */
        addAttributesForEmptyWords(current, emptyWord) {
            current.addAttribute(new BinaryAttribute_1.BinaryAttribute(false));
            current.addAttribute(new BinaryAttribute_1.BinaryAttribute(false));
            current.addAttribute(new BinaryAttribute_1.BinaryAttribute(false));
            current.addAttribute(new BinaryAttribute_1.BinaryAttribute(false));
            current.addAttribute(new BinaryAttribute_1.BinaryAttribute(false));
            current.addAttribute(new BinaryAttribute_1.BinaryAttribute(false));
            current.addAttribute(new BinaryAttribute_1.BinaryAttribute(false));
            current.addAttribute(new BinaryAttribute_1.BinaryAttribute(false));
            current.addAttribute(new BinaryAttribute_1.BinaryAttribute(false));
            current.addAttribute(new BinaryAttribute_1.BinaryAttribute(false));
            current.addAttribute(new BinaryAttribute_1.BinaryAttribute(false));
            current.addAttribute(new BinaryAttribute_1.BinaryAttribute(false));
            current.addAttribute(new BinaryAttribute_1.BinaryAttribute(false));
            current.addAttribute(new BinaryAttribute_1.BinaryAttribute(false));
            current.addAttribute(new BinaryAttribute_1.BinaryAttribute(false));
            current.addAttribute(new BinaryAttribute_1.BinaryAttribute(false));
            current.addAttribute(new BinaryAttribute_1.BinaryAttribute(false));
            current.addAttribute(new DiscreteAttribute_1.DiscreteAttribute("NULL"));
            current.addAttribute(new DiscreteAttribute_1.DiscreteAttribute("NULL"));
            current.addAttribute(new DiscreteAttribute_1.DiscreteAttribute("NULL"));
            current.addAttribute(new DiscreteAttribute_1.DiscreteAttribute("NULL"));
            current.addAttribute(new DiscreteAttribute_1.DiscreteAttribute("NULL"));
        }
        /**
         * Abstract function for adding attributes to the word sense disambiguation problem. Depending on your design
         * you can add as many attributes as possible. The number of attributes in this function should be equal to the
         * number of attributes in the function addAttributesForEmptyWords.
         * @param current Current classification instance
         * @param sentence Input sentence.
         * @param wordIndex The index of the word in the sentence.
         */
        addAttributesForWords(current, sentence, wordIndex) {
            let word = sentence.getWord(wordIndex);
            let parse = word.getParse();
            current.addAttribute(new IsAdjectiveAttribute_1.IsAdjectiveAttribute(parse));
            current.addAttribute(new IsAuxiliaryVerbAttribute_1.IsAuxiliaryVerbAttribute(parse));
            current.addAttribute(new IsCapitalAttribute_1.IsCapitalAttribute(word.getName()));
            current.addAttribute(new IsDateAttribute_1.IsDateAttribute(parse));
            current.addAttribute(new IsFractionAttribute_1.IsFractionAttribute(parse));
            current.addAttribute(new IsHonorificAttribute_1.IsHonorificAttribute(word.getName()));
            current.addAttribute(new IsMoneyAttribute_1.IsMoneyAttribute(word.getName()));
            current.addAttribute(new IsNumberAttribute_1.IsNumberAttribute(parse));
            current.addAttribute(new IsOrganizationAttribute_1.IsOrganizationAttribute(word.getName()));
            current.addAttribute(new IsProperNounAttribute_1.IsProperNounAttribute(parse));
            current.addAttribute(new IsRealAttribute_1.IsRealAttribute(parse));
            current.addAttribute(new IsTimeAttribute_1.IsTimeAttribute(word.getName()));
            current.addAttribute(new LastIGContainsPossessiveAttribute_1.LastIGContainsPossessiveAttribute(parse));
            current.addAttribute(new LastIGContainsTagAblativeAttribute_1.LastIGContainsTagAblativeAttribute(parse));
            current.addAttribute(new LastIGContainsTagAccusativeAttribute_1.LastIGContainsTagAccusativeAttribute(parse));
            current.addAttribute(new LastIGContainsTagGenitiveAttribute_1.LastIGContainsTagGenitiveAttribute(parse));
            current.addAttribute(new LastIGContainsTagInstrumentalAttribute_1.LastIGContainsTagInstrumentalAttribute(parse));
            current.addAttribute(new MainPosAttribute_1.MainPosAttribute(parse));
            current.addAttribute(new Predicate_1.Predicate(sentence, wordIndex));
            current.addAttribute(new RootPosAttribute_1.RootPosAttribute(parse));
            current.addAttribute(new RootFormAttribute_1.RootFormAttribute(parse));
            current.addAttribute(new CaseAttribute_1.CaseAttribute(parse));
        }
    }
    exports.FeaturedSemanticInstanceGenerator = FeaturedSemanticInstanceGenerator;
});
//# sourceMappingURL=FeaturedSemanticInstanceGenerator.js.map