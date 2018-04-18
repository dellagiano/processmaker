export class TextAnnotation {
    constructor (options, shape) {
        this.options = options;
        this.shape = shape;
        this.shape.config(options);
    }

    render () {
        this.shape.render();
    }

    getShape () {
        return this.shape;
    }
}
