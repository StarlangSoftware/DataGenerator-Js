import {InstanceGenerator} from "./InstanceGenerator";
import {Instance} from "nlptoolkit-classification/dist/Instance/Instance";
import {Sentence} from "nlptoolkit-corpus/dist/Sentence";
import {AnnotatedWord} from "nlptoolkit-annotatedsentence/dist/AnnotatedWord";

export abstract class DisambiguationInstanceGenerator extends InstanceGenerator{

    protected abstract addAttributesForPreviousWords(current: Instance, sentence: Sentence, wordIndex: number): void
    protected abstract addAttributesForEmptyWords(current: Instance, emptyWord: string): void

    /**
     * Generates a single classification instance of the morphological disambiguation problem for the given word of the
     * given sentence. If the word does not have a morphological parse, the method throws InstanceNotGenerated.
     * @param sentence Input sentence.
     * @param wordIndex The index of the word in the sentence.
     * @return Classification instance.
     */
    public generateInstanceFromSentence(sentence: Sentence, wordIndex: number): Instance {
        let word = sentence.getWord(wordIndex) as AnnotatedWord
        let current = new Instance(word.getParse().getMorphologicalParseTransitionList())
        for (let i = 0; i < this.windowSize; i++){
            if (wordIndex - this.windowSize + i >= 0){
                this.addAttributesForPreviousWords(current, sentence, wordIndex - this.windowSize + i)
            } else {
                this.addAttributesForEmptyWords(current, "<s>")
            }
        }
        this.addAttributesForPreviousWords(current, sentence, wordIndex)
        return current
    }
}