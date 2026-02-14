var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Attribute/CaseAttribute", "./Attribute/IsAdjectiveAttribute", "./Attribute/IsAuxiliaryVerbAttribute", "./Attribute/IsCapitalAttribute", "./Attribute/IsDateAttribute", "./Attribute/IsFractionAttribute", "./Attribute/IsHonorificAttribute", "./Attribute/IsLocationGazetteer", "./Attribute/IsMoneyAttribute", "./Attribute/IsNumberAttribute", "./Attribute/IsOrganizationAttribute", "./Attribute/IsOrganizationGazetteer", "./Attribute/IsPersonGazetteer", "./Attribute/IsProperNounAttribute", "./Attribute/IsRealAttribute", "./Attribute/IsTimeAttribute", "./Attribute/LastIGContainsPossessiveAttribute", "./Attribute/LastIGContainsTagAttribute", "./Attribute/LastIGContainsTagAblativeAttribute", "./Attribute/LastIGContainsTagAccusativeAttribute", "./Attribute/LastIGContainsTagGenitiveAttribute", "./Attribute/LastIGContainsTagInstrumentalAttribute", "./Attribute/MainPosAttribute", "./Attribute/Predicate", "./Attribute/RootFormAttribute", "./Attribute/RootPosAttribute", "./Attribute/SurfaceFormAttribute", "./CorpusGenerator/NERCorpusGenerator", "./CorpusGenerator/SentenceDisambiguationCorpusGenerator", "./CorpusGenerator/TreeDisambiguationCorpusGenerator", "./DatasetGenerator/AnnotatedDataSetGenerator", "./DatasetGenerator/DataSetGenerator", "./DatasetGenerator/DisambiguationDataSetGenerator", "./DatasetGenerator/NerDataSetGenerator", "./DatasetGenerator/RootWordDataSetGenerator", "./DatasetGenerator/SemanticDataSetGenerator", "./InstanceGenerator/DisambiguationInstanceGenerator", "./InstanceGenerator/FeaturedDisambiguationInstanceGenerator", "./InstanceGenerator/FeaturedNerInstanceGenerator", "./InstanceGenerator/FeaturedRootWordInstanceGenerator", "./InstanceGenerator/FeaturedSemanticInstanceGenerator", "./InstanceGenerator/FeaturedShallowParseInstanceGenerator", "./InstanceGenerator/InstanceGenerator", "./InstanceGenerator/NerInstanceGenerator", "./InstanceGenerator/RootWordInstanceGenerator", "./InstanceGenerator/SemanticInstanceGenerator", "./InstanceGenerator/ShallowParseInstanceGenerator", "./InstanceGenerator/SimpleWindowInstanceGenerator", "./InstanceGenerator/VectorizedNerInstanceGenerator", "./InstanceGenerator/VectorizedSemanticInstanceGenerator", "./InstanceGenerator/VectorizedShallowParseInstanceGenerator"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require("./Attribute/CaseAttribute"), exports);
    __exportStar(require("./Attribute/IsAdjectiveAttribute"), exports);
    __exportStar(require("./Attribute/IsAuxiliaryVerbAttribute"), exports);
    __exportStar(require("./Attribute/IsCapitalAttribute"), exports);
    __exportStar(require("./Attribute/IsDateAttribute"), exports);
    __exportStar(require("./Attribute/IsFractionAttribute"), exports);
    __exportStar(require("./Attribute/IsHonorificAttribute"), exports);
    __exportStar(require("./Attribute/IsLocationGazetteer"), exports);
    __exportStar(require("./Attribute/IsMoneyAttribute"), exports);
    __exportStar(require("./Attribute/IsNumberAttribute"), exports);
    __exportStar(require("./Attribute/IsOrganizationAttribute"), exports);
    __exportStar(require("./Attribute/IsOrganizationGazetteer"), exports);
    __exportStar(require("./Attribute/IsPersonGazetteer"), exports);
    __exportStar(require("./Attribute/IsProperNounAttribute"), exports);
    __exportStar(require("./Attribute/IsRealAttribute"), exports);
    __exportStar(require("./Attribute/IsTimeAttribute"), exports);
    __exportStar(require("./Attribute/LastIGContainsPossessiveAttribute"), exports);
    __exportStar(require("./Attribute/LastIGContainsTagAttribute"), exports);
    __exportStar(require("./Attribute/LastIGContainsTagAblativeAttribute"), exports);
    __exportStar(require("./Attribute/LastIGContainsTagAccusativeAttribute"), exports);
    __exportStar(require("./Attribute/LastIGContainsTagGenitiveAttribute"), exports);
    __exportStar(require("./Attribute/LastIGContainsTagInstrumentalAttribute"), exports);
    __exportStar(require("./Attribute/MainPosAttribute"), exports);
    __exportStar(require("./Attribute/Predicate"), exports);
    __exportStar(require("./Attribute/RootFormAttribute"), exports);
    __exportStar(require("./Attribute/RootPosAttribute"), exports);
    __exportStar(require("./Attribute/SurfaceFormAttribute"), exports);
    __exportStar(require("./CorpusGenerator/NERCorpusGenerator"), exports);
    __exportStar(require("./CorpusGenerator/SentenceDisambiguationCorpusGenerator"), exports);
    __exportStar(require("./CorpusGenerator/TreeDisambiguationCorpusGenerator"), exports);
    __exportStar(require("./DatasetGenerator/AnnotatedDataSetGenerator"), exports);
    __exportStar(require("./DatasetGenerator/DataSetGenerator"), exports);
    __exportStar(require("./DatasetGenerator/DisambiguationDataSetGenerator"), exports);
    __exportStar(require("./DatasetGenerator/NerDataSetGenerator"), exports);
    __exportStar(require("./DatasetGenerator/RootWordDataSetGenerator"), exports);
    __exportStar(require("./DatasetGenerator/SemanticDataSetGenerator"), exports);
    __exportStar(require("./InstanceGenerator/DisambiguationInstanceGenerator"), exports);
    __exportStar(require("./InstanceGenerator/FeaturedDisambiguationInstanceGenerator"), exports);
    __exportStar(require("./InstanceGenerator/FeaturedNerInstanceGenerator"), exports);
    __exportStar(require("./InstanceGenerator/FeaturedRootWordInstanceGenerator"), exports);
    __exportStar(require("./InstanceGenerator/FeaturedSemanticInstanceGenerator"), exports);
    __exportStar(require("./InstanceGenerator/FeaturedShallowParseInstanceGenerator"), exports);
    __exportStar(require("./InstanceGenerator/InstanceGenerator"), exports);
    __exportStar(require("./InstanceGenerator/NerInstanceGenerator"), exports);
    __exportStar(require("./InstanceGenerator/RootWordInstanceGenerator"), exports);
    __exportStar(require("./InstanceGenerator/SemanticInstanceGenerator"), exports);
    __exportStar(require("./InstanceGenerator/ShallowParseInstanceGenerator"), exports);
    __exportStar(require("./InstanceGenerator/SimpleWindowInstanceGenerator"), exports);
    __exportStar(require("./InstanceGenerator/VectorizedNerInstanceGenerator"), exports);
    __exportStar(require("./InstanceGenerator/VectorizedSemanticInstanceGenerator"), exports);
    __exportStar(require("./InstanceGenerator/VectorizedShallowParseInstanceGenerator"), exports);
});
//# sourceMappingURL=index.js.map