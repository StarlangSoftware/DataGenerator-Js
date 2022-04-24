import {SimpleWindowInstanceGenerator} from "./SimpleWindowInstanceGenerator";
import {
    FsmMorphologicalAnalyzer
} from "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/FsmMorphologicalAnalyzer";
import {WordNet} from "nlptoolkit-wordnet/dist/WordNet";
import {Sentence} from "nlptoolkit-corpus/dist/Sentence";
import {Instance} from "nlptoolkit-classification/dist/Instance/Instance";
import {AnnotatedSentence} from "nlptoolkit-annotatedsentence/dist/AnnotatedSentence";
import {AnnotatedWord} from "nlptoolkit-annotatedsentence/dist/AnnotatedWord";
import {CompositeInstance} from "nlptoolkit-classification/dist/Instance/CompositeInstance";

export abstract class SemanticInstanceGenerator extends SimpleWindowInstanceGenerator{

    private fsm: FsmMorphologicalAnalyzer
    private wordNet: WordNet

    /**
     * Constructor for the semantic instance generator. Takes morphological analyzer and wordnet as input to set the
     * corresponding variables.
     * @param fsm Morphological analyzer to be used.
     * @param wordNet Wordnet to be used.
     */
    protected constructor(fsm: FsmMorphologicalAnalyzer, wordNet: WordNet) {
        super();
        this.fsm = fsm
        this.wordNet = wordNet
    }

    /**
     * Generates a single classification instance of the WSD problem for the given word of the given sentence. If the
     * word has not been labeled with sense tag yet, the method returns null. In the WSD problem, the system also
     * generates and stores all possible sense labels for the current instance. In this case, a classification
     * instance will not have all labels in the dataset, but some subset of it.
     * @param sentence Input sentence.
     * @param wordIndex The index of the word in the sentence.
     * @return Classification instance.
     */
    public generateInstanceFromSentence(sentence: Sentence, wordIndex: number): Instance {
        let possibleSynSets = (sentence as AnnotatedSentence).constructSynSets(this.wordNet, this.fsm, wordIndex)
        let word = sentence.getWord(wordIndex) as AnnotatedWord
        let classLabel = word.getSemantic()
        if (classLabel == undefined || possibleSynSets.length == 0){
            return undefined
        }
        let current = new CompositeInstance(classLabel)
        let possibleClassLabels = new Array<string>()
        for (let synSet of possibleSynSets){
            possibleClassLabels.push(synSet.getId())
        }
        current.setPossibleClassLabels(possibleClassLabels)
        this.addAttributes(current, sentence, wordIndex)
        return current
    }
}