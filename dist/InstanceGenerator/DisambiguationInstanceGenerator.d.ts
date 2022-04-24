import { InstanceGenerator } from "./InstanceGenerator";
import { Instance } from "nlptoolkit-classification/dist/Instance/Instance";
import { Sentence } from "nlptoolkit-corpus/dist/Sentence";
export declare abstract class DisambiguationInstanceGenerator extends InstanceGenerator {
    protected abstract addAttributesForPreviousWords(current: Instance, sentence: Sentence, wordIndex: number): void;
    protected abstract addAttributesForEmptyWords(current: Instance, emptyWord: string): void;
    generateInstanceFromSentence(sentence: Sentence, wordIndex: number): Instance;
}
