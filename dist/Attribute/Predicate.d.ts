import { DiscreteAttribute } from "nlptoolkit-classification/dist/Attribute/DiscreteAttribute";
import { Sentence } from "nlptoolkit-corpus/dist/Sentence";
export declare class Predicate extends DiscreteAttribute {
    /**
     * Discrete attribute for a given word. Returns the nearest predicate word to the given word
     * @param sentence Sentence where current word is in.
     * @param index Position of the current word in the sentence
     */
    constructor(sentence: Sentence, index: number);
}
