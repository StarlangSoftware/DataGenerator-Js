import { InstanceGenerator } from "./InstanceGenerator";
import { Sentence } from "nlptoolkit-corpus/dist/Sentence";
import { Instance } from "nlptoolkit-classification/dist/Instance/Instance";
export declare abstract class SimpleWindowInstanceGenerator extends InstanceGenerator {
    protected abstract addAttributesForWords(current: Instance, sentence: Sentence, wordIndex: number): void;
    protected abstract addAttributesForEmptyWords(current: Instance, emptyWord: string): void;
    protected addAttributes(current: Instance, sentence: Sentence, wordIndex: number): void;
}
