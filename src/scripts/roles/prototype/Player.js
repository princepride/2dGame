class Player {

    constructor(x, y, Bodies) {
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 80;
        this.image = new Image();
        this.image.src = "download.png";
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, {
            restitution: 0, //设置弹性系数
            render: {
                sprite: {
                    texture: this.image.src
                }
            }
        });
    }
    action = (event, Body) => {
        if (event.keyCode === 65) {
            // Left arrow key was pressed
            Body.applyForce(this.body, this.body.position, { x: -0.1, y: 0 });
        } else if (event.keyCode === 68) {
            // Right arrow key was pressed
            Body.applyForce(this.body, this.body.position, { x: 0.1, y: 0 });
        }
        else if (event.keyCode === 87) {
            // Up arrow key was pressed
            Body.applyForce(this.body, this.body.position, { x: 0, y: -0.2 });
        }
    };
}
export default Player;