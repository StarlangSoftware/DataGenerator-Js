import {Sentence} from "nlptoolkit-corpus/dist/Sentence";
import {Instance} from "nlptoolkit-classification/dist/Instance/Instance";

export abstract class InstanceGenerator {

    protected windowSize: number

    public abstract generateInstanceFromSentence(sentence: Sentence, wordIndex: number): Instance
}