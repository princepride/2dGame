class Ground {
    constructor(width, height, thickness, Bodies) {
        this.width = width;
        this.height = height;
        this.thickness = thickness;
        this.body = [
            Bodies.rectangle(this.width/2, this.height-this.thickness/2, this.width, this.thickness, { isStatic: true }),
            Bodies.rectangle(this.width/2, this.thickness, this.width, this.thickness, { isStatic: true }),
            Bodies.rectangle(this.thickness/2, this.height/2, this.thickness, this.height, { isStatic: true }),
            Bodies.rectangle(this.width-this.thickness/2, this.height/2, this.thickness, this.height, { isStatic: true })
        ];
    }
}

export default Ground;