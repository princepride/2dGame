class Bullet {
    constract(x, y, directionX, directionY, Bodies) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.radius = 10;
        this.body = Bodies.circle(this.x, this.y, this.radius, {
            restitution:0
        });
    }
}

export default Bullet;