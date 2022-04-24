import {TreeBankDrawable} from "nlptoolkit-annotatedtree/dist/TreeBankDrawable";
import {InstanceGenerator} from "../InstanceGenerator/InstanceGenerator";
import {ParseTreeDrawable} from "nlptoolkit-annotatedtree/dist/ParseTreeDrawable";
import {Instance} from "nlptoolkit-classification/dist/Instance/Instance";
import {DataSet} from "nlptoolkit-classification/dist/DataSet/DataSet";

export class DataSetGenerator {

    private treeBank: TreeBankDrawable
    protected instanceGenerator: InstanceGenerator

    /**
     * Constructor for the DataSetGenerator which takes input the data directory, the pattern for the training files
     * included, includepunctuation, and an instanceGenerator. The constructor loads the treebank from the given directory
     * including the given files having the given pattern. If punctuations are not included, they are removed from
     * the data.
     * @param directory Directory where the treebank files reside.
     * @param pattern Pattern of the tree files to be included in the treebank. Use "." for all files.
     * @param includePunctuation If true, punctuation symbols are also included in the dataset, false otherwise.
     * @param instanceGenerator The instance generator used to generate the dataset.
     */
    constructor(directory: string, pattern: string, includePunctuation: boolean, instanceGenerator: InstanceGenerator) {
        this.treeBank = new TreeBankDrawable(directory, pattern)
        this.instanceGenerator = instanceGenerator
        if (!includePunctuation){
            this.treeBank.stripPunctuation()
        }
    }

    /**
     * The method generates a set of instances (an instance from each word in the tree) from a single tree. The method
     * calls the instanceGenerator for each word in the sentence.
     * @param parseTree Parsetree for which a set of instances will be created
     * @return An array of instances.
     */
    protected generateInstanceListFromTree(parseTree: ParseTreeDrawable): Array<Instance>{
        let instanceList = Array<Instance>()
        let annotatedSentence = parseTree.generateAnnotatedSentence()
        for (let i = 0; i < annotatedSentence.wordCount(); i++){
            let generatedInstance = this.instanceGenerator.generateInstanceFromSentence(annotatedSentence, i)
            if (generatedInstance != undefined){
                instanceList.push(generatedInstance)
            }
        }
        return instanceList
    }

    /**
     * Mutator for the instanceGenerator attribute.
     * @param instanceGenerator Input instanceGenerator
     */
    public setInstanceGenerator(instanceGenerator: InstanceGenerator){
        this.instanceGenerator = instanceGenerator
    }

    /**
     * Creates a dataset from the treeBank. Calls generateInstanceListFromTree for each parse tree in the treebank.
     * @return Created dataset.
     */
    public generate(): DataSet{
        let dataSet = new DataSet()
        for (let i = 0; i < this.treeBank.size(); i++){
            let parseTree = this.treeBank.get(i)
            dataSet.addInstanceList(this.generateInstanceListFromTree(parseTree))
        }
        return dataSet
    }

}