import { InstanceGenerator } from "../InstanceGenerator/InstanceGenerator";
import { DataSet } from "nlptoolkit-classification/dist/DataSet/DataSet";
export declare class AnnotatedDataSetGenerator {
    private corpus;
    protected instanceGenerator: InstanceGenerator;
    /**
     * Constructor for the AnnotatedDataSetGenerator which takes input the data directory, the pattern for the
     * training files included, and an instanceGenerator. The constructor loads the sentence corpus from the given
     * directory including the given files having the given pattern.
     * @param directory Directory where the corpus files reside.
     * @param pattern Pattern of the tree files to be included in the treebank. Use "." for all files.
     * @param instanceGenerator The instance generator used to generate the dataset.
     */
    constructor(directory: string, pattern: string, instanceGenerator: InstanceGenerator);
    /**
     * Mutator for the instanceGenerator attribute.
     * @param instanceGenerator Input instanceGenerator
     */
    setInstanceGenerator(instanceGenerator: InstanceGenerator): void;
    /**
     * Creates a dataset from the corpus. Calls generateInstanceFromSentence for each parse sentence in the corpus.
     * @return Created dataset.
     */
    generate(): DataSet;
}
