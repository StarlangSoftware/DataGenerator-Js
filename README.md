Data Generator
============

Video Lectures
============

[<img src=https://github.com/StarlangSoftware/DataGenerator/blob/master/video1.jpg width="50%">](https://youtu.be/E9rE_eCffPE)[<img src=https://github.com/StarlangSoftware/DataGenerator/blob/master/video2.jpg width="50%">](https://youtu.be/ISHmGWvHL7k)

For Developers
============

You can also see [Cython](https://github.com/starlangsoftware/DataGenerator-Cy), [Java](https://github.com/starlangsoftware/DataGenerator), [Python](https://github.com/starlangsoftware/DataGenerator-Py), [C++](https://github.com/starlangsoftware/DataGenerator-CPP), [C](https://github.com/starlangsoftware/DataGenerator-C), [Swift](https://github.com/starlangsoftware/DataGenerator-Swift),  or [C#](https://github.com/starlangsoftware/DataGenerator-CS) repository.

## Requirements

* [Node.js 14 or higher](#Node.js)
* [Git](#git)

### Node.js 

To check if you have a compatible version of Node.js installed, use the following command:

    node -v
    
You can find the latest version of Node.js [here](https://nodejs.org/en/download/).

### Git

Install the [latest version of Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## Npm Install

	npm install nlptoolkit-datagenerator
	
## Download Code

In order to work on code, create a fork from GitHub page. 
Use Git for cloning the code to your local or below line for Ubuntu:

	git clone <your-fork-git-link>

A directory called dataGenerator will be created. Or you can use below link for exploring the code:

	git clone https://github.com/starlangsoftware/datagenerator-js.git

## Open project with Webstorm IDE

Steps for opening the cloned project:

* Start IDE
* Select **File | Open** from main menu
* Choose `DataGenerator-Js` file
* Select open as project option
* Couple of seconds, dependencies will be downloaded. 

Detailed Description
============

+ [AnnotatedDataSetGenerator](#annotateddatasetgenerator)
+ [InstanceGenerator](#instancegenerator)

## AnnotatedDataSetGenerator

DataSet yaratmak için AnnotatedDataSetGenerator sınıfı önce üretilir.

	AnnotatedDataSetGenerator(folder: string, pattern: string, instanceGenerator: InstanceGenerator)

Ardından generate metodu ile DataSet yaratılır.

	generate(): DataSet

## InstanceGenerator

DataGeneratorlerin InstanceGeneratorlere ihtiyacı vardır. Bunlar bir tek kelimeden bir 
Instance yaratan sınıflardır.

	generateInstanceFromSentence(sentence: Sentence, wordIndex: number): Instance

NER problemi için NerInstanceGenerator, FeaturedNerInstanceGenerator ve 
VectorizedNerInstanceGeneratorsınıfı

ShallowParse problemi için ShallowParseInstanceGenerator, 
FeaturedShallowParseInstanceGenerator ve VectorizedShallowParseInstanceGenerator sınıfı

WSD problemi için SemanticInstanceGenerator, FeaturedSemanticInstanceGenerator ve
VectorizedSemanticInstanceGenerator sınıfı

Morphological Disambiguation problemi için FeaturedDisambiguationInstanceGenerator sınıfı

## Example Generated DataSet

### Word Sense Disambiguation Task

The following Table shows the sample text represented with sense labels and three possible features, namely the root form of the word, the part of speech (POS) tag of the word, and a boolean feature for checking the capital case.

|Word|Root|Pos|Capital|...|Tag|
|---|---|---|---|---|---|
|Yüzündeki|yüz|Noun|True|...|yüz<sup>3</sup>|
|ketçap|ketçap|Noun|False|...|ketçap<sup>1</sup>|
|lekesi|leke|Noun|False|...|leke<sup>2</sup>|
|yüzdükten|yüz|Verb|False|...|yüz<sup>2</sup>| 
|sonra|sonra|PCAbl|False|...|sonra<sup>1</sup>| 
|çıkmış|çık|Verb|False|...|çık<sup>10</sup>|
|.|.|Punctuation|False|...|.<sup>1</sup>|

### Named Entity Recognition Task

The following Table shows the sample text represented with tag labels and three possible features, namely the root form of the word, the part of speech (POS) tag of the word, and a boolean feature for checking the capital case.

|Word|Root|Pos|Capital|...|Tag|
|---|---|---|---|---|---|
|Türk|Türk|Noun|True|...|ORGANIZATION|
|Hava|Hava|Noun|True|...|ORGANIZATION|
|Yolları|Yol|Noun|True|...|ORGANIZATION|
|bu|bu|Pronoun|False|...|NONE|
|Pazartesi'den|Pazartesi|Noun|True|...|TIME|
|itibaren|itibaren|Adverb|False|...|NONE|
|İstanbul|İstanbul|Noun|True|...|LOCATION|
|Ankara|Ankara|Noun|True|...|LOCATION|
|güzergahı|güzergah|Noun|False|...|NONE|
|için|için|Adverb|False|...|NONE|
|indirimli|indirimli|Adjective|False|...|NONE|
|satışlarını|sat|Noun|False|...|NONE|
|90|90|Number|False|...|MONEY|
|TL'den|TL|Noun|True|...|MONEY|
|başlatacağını|başlat|Noun|False|...|NONE|
|açıkladı|açıkla|Verb|False|...|NONE|
|.|.|Punctuation|False|...|NONE|

### Shallow Parse Task

The following Table shows the sample text represented with chunk labels and three possible features, namely the root form of the word, the part of speech (POS) tag of the word, and a boolean feature for checking the capital case.

|Word|Root|Pos|Capital|...|Tag|
|---|---|---|---|---|---|
|Türk|Türk|Noun|True|...|ÖZNE|
|Hava|Hava|Noun|True|...|ÖZNE|
|Yolları|yol|Noun|True|...|ÖZNE|
|Salı|Salı|Noun|True|...|ZARF TÜMLECİ|
|günü|gün|Noun|False|...|ZARF TÜMLECİ|
|yeni|yeni|Adjective|False|...|NESNE|
|indirimli|indirimli|Adjective|False|...|NESNE|
|fiyatlarını|fiyat|Noun|False|...|NESNE|
|açıkladı|açıkla|Verb|False|...|YÜKLEM|
|.|.|Punctuation|False|...|HİÇBİRİ|

## Cite
If you use this resource on your research, please cite the following paper: 

```
@article{acikgoz,
  title={All-words word sense disambiguation for {T}urkish},
  author={O. Açıkg{\"o}z and A. T. G{\"u}rkan and B. Ertopçu and O. Topsakal and B. {\"O}zenç and A. B. Kanburoğlu and {\.{I}}. Çam and B. Avar and G. Ercan and O. T. Y{\i}ld{\i}z},
  journal={2017 International Conference on Computer Science and Engineering (UBMK)},
  year={2017},
  pages={490-495}
}
@inproceedings{ertopcu17,  
	author={B. {Ertopçu} and A. B. {Kanburoğlu} and O. {Topsakal} and O. {Açıkgöz} and A. T. {Gürkan} and B. {Özenç} and İ. {Çam} and B. {Avar} and G. {Ercan} and O. T. {Yıldız}},  
	booktitle={2017 International Conference on Computer Science and Engineering (UBMK)},  title={A new approach for named entity recognition},   
	year={2017},  
	pages={474-479}
}

For Contibutors
============

### package.json file

1. main and types are important when this package will be imported.
```
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
```
2. Dependencies should be maximum (not only direct but also indirect references should also be given), everything directly in the code should be given here.
```
  "dependencies": {
    "nlptoolkit-corpus": "^1.0.12",
    "nlptoolkit-dictionary": "^1.0.14",
    "nlptoolkit-morphologicalanalysis": "^1.0.19",
    "nlptoolkit-xmlparser": "^1.0.7"
  }
```

### tsconfig.json file

1. Compiler flags currently includes nodeNext for importing.
```
  "compilerOptions": {
    "outDir": "dist",
    "module": "nodeNext",
    "sourceMap": true,
    "noImplicitAny": true,
    "removeComments": false,
    "declaration": true,
  },
```
2. tests, node_modules and dist should be excluded.
```
  "exclude": [
    "tests",
    "node_modules",
    "dist"
  ]
```

### index.ts file

1. Should include all ts classes.
```
export * from "./CategoryType"
export * from "./InterlingualDependencyType"
export * from "./InterlingualRelation"
export * from "./Literal"
```

### Data files
1. Add data files to the project folder. Subprojects should include all data files of the parent projects.

### Javascript files

1. Classes should be defined as exported.
```
export class JCN extends ICSimilarity{
```
2. Do not forget to comment each function.
```
    /**
     * Computes JCN wordnet similarity metric between two synsets.
     * @param synSet1 First synset
     * @param synSet2 Second synset
     * @return JCN wordnet similarity metric between two synsets
     */
    computeSimilarity(synSet1: SynSet, synSet2: SynSet): number {
```
3. Function names should follow caml case.
```
    setSynSetId(synSetId: string){
```
4. Write getter and setter methods.
```
    getRelation(index: number): Relation{
    setName(name: string){
```
5. Use standard javascript test style.
```
describe('SimilarityPathTest', function() {
    describe('SimilarityPathTest', function() {
        it('testComputeSimilarity', function() {
            let turkish = new WordNet();
            let similarityPath = new SimilarityPath(turkish);
            assert.strictEqual(32.0, similarityPath.computeSimilarity(turkish.getSynSetWithId("TUR10-0656390"), turkish.getSynSetWithId("TUR10-0600460")));
            assert.strictEqual(13.0, similarityPath.computeSimilarity(turkish.getSynSetWithId("TUR10-0412120"), turkish.getSynSetWithId("TUR10-0755370")));
            assert.strictEqual(13.0, similarityPath.computeSimilarity(turkish.getSynSetWithId("TUR10-0195110"), turkish.getSynSetWithId("TUR10-0822980")));
        });
    });
});
```
6. Enumerated types should be declared with enum.
```
export enum CategoryType {
    MATHEMATICS, SPORT, MUSIC, SLANG, BOTANIC,
    PLURAL, MARINE, HISTORY, THEOLOGY, ZOOLOGY,
    METAPHOR, PSYCHOLOGY, ASTRONOMY, GEOGRAPHY, GRAMMAR,
    MILITARY, PHYSICS, PHILOSOPHY, MEDICAL, THEATER,
    ECONOMY, LAW, ANATOMY, GEOMETRY, BUSINESS,
    PEDAGOGY, TECHNOLOGY, LOGIC, LITERATURE, CINEMA,
    TELEVISION, ARCHITECTURE, TECHNICAL, SOCIOLOGY, BIOLOGY,
    CHEMISTRY, GEOLOGY, INFORMATICS, PHYSIOLOGY, METEOROLOGY,
    MINERALOGY
}
```
7. If there are multiple constructors for a class, define them as constructor1, constructor2, ..., then from the original constructor call these methods.
```
    constructor1(symbol: any){
    constructor2(symbol: any, multipleFile: MultipleFile) {
    constructor(symbol: any, multipleFile: MultipleFile = undefined) {
        if (multipleFile == undefined){
            this.constructor1(symbol);
        } else {
            this.constructor2(symbol, multipleFile);
        }
    }
```
8. Importing should be done via import method with referencing the node-modules.
```
import {Corpus} from "nlptoolkit-corpus/dist/Corpus";
import {Sentence} from "nlptoolkit-corpus/dist/Sentence";
```
9. Use xmlparser package for parsing xml files.
```
	var doc = new XmlDocument("test.xml")
	doc.parse()
	let root = doc.getFirstChild()
	let firstChild = root.getFirstChild()
```
