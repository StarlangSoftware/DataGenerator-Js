import { SimpleWindowInstanceGenerator } from "./SimpleWindowInstanceGenerator";
import { Sentence } from "nlptoolkit-corpus/dist/Sentence";
import { Instance } from "nlptoolkit-classification/dist/Instance/Instance";
export declare abstract class ShallowParseInstanceGenerator extends SimpleWindowInstanceGenerator {
    generateInstanceFromSentence(sentence: Sentence, wordIndex: number): Instance;
}
