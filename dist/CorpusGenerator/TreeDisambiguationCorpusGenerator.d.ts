import { DisambiguationCorpus } from "nlptoolkit-morphologicalanalysis/dist/Corpus/DisambiguationCorpus";
export declare class TreeDisambiguationCorpusGenerator {
    private treeBank;
    /**
     * Constructor for the DisambiguationCorpusGenerator which takes input the data directory and the pattern for the
     * training files included. The constructor loads the treebank from the given directory including the given files
     * having the given pattern.
     *
     * @param directory Directory where the treebank files reside.
     * @param pattern Pattern of the tree files to be included in the treebank. Use "." for all files.
     */
    constructor(directory: string, pattern: string);
    /**
     * Creates a morphological disambiguation corpus from the treeBank. Calls generateAnnotatedSentence for each parse
     * tree in the treebank.
     *
     * @return Created disambiguation corpus.
     */
    generate(): DisambiguationCorpus;
}
