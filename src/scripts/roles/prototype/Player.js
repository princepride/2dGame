class Player {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 80;
        this.image = new Image();
        this.image.src = "download.png";
    }
}
export default Player;