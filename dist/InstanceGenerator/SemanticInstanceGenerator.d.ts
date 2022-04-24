import { SimpleWindowInstanceGenerator } from "./SimpleWindowInstanceGenerator";
import { FsmMorphologicalAnalyzer } from "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/FsmMorphologicalAnalyzer";
import { WordNet } from "nlptoolkit-wordnet/dist/WordNet";
import { Sentence } from "nlptoolkit-corpus/dist/Sentence";
import { Instance } from "nlptoolkit-classification/dist/Instance/Instance";
export declare abstract class SemanticInstanceGenerator extends SimpleWindowInstanceGenerator {
    private fsm;
    private wordNet;
    /**
     * Constructor for the semantic instance generator. Takes morphological analyzer and wordnet as input to set the
     * corresponding variables.
     * @param fsm Morphological analyzer to be used.
     * @param wordNet Wordnet to be used.
     */
    protected constructor(fsm: FsmMorphologicalAnalyzer, wordNet: WordNet);
    /**
     * Generates a single classification instance of the WSD problem for the given word of the given sentence. If the
     * word has not been labeled with sense tag yet, the method returns null. In the WSD problem, the system also
     * generates and stores all possible sense labels for the current instance. In this case, a classification
     * instance will not have all labels in the dataset, but some subset of it.
     * @param sentence Input sentence.
     * @param wordIndex The index of the word in the sentence.
     * @return Classification instance.
     */
    generateInstanceFromSentence(sentence: Sentence, wordIndex: number): Instance;
}
