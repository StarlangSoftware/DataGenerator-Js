import {AnnotatedCorpus} from "nlptoolkit-annotatedsentence/dist/AnnotatedCorpus";
import {DisambiguationCorpus} from "nlptoolkit-morphologicalanalysis/dist/Corpus/DisambiguationCorpus";
import {AnnotatedSentence} from "nlptoolkit-annotatedsentence/dist/AnnotatedSentence";
import {DisambiguatedWord} from "nlptoolkit-morphologicalanalysis/dist/Corpus/DisambiguatedWord";
import {AnnotatedWord} from "nlptoolkit-annotatedsentence/dist/AnnotatedWord";

export class SentenceDisambiguationCorpusGenerator {

    private annotatedCorpus: AnnotatedCorpus

    /**
     * Constructor for the SentenceDisambiguationCorpusGenerator which takes input the data directory and the pattern for the
     * training files included. The constructor loads the corpus from the given directory including the given files
     * having the given pattern.
     *
     * @param folder Directory where the sentence files reside.
     * @param pattern Pattern of the sentence files to be included in the corpus. Use "." for all files.
     */
    constructor(folder: string, pattern: string) {
        this.annotatedCorpus = new AnnotatedCorpus(folder, pattern)
    }

    /**
     * Creates a morphological disambiguation corpus from the corpus.
     *
     * @return Created disambiguation corpus.
     */
    public generate(): DisambiguationCorpus{
        let corpus = new DisambiguationCorpus();
        for (let i = 0; i < this.annotatedCorpus.sentenceCount(); i++){
            let sentence = this.annotatedCorpus.getSentence(i) as AnnotatedSentence
            let disambiguationSentence = new AnnotatedSentence()
            for (let j = 0; j < sentence.wordCount(); j++){
                disambiguationSentence.addWord(new DisambiguatedWord(sentence.getWord(j).getName(),
                    (sentence.getWord(j) as AnnotatedWord).getParse()))
            }
            corpus.addSentence(disambiguationSentence)
        }
        return corpus
    }
}