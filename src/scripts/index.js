import '../styles/index.scss';
import Matter from 'matter-js';
import Player from './roles/prototype/Player.js';

//const image = new Image();
//image.src = "download.png";

// module aliases
const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Composite = Matter.Composite;
const iEngine = Engine.create();
const iRunner = Runner.create();
const iRender = Render.create({
  element: document.body,
  engine: iEngine,
  options: {
    width: 1500,
    height: 690,
    wireframes: false,
    background: "white"
  }
});
const player = new Player(400, 200);
const boxA = Bodies.rectangle(player.x, player.y, player.width, player.height, {
    render: {
        sprite: {
            texture: player.image.src
        }
    }
});
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 65) {
        // Left arrow key was pressed
        Body.applyForce(boxA, boxA.position, { x: -0.1, y: 0 });
    } else if (event.keyCode === 68) {
        // Right arrow key was pressed
        Body.applyForce(boxA, boxA.position, { x: 0.1, y: 0 });
    }
    else if (event.keyCode === 87) {
        // Up arrow key was pressed
        Body.applyForce(boxA, boxA.position, { x: 0, y: -0.2 });
    }
});

const ballA = Bodies.circle(380, 100, 40, 10);
const ballB = Bodies.circle(460, 10, 40, 10);
const ground = [
    Bodies.rectangle(750, 685, 1500, 10, { isStatic: true }),
    Bodies.rectangle(750, 5, 1500, 10, { isStatic: true }),
    Bodies.rectangle(5, 345, 10, 690, { isStatic: true }),
    Bodies.rectangle(1495, 345, 10, 690, { isStatic: true })
];
Composite.add(iEngine.world, [boxA, ballA, ballB].concat(ground));
Render.run(iRender);
Runner.run(iRunner, iEngine);
