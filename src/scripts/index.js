import '../styles/index.scss';
import Matter from 'matter-js';

const image = new Image();
image.src = "download.png";
image.onerror = function() {
    console.error("Failed to load image");
};
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
    width: 1800,
    height: 1200,
    wireframes: false,
    background: "white"
  }
});
const boxA = Bodies.rectangle(400, 200, 80, 80, {
    render: {
        sprite: {
            texture: image.src
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
const ground = Bodies.rectangle(900, 1200, 1800, 20, { isStatic: true });
Composite.add(iEngine.world, [boxA, ballA, ballB, ground]);
Render.run(iRender);
Runner.run(iRunner, iEngine);
