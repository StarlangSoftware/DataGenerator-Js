import { Instance } from "nlptoolkit-classification/dist/Instance/Instance";
import { Sentence } from "nlptoolkit-corpus/dist/Sentence";
import { RootWordInstanceGenerator } from "./RootWordInstanceGenerator";
export declare class FeaturedRootEordInstanceGenerator extends RootWordInstanceGenerator {
    /**
     * Constructor method. Gets input window size and sets the corresponding variable.
     * @param windowSize Number of previous (next) words to be considered in adding attributes.
     */
    constructor(windowSize: number);
    /**
     * Abstract function for adding attributes for empty words to the root word determination problem. The number of
     * attributes in this function should be equal to the number of attributes in the function
     * addAttributesForPreviousWords.
     * @param current Current classification instance
     * @param emptyWord String form to place for empty words.
     */
    protected addAttributesForEmptyWords(current: Instance, emptyWord: string): void;
    /**
     * Abstract function for adding attributes to the root word determination problem. Depending on your design
     * you can add as many attributes as possible. The number of attributes in this function should be equal to the
     * number of attributes in the function addAttributesForEmptyWords.
     * @param current Current classification instance
     * @param sentence Input sentence.
     * @param wordIndex The index of the word in the sentence.
     */
    protected addAttributesForPreviousWords(current: Instance, sentence: Sentence, wordIndex: number): void;
}
