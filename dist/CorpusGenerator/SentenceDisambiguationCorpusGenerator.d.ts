import { DisambiguationCorpus } from "nlptoolkit-morphologicalanalysis/dist/Corpus/DisambiguationCorpus";
export declare class SentenceDisambiguationCorpusGenerator {
    private annotatedCorpus;
    /**
     * Constructor for the SentenceDisambiguationCorpusGenerator which takes input the data directory and the pattern for the
     * training files included. The constructor loads the corpus from the given directory including the given files
     * having the given pattern.
     *
     * @param folder Directory where the sentence files reside.
     * @param pattern Pattern of the sentence files to be included in the corpus. Use "." for all files.
     */
    constructor(folder: string, pattern: string);
    /**
     * Creates a morphological disambiguation corpus from the corpus.
     *
     * @return Created disambiguation corpus.
     */
    generate(): DisambiguationCorpus;
}
