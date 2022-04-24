import { NerInstanceGenerator } from "./NerInstanceGenerator";
import { Instance } from "nlptoolkit-classification/dist/Instance/Instance";
import { Sentence } from "nlptoolkit-corpus/dist/Sentence";
export declare class FeaturedNerInstanceGenerator extends NerInstanceGenerator {
    /**
     * Constructor method. Gets input window size and sets the corresponding variable.
     * @param windowSize Number of previous (next) words to be considered in adding attributes.
     */
    constructor(windowSize: number);
    /**
     * Abstract function for adding attributes for empty words to the named entity recognition problem. The number of
     * attributes in this function should be equal to the number of attributes in the function
     * addAttributesForWords.
     * @param current Current classification instance
     * @param emptyWord String form to place for empty words.
     */
    protected addAttributesForEmptyWords(current: Instance, emptyWord: string): void;
    /**
     * Abstract function for adding attributes to the named entity recognition problem. Depending on your design
     * you can add as many attributes as possible. The number of attributes in this function should be equal to the
     * number of attributes in the function addAttributesForEmptyWords.
     * @param current Current classification instance
     * @param sentence Input sentence.
     * @param wordIndex The index of the word in the sentence.
     */
    protected addAttributesForWords(current: Instance, sentence: Sentence, wordIndex: number): void;
}
