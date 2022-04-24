import {SimpleWindowInstanceGenerator} from "./SimpleWindowInstanceGenerator";
import {Sentence} from "nlptoolkit-corpus/dist/Sentence";
import {Instance} from "nlptoolkit-classification/dist/Instance/Instance";
import {AnnotatedWord} from "nlptoolkit-annotatedsentence/dist/AnnotatedWord";

export abstract class ShallowParseInstanceGenerator extends SimpleWindowInstanceGenerator{

    public generateInstanceFromSentence(sentence: Sentence, wordIndex: number): Instance {
        let word = sentence.getWord(wordIndex) as AnnotatedWord
        let classLabel = word.getShallowParse()
        if (classLabel == undefined){
            return undefined
        }
        let current = new Instance(classLabel)
        this.addAttributes(current, sentence, wordIndex)
        return current
    }
}