import { InstanceGenerator } from "./InstanceGenerator";
import { Instance } from "nlptoolkit-classification/dist/Instance/Instance";
import { Sentence } from "nlptoolkit-corpus/dist/Sentence";
export declare abstract class RootWordInstanceGenerator extends InstanceGenerator {
    protected abstract addAttributesForPreviousWords(current: Instance, sentence: Sentence, wordIndex: number): void;
    protected abstract addAttributesForEmptyWords(current: Instance, emptyWord: string): void;
    /**
     * Generates a single classification instance of the root word detection problem for the given word of the
     * given sentence. If the word does not have a morphological parse, the method throws InstanceNotGenerated.
     * @param sentence Input sentence.
     * @param wordIndex The index of the word in the sentence.
     * @return Classification instance.
     */
    generateInstanceFromSentence(sentence: Sentence, wordIndex: number): Instance;
}
