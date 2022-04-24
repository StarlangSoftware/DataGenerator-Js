import {DisambiguationInstanceGenerator} from "./DisambiguationInstanceGenerator";
import {Instance} from "nlptoolkit-classification/dist/Instance/Instance";
import {Sentence} from "nlptoolkit-corpus/dist/Sentence";
import {DiscreteAttribute} from "nlptoolkit-classification/dist/Attribute/DiscreteAttribute";
import {BinaryAttribute} from "nlptoolkit-classification/dist/Attribute/BinaryAttribute";
import {AnnotatedWord} from "nlptoolkit-annotatedsentence/dist/AnnotatedWord";
import {MainPosAttribute} from "../Attribute/MainPosAttribute";
import {IsCapitalAttribute} from "../Attribute/IsCapitalAttribute";

export class FeaturedDisambiguationInstanceGenerator extends DisambiguationInstanceGenerator{

    /**
     * Constructor method. Gets input window size and sets the corresponding variable.
     * @param windowSize Number of previous (next) words to be considered in adding attributes.
     */
    constructor(windowSize: number) {
        super();
        this.windowSize = windowSize
    }

    /**
     * Abstract function for adding attributes for empty words to the morphological disambiguation problem. The number of
     * attributes in this function should be equal to the number of attributes in the function
     * addAttributesForPreviousWords.
     * @param current Current classification instance
     * @param emptyWord String form to place for empty words.
     */
    protected addAttributesForEmptyWords(current: Instance, emptyWord: string): void {
        current.addAttribute(new DiscreteAttribute("NULL"));
        current.addAttribute(new BinaryAttribute(false));
    }

    /**
     * Abstract function for adding attributes to the morphological disambiguation problem. Depending on your design
     * you can add as many attributes as possible. The number of attributes in this function should be equal to the
     * number of attributes in the function addAttributesForEmptyWords.
     * @param current Current classification instance
     * @param sentence Input sentence.
     * @param wordIndex The index of the word in the sentence.
     */
    protected addAttributesForPreviousWords(current: Instance, sentence: Sentence, wordIndex: number): void {
        let word = sentence.getWord(wordIndex) as AnnotatedWord
        let parse = word.getParse();
        current.addAttribute(new MainPosAttribute(parse));
        current.addAttribute(new IsCapitalAttribute(word.getName()));
    }

}