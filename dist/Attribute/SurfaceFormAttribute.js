(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-classification/dist/Attribute/DiscreteAttribute"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SurfaceFormAttribute = void 0;
    const DiscreteAttribute_1 = require("nlptoolkit-classification/dist/Attribute/DiscreteAttribute");
    class SurfaceFormAttribute extends DiscreteAttribute_1.DiscreteAttribute {
        /**
         * Discrete attribute for a given word. Returns the surface form.
         * @param surfaceForm Surface form of the word.
         */
        constructor(surfaceForm) {
            super(surfaceForm);
        }
    }
    exports.SurfaceFormAttribute = SurfaceFormAttribute;
});
//# sourceMappingURL=SurfaceFormAttribute.js.map