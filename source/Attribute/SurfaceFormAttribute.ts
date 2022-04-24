import {DiscreteAttribute} from "nlptoolkit-classification/dist/Attribute/DiscreteAttribute";

export class SurfaceFormAttribute extends DiscreteAttribute{

    /**
     * Discrete attribute for a given word. Returns the surface form.
     * @param surfaceForm Surface form of the word.
     */
    constructor(surfaceForm: string) {
        super(surfaceForm);
    }
}