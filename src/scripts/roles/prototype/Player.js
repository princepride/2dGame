class Player {

    constructor(x, y, Bodies) {
        this.upTriggleTime = 0;
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
        this.bodies = [this.body];
    }

    action = (event, Body) => {
        if (event.key === 'a') {
            // Left arrow key was pressed
            if(this.body.velocity.x > -1) {
                Body.applyForce(this.body, this.body.position, { x: -0.05, y: 0 });
            }
        } else if (event.key === 'd') {
            // Right arrow key was pressed
            if(this.body.velocity.x < 1) {
                console.log(this.body.velocity.x);
                Body.applyForce(this.body, this.body.position, { x: 0.05, y: 0 });
            }
        }
        else if (event.key === 'w') {
            // Up arrow key was pressed
            if (event.repeat) return;
            Body.applyForce(this.body, this.body.position, { x: 0, y: -0.1 });
        }
        //else if (event.key === 'w' ) {
        //    this.upTriggleTime ++;
        //    if (this.upTriggleTime%4 < 2){
        //        // Up arrow key was pressed
        //        Body.applyForce(this.body, this.body.position, { x: 0, y: -0.1 });
        //    }
        //}

    };
}
export default Player;