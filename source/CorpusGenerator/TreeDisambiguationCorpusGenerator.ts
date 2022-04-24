import {TreeBankDrawable} from "nlptoolkit-annotatedtree/dist/TreeBankDrawable";
import {DisambiguationCorpus} from "nlptoolkit-morphologicalanalysis/dist/Corpus/DisambiguationCorpus";
import {ViewLayerType} from "nlptoolkit-annotatedsentence/dist/ViewLayerType";
import {AnnotatedSentence} from "nlptoolkit-annotatedsentence/dist/AnnotatedSentence";
import {AnnotatedWord} from "nlptoolkit-annotatedsentence/dist/AnnotatedWord";
import {DisambiguatedWord} from "nlptoolkit-morphologicalanalysis/dist/Corpus/DisambiguatedWord";

export class TreeDisambiguationCorpusGenerator {

    private treeBank: TreeBankDrawable

    /**
     * Constructor for the DisambiguationCorpusGenerator which takes input the data directory and the pattern for the
     * training files included. The constructor loads the treebank from the given directory including the given files
     * having the given pattern.
     *
     * @param directory Directory where the treebank files reside.
     * @param pattern Pattern of the tree files to be included in the treebank. Use "." for all files.
     */
    constructor(directory: string, pattern: string) {
        this.treeBank = new TreeBankDrawable(directory, pattern)
    }

    /**
     * Creates a morphological disambiguation corpus from the treeBank. Calls generateAnnotatedSentence for each parse
     * tree in the treebank.
     *
     * @return Created disambiguation corpus.
     */
    public generate(): DisambiguationCorpus{
        let corpus = new DisambiguationCorpus();
        for (let i = 0; i < this.treeBank.size(); i++){
            let parseTree = this.treeBank.get(i)
            if (parseTree.layerAll(ViewLayerType.INFLECTIONAL_GROUP)){
                let sentence = parseTree.generateAnnotatedSentence()
                let disambiguationSentence = new AnnotatedSentence()
                for (let j = 0; j < sentence.wordCount(); j++){
                    disambiguationSentence.addWord(new DisambiguatedWord(sentence.getWord(j).getName(), (sentence.getWord(j) as AnnotatedWord).getParse()))
                }
                corpus.addSentence(disambiguationSentence)
            }
        }
        return corpus
    }
}