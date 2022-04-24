(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-annotatedsentence/dist/AnnotatedCorpus", "nlptoolkit-morphologicalanalysis/dist/Corpus/DisambiguationCorpus", "nlptoolkit-annotatedsentence/dist/AnnotatedSentence", "nlptoolkit-morphologicalanalysis/dist/Corpus/DisambiguatedWord"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SentenceDisambiguationCorpusGenerator = void 0;
    const AnnotatedCorpus_1 = require("nlptoolkit-annotatedsentence/dist/AnnotatedCorpus");
    const DisambiguationCorpus_1 = require("nlptoolkit-morphologicalanalysis/dist/Corpus/DisambiguationCorpus");
    const AnnotatedSentence_1 = require("nlptoolkit-annotatedsentence/dist/AnnotatedSentence");
    const DisambiguatedWord_1 = require("nlptoolkit-morphologicalanalysis/dist/Corpus/DisambiguatedWord");
    class SentenceDisambiguationCorpusGenerator {
        /**
         * Constructor for the SentenceDisambiguationCorpusGenerator which takes input the data directory and the pattern for the
         * training files included. The constructor loads the corpus from the given directory including the given files
         * having the given pattern.
         *
         * @param folder Directory where the sentence files reside.
         * @param pattern Pattern of the sentence files to be included in the corpus. Use "." for all files.
         */
        constructor(folder, pattern) {
            this.annotatedCorpus = new AnnotatedCorpus_1.AnnotatedCorpus(folder, pattern);
        }
        /**
         * Creates a morphological disambiguation corpus from the corpus.
         *
         * @return Created disambiguation corpus.
         */
        generate() {
            let corpus = new DisambiguationCorpus_1.DisambiguationCorpus();
            for (let i = 0; i < this.annotatedCorpus.sentenceCount(); i++) {
                let sentence = this.annotatedCorpus.getSentence(i);
                let disambiguationSentence = new AnnotatedSentence_1.AnnotatedSentence();
                for (let j = 0; j < sentence.wordCount(); j++) {
                    disambiguationSentence.addWord(new DisambiguatedWord_1.DisambiguatedWord(sentence.getWord(j).getName(), sentence.getWord(j).getParse()));
                }
                corpus.addSentence(disambiguationSentence);
            }
            return corpus;
        }
    }
    exports.SentenceDisambiguationCorpusGenerator = SentenceDisambiguationCorpusGenerator;
});
//# sourceMappingURL=SentenceDisambiguationCorpusGenerator.js.map