import '../styles/index.scss';
import Matter from 'matter-js';
import Player from './roles/prototype/Player.js';
import Ground from './elements/Ground.js';
import config from '../config.js';

//const image = new Image();
//image.src = "download.png";

// module aliases
let compositeObjects = [];
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
    width: config.width,
    height: config.height,
    wireframes: false,
    background: "white"
  }
});
const player = new Player(400, 200, Bodies);
compositeObjects = compositeObjects.concat(player.bodies);
const ground = new Ground(config.width, config.height, config.thickness, Bodies);
compositeObjects = compositeObjects.concat(ground.bodies);
document.addEventListener("keydown", (event) => player.action(event,Body,Engine,iEngine));
Engine.events.on(iEngine, 'afterUpdate', function() {
  if (player.body.position.y <= 645) {
    player.triggerCount = 0;
  }
});
Composite.add(iEngine.world, compositeObjects);
Render.run(iRender);
Runner.run(iRunner, iEngine);
