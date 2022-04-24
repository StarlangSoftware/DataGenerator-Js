import {TreeBankDrawable} from "nlptoolkit-annotatedtree/dist/TreeBankDrawable";
import {NERCorpus} from "nlptoolkit-namedentityrecognition/dist/NERCorpus";
import {ViewLayerType} from "nlptoolkit-annotatedsentence/dist/ViewLayerType";

export class NERCorpusGenerator {

    private treeBank: TreeBankDrawable

    /**
     * Constructor for the NERCorpusGenerator which takes input the data directory and the pattern for the training files
     * included. The constructor loads the treebank from the given directory including the given files having the given
     * pattern.
     *
     * @param directory Directory where the treebank files reside.
     * @param pattern Pattern of the tree files to be included in the treebank. Use "." for all files.
     */
    constructor(directory: string, pattern: string) {
        this.treeBank = new TreeBankDrawable(directory, pattern)
    }

    /**
     * Creates a named entity recognition corpus from the treeBank. Calls generateAnnotatedSentence for each parse tree
     * in the treebank.
     *
     * @return Created corpus.
     */
    public generate(): NERCorpus{
        let corpus = new NERCorpus();
        for (let i = 0; i < this.treeBank.size(); i++){
            let parseTree = this.treeBank.get(i)
            if (parseTree.layerAll(ViewLayerType.NER)){
                let sentence = parseTree.generateAnnotatedSentence()
                corpus.addSentence(sentence)
            }
        }
        return corpus
    }
}