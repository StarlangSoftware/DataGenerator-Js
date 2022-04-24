import { InstanceGenerator } from "../InstanceGenerator/InstanceGenerator";
import { ParseTreeDrawable } from "nlptoolkit-annotatedtree/dist/ParseTreeDrawable";
import { Instance } from "nlptoolkit-classification/dist/Instance/Instance";
import { DataSet } from "nlptoolkit-classification/dist/DataSet/DataSet";
export declare class DataSetGenerator {
    private treeBank;
    protected instanceGenerator: InstanceGenerator;
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
    constructor(directory: string, pattern: string, includePunctuation: boolean, instanceGenerator: InstanceGenerator);
    /**
     * The method generates a set of instances (an instance from each word in the tree) from a single tree. The method
     * calls the instanceGenerator for each word in the sentence.
     * @param parseTree Parsetree for which a set of instances will be created
     * @return An array of instances.
     */
    protected generateInstanceListFromTree(parseTree: ParseTreeDrawable): Array<Instance>;
    /**
     * Mutator for the instanceGenerator attribute.
     * @param instanceGenerator Input instanceGenerator
     */
    setInstanceGenerator(instanceGenerator: InstanceGenerator): void;
    /**
     * Creates a dataset from the treeBank. Calls generateInstanceListFromTree for each parse tree in the treebank.
     * @return Created dataset.
     */
    generate(): DataSet;
}
