import {SimpleWindowInstanceGenerator} from "./SimpleWindowInstanceGenerator";
import {Sentence} from "nlptoolkit-corpus/dist/Sentence";
import {Instance} from "nlptoolkit-classification/dist/Instance/Instance";
import {NamedEntityTypeStatic} from "nlptoolkit-namedentityrecognition/dist/NamedEntityTypeStatic";
import {AnnotatedWord} from "nlptoolkit-annotatedsentence/dist/AnnotatedWord";

export abstract class NerInstanceGenerator extends SimpleWindowInstanceGenerator{

    /**
     * Generates a single classification instance of the NER problem for the given word of the given sentence. If the
     * word has not been labeled with NER tag yet, the method returns null.
     * @param sentence Input sentence.
     * @param wordIndex The index of the word in the sentence.
     * @return Classification instance.
     */
    public generateInstanceFromSentence(sentence: Sentence, wordIndex: number): Instance {
        let word = sentence.getWord(wordIndex) as AnnotatedWord
        let classLabel = NamedEntityTypeStatic.getNamedEntity(word.getNamedEntityType())
        if (classLabel == undefined){
            return undefined
        }
        let current = new Instance(classLabel)
        this.addAttributes(current, sentence, wordIndex)
        return current
    }
}