import { Instance } from "nlptoolkit-classification/dist/Instance/Instance";
import { Sentence } from "nlptoolkit-corpus/dist/Sentence";
import { SemanticInstanceGenerator } from "./SemanticInstanceGenerator";
import { FsmMorphologicalAnalyzer } from "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/FsmMorphologicalAnalyzer";
import { WordNet } from "nlptoolkit-wordnet/dist/WordNet";
export declare class FeaturedSemanticInstanceGenerator extends SemanticInstanceGenerator {
    /**
     * Constructor method. Gets input window size and sets the corresponding variable.
     * @param fsm Morphological analyzer to be used.
     * @param wordNet Wordnet to be used.
     * @param windowSize Number of previous (next) words to be considered in adding attributes.
     */
    constructor(fsm: FsmMorphologicalAnalyzer, wordNet: WordNet, windowSize: number);
    /**
     * Abstract function for adding attributes for empty words to the word sense disambiguation problem. The number of
     * attributes in this function should be equal to the number of attributes in the function
     * addAttributesForWords.
     * @param current Current classification instance
     * @param emptyWord String form to place for empty words.
     */
    protected addAttributesForEmptyWords(current: Instance, emptyWord: string): void;
    /**
     * Abstract function for adding attributes to the word sense disambiguation problem. Depending on your design
     * you can add as many attributes as possible. The number of attributes in this function should be equal to the
     * number of attributes in the function addAttributesForEmptyWords.
     * @param current Current classification instance
     * @param sentence Input sentence.
     * @param wordIndex The index of the word in the sentence.
     */
    protected addAttributesForWords(current: Instance, sentence: Sentence, wordIndex: number): void;
}
