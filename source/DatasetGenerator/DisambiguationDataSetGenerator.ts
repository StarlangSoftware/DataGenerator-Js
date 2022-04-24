import {DataSetGenerator} from "./DataSetGenerator";
import {DisambiguationInstanceGenerator} from "../InstanceGenerator/DisambiguationInstanceGenerator";

export class DisambiguationDataSetGenerator extends DataSetGenerator{

    /**
     * Constructor for the DisambiguationDataSetGenerator which takes input the data directory, the pattern for the training files
     * included, includepunctuation, and an instanceGenerator. The constructor calls its super class with these inputs.
     * @param directory Directory where the treebank files reside.
     * @param pattern Pattern of the tree files to be included in the treebank. Use "." for all files.
     * @param includePunctuation If true, punctuation symbols are also included in the dataset, false otherwise.
     * @param disambiguationInstanceGenerator The instance generator used to generate the dataset.
     */
    constructor(directory: string,
                pattern: string,
                includePunctuation: boolean,
                disambiguationInstanceGenerator: DisambiguationInstanceGenerator) {
        super(directory, pattern, includePunctuation, disambiguationInstanceGenerator);
    }
}