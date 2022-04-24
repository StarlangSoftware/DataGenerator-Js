import { Sentence } from "nlptoolkit-corpus/dist/Sentence";
import { Instance } from "nlptoolkit-classification/dist/Instance/Instance";
export declare abstract class InstanceGenerator {
    protected windowSize: number;
    abstract generateInstanceFromSentence(sentence: Sentence, wordIndex: number): Instance;
}
