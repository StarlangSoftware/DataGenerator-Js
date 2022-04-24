import {AnnotatedCorpus} from "nlptoolkit-annotatedsentence/dist/AnnotatedCorpus";
import {InstanceGenerator} from "../InstanceGenerator/InstanceGenerator";
import {DataSet} from "nlptoolkit-classification/dist/DataSet/DataSet";
import {AnnotatedSentence} from "nlptoolkit-annotatedsentence/dist/AnnotatedSentence";

export class AnnotatedDataSetGenerator {

    private corpus: AnnotatedCorpus
    protected instanceGenerator: InstanceGenerator

    /**
     * Constructor for the AnnotatedDataSetGenerator which takes input the data directory, the pattern for the
     * training files included, and an instanceGenerator. The constructor loads the sentence corpus from the given
     * directory including the given files having the given pattern.
     * @param directory Directory where the corpus files reside.
     * @param pattern Pattern of the tree files to be included in the treebank. Use "." for all files.
     * @param instanceGenerator The instance generator used to generate the dataset.
     */
    constructor(directory: string, pattern: string, instanceGenerator: InstanceGenerator) {
        this.corpus = new AnnotatedCorpus(directory, pattern)
        this.instanceGenerator = instanceGenerator
    }

    /**
     * Mutator for the instanceGenerator attribute.
     * @param instanceGenerator Input instanceGenerator
     */
    public setInstanceGenerator(instanceGenerator: InstanceGenerator){
        this.instanceGenerator = instanceGenerator
    }

    /**
     * Creates a dataset from the corpus. Calls generateInstanceFromSentence for each parse sentence in the corpus.
     * @return Created dataset.
     */
    public generate(): DataSet{
        let dataSet = new DataSet()
        for (let i = 0; i < this.corpus.sentenceCount(); i++){
            let sentence = this.corpus.getSentence(i) as AnnotatedSentence
            for (let j = 0; j < sentence.wordCount(); j++){
                let generatedInstance = this.instanceGenerator.generateInstanceFromSentence(sentence, j)
                if (generatedInstance != undefined){
                    dataSet.addInstance(generatedInstance)
                }
            }
        }
        return dataSet
    }
}