import {Instance} from "nlptoolkit-classification/dist/Instance/Instance";
import {Sentence} from "nlptoolkit-corpus/dist/Sentence";
import {AnnotatedWord} from "nlptoolkit-annotatedsentence/dist/AnnotatedWord";
import {IsNumberAttribute} from "../Attribute/IsNumberAttribute";
import {IsOrganizationAttribute} from "../Attribute/IsOrganizationAttribute";
import {IsMoneyAttribute} from "../Attribute/IsMoneyAttribute";
import {MainPosAttribute} from "../Attribute/MainPosAttribute";
import {Predicate} from "../Attribute/Predicate";
import {LastIGContainsTagInstrumentalAttribute} from "../Attribute/LastIGContainsTagInstrumentalAttribute";
import {LastIGContainsTagGenitiveAttribute} from "../Attribute/LastIGContainsTagGenitiveAttribute";
import {LastIGContainsTagAccusativeAttribute} from "../Attribute/LastIGContainsTagAccusativeAttribute";
import {LastIGContainsTagAblativeAttribute} from "../Attribute/LastIGContainsTagAblativeAttribute";
import {LastIGContainsPossessiveAttribute} from "../Attribute/LastIGContainsPossessiveAttribute";
import {IsTimeAttribute} from "../Attribute/IsTimeAttribute";
import {IsRealAttribute} from "../Attribute/IsRealAttribute";
import {IsProperNounAttribute} from "../Attribute/IsProperNounAttribute";
import {IsAdjectiveAttribute} from "../Attribute/IsAdjectiveAttribute";
import {IsAuxiliaryVerbAttribute} from "../Attribute/IsAuxiliaryVerbAttribute";
import {IsCapitalAttribute} from "../Attribute/IsCapitalAttribute";
import {IsDateAttribute} from "../Attribute/IsDateAttribute";
import {IsFractionAttribute} from "../Attribute/IsFractionAttribute";
import {IsHonorificAttribute} from "../Attribute/IsHonorificAttribute";
import {RootPosAttribute} from "../Attribute/RootPosAttribute";
import {RootFormAttribute} from "../Attribute/RootFormAttribute";
import {CaseAttribute} from "../Attribute/CaseAttribute";
import {BinaryAttribute} from "nlptoolkit-classification/dist/Attribute/BinaryAttribute";
import {DiscreteAttribute} from "nlptoolkit-classification/dist/Attribute/DiscreteAttribute";
import {SemanticInstanceGenerator} from "./SemanticInstanceGenerator";
import {
    FsmMorphologicalAnalyzer
} from "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/FsmMorphologicalAnalyzer";
import {WordNet} from "nlptoolkit-wordnet/dist/WordNet";

export class FeaturedSemanticInstanceGenerator extends SemanticInstanceGenerator{

    /**
     * Constructor method. Gets input window size and sets the corresponding variable.
     * @param fsm Morphological analyzer to be used.
     * @param wordNet Wordnet to be used.
     * @param windowSize Number of previous (next) words to be considered in adding attributes.
     */
    constructor(fsm: FsmMorphologicalAnalyzer, wordNet: WordNet, windowSize: number) {
        super(fsm, wordNet);
        this.windowSize = windowSize
    }

    /**
     * Abstract function for adding attributes for empty words to the word sense disambiguation problem. The number of
     * attributes in this function should be equal to the number of attributes in the function
     * addAttributesForWords.
     * @param current Current classification instance
     * @param emptyWord String form to place for empty words.
     */
    protected addAttributesForEmptyWords(current: Instance, emptyWord: string): void {
        current.addAttribute(new BinaryAttribute(false));
        current.addAttribute(new BinaryAttribute(false));
        current.addAttribute(new BinaryAttribute(false));
        current.addAttribute(new BinaryAttribute(false));
        current.addAttribute(new BinaryAttribute(false));

        current.addAttribute(new BinaryAttribute(false));
        current.addAttribute(new BinaryAttribute(false));
        current.addAttribute(new BinaryAttribute(false));
        current.addAttribute(new BinaryAttribute(false));

        current.addAttribute(new BinaryAttribute(false));
        current.addAttribute(new BinaryAttribute(false));
        current.addAttribute(new BinaryAttribute(false));

        current.addAttribute(new BinaryAttribute(false));
        current.addAttribute(new BinaryAttribute(false));
        current.addAttribute(new BinaryAttribute(false));
        current.addAttribute(new BinaryAttribute(false));
        current.addAttribute(new BinaryAttribute(false));

        current.addAttribute(new DiscreteAttribute("NULL"));
        current.addAttribute(new DiscreteAttribute("NULL"));
        current.addAttribute(new DiscreteAttribute("NULL"));
        current.addAttribute(new DiscreteAttribute("NULL"));
        current.addAttribute(new DiscreteAttribute("NULL"));
    }

    /**
     * Abstract function for adding attributes to the word sense disambiguation problem. Depending on your design
     * you can add as many attributes as possible. The number of attributes in this function should be equal to the
     * number of attributes in the function addAttributesForEmptyWords.
     * @param current Current classification instance
     * @param sentence Input sentence.
     * @param wordIndex The index of the word in the sentence.
     */
    protected addAttributesForWords(current: Instance, sentence: Sentence, wordIndex: number): void {
        let word = sentence.getWord(wordIndex) as AnnotatedWord
        let parse = word.getParse();
        current.addAttribute(new IsAdjectiveAttribute(parse));
        current.addAttribute(new IsAuxiliaryVerbAttribute(parse));
        current.addAttribute(new IsCapitalAttribute(word.getName()));
        current.addAttribute(new IsDateAttribute(parse));
        current.addAttribute(new IsFractionAttribute(parse));

        current.addAttribute(new IsHonorificAttribute(word.getName()));
        current.addAttribute(new IsMoneyAttribute(word.getName()));
        current.addAttribute(new IsNumberAttribute(parse));
        current.addAttribute(new IsOrganizationAttribute(word.getName()));

        current.addAttribute(new IsProperNounAttribute(parse));
        current.addAttribute(new IsRealAttribute(parse));
        current.addAttribute(new IsTimeAttribute(word.getName()));

        current.addAttribute(new LastIGContainsPossessiveAttribute(parse));
        current.addAttribute(new LastIGContainsTagAblativeAttribute(parse));
        current.addAttribute(new LastIGContainsTagAccusativeAttribute(parse));
        current.addAttribute(new LastIGContainsTagGenitiveAttribute(parse));
        current.addAttribute(new LastIGContainsTagInstrumentalAttribute(parse));

        current.addAttribute(new MainPosAttribute(parse));
        current.addAttribute(new Predicate(sentence, wordIndex));
        current.addAttribute(new RootPosAttribute(parse));
        current.addAttribute(new RootFormAttribute(parse));
        current.addAttribute(new CaseAttribute(parse));
    }

}