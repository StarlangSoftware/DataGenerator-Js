import {InstanceGenerator} from "./InstanceGenerator";
import {Sentence} from "nlptoolkit-corpus/dist/Sentence";
import {Instance} from "nlptoolkit-classification/dist/Instance/Instance";

export abstract class SimpleWindowInstanceGenerator extends InstanceGenerator{

    protected abstract addAttributesForWords(current: Instance, sentence: Sentence, wordIndex: number): void
    protected abstract addAttributesForEmptyWords(current: Instance, emptyWord: string): void

    protected addAttributes(current: Instance, sentence: Sentence, wordIndex: number){
        for (let i = 0; i < this.windowSize; i++){
            if (wordIndex - this.windowSize + i >= 0){
                this.addAttributesForWords(current, sentence, wordIndex)
            } else {
                this.addAttributesForEmptyWords(current, "<s>")
            }
        }
        this.addAttributesForWords(current, sentence, wordIndex)
        for (let i = 0; i < this.windowSize; i++){
            if (wordIndex + i + 1 < sentence.wordCount()){
                this.addAttributesForWords(current, sentence, wordIndex + i + 1)
            } else {
                this.addAttributesForEmptyWords(current, "<s>")
            }
        }
    }
}