import { SemanticInstanceGenerator } from "./SemanticInstanceGenerator";
import { Instance } from "nlptoolkit-classification/dist/Instance/Instance";
import { Sentence } from "nlptoolkit-corpus/dist/Sentence";
import { VectorizedDictionary } from "nlptoolkit-dictionary/dist/Dictionary/VectorizedDictionary";
import { FsmMorphologicalAnalyzer } from "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/FsmMorphologicalAnalyzer";
import { WordNet } from "nlptoolkit-wordnet/dist/WordNet";
export declare class VectorizedSemanticInstanceGenerator extends SemanticInstanceGenerator {
    private dictionary;
    /**
     * Constructor of VectorizedNerInstanceGenerator which takes input a {@link VectorizedDictionary}, a window size
     * and a word format and sets corresponding attributes with these inputs.
     * @param fsm Morphological analyzer used to create multi-word expressions.
     * @param wordNet WordNet for checking multii-word and single-word expressions.
     * @param dictionary Dictionary in the vector form. Each word is stored in vector form in this dictionary.
     * @param windowSize Number of previous (next) words to be considered in adding attributes.
     */
    constructor(fsm: FsmMorphologicalAnalyzer, wordNet: WordNet, dictionary: VectorizedDictionary, windowSize: number);
    /**
     * Abstract function for adding attributes for empty words to the word sense disambiguation  problem. The number of
     * attributes in this function should be equal to the number of attributes in the function
     * addAttributesForWords.
     * @param current Current classification instance
     * @param emptyWord String form to place for empty words.
     */
    protected addAttributesForEmptyWords(current: Instance, emptyWord: string): void;
    /**
     * Abstract function for adding vectorized attributes to the word sense disambiguation problem. The number of
     * attributes in this function should be equal to the number of attributes in the function addAttributesForEmptyWords.
     * @param current Current classification instance
     * @param sentence Input sentence.
     * @param wordIndex The index of the word in the sentence.
     */
    protected addAttributesForWords(current: Instance, sentence: Sentence, wordIndex: number): void;
}
