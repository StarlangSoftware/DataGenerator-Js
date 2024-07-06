import {InstanceGenerator} from "./InstanceGenerator";
import {Sentence} from "nlptoolkit-corpus/dist/Sentence";
import {Instance} from "nlptoolkit-classification/dist/Instance/Instance";

export abstract class SimpleWindowInstanceGenerator extends InstanceGenerator{

    protected abstract addAttributesForWords(current: Instance, sentence: Sentence, wordIndex: number): void
    protected abstract addAttributesForEmptyWords(current: Instance, emptyWord: string): void

    /**
     * addAttributes adds all attributes of the previous words, the current wordn, and next words of the given word
     * to the given instance. If the previous or next words does not exists, the method calls
     * addAttributesForEmptyWords method. If the word does not exists in the dictionary or the required annotation layer
     * does not exists in the annotated word, the method throws InstanceNotGenerated. The window size determines the
     * number of previous and next words.
     * @param current Current classification instance to which attributes will be added.
     * @param sentence Input sentence.
     * @param wordIndex The index of the word in the sentence.
     * @throws InstanceNotGenerated If attributes can not be added, throws InstanceNotGenerated.
     */
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