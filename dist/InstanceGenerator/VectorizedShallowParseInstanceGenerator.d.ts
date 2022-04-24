import { Instance } from "nlptoolkit-classification/dist/Instance/Instance";
import { Sentence } from "nlptoolkit-corpus/dist/Sentence";
import { VectorizedDictionary } from "nlptoolkit-dictionary/dist/Dictionary/VectorizedDictionary";
import { ShallowParseInstanceGenerator } from "./ShallowParseInstanceGenerator";
export declare class VectorizedShallowParseInstanceGenerator extends ShallowParseInstanceGenerator {
    private dictionary;
    /**
     * Constructor of VectorizedNerInstanceGenerator which takes input a {@link VectorizedDictionary}, a window size
     * and a word format and sets corresponding attributes with these inputs.
     * @param dictionary Dictionary in the vector form. Each word is stored in vector form in this dictionary.
     * @param windowSize Number of previous (next) words to be considered in adding attributes.
     */
    constructor(dictionary: VectorizedDictionary, windowSize: number);
    /**
     * Abstract function for adding attributes for empty words to the shallow parsing problem. The number of
     * attributes in this function should be equal to the number of attributes in the function
     * addAttributesForWords.
     * @param current Current classification instance
     * @param emptyWord String form to place for empty words.
     */
    protected addAttributesForEmptyWords(current: Instance, emptyWord: string): void;
    /**
     * Abstract function for adding vectorized attributes to the shallow parsing problem. The number of
     * attributes in this function should be equal to the number of attributes in the function addAttributesForEmptyWords.
     * @param current Current classification instance
     * @param sentence Input sentence.
     * @param wordIndex The index of the word in the sentence.
     */
    protected addAttributesForWords(current: Instance, sentence: Sentence, wordIndex: number): void;
}
