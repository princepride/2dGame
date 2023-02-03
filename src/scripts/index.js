import '../styles/index.scss';
import Matter from 'matter-js';
import Player from './roles/prototype/Player.js';
import config from '../config.js';

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
    width: config.width,
    height: config.height,
    wireframes: false,
    background: "white"
  }
});
const player = new Player(400, 200, Bodies);
document.addEventListener("keydown", event=>player.action(event,Body));

const ground = [
    Bodies.rectangle(config.width/2, config.height-config.thickness/2, config.width, config.thickness, { isStatic: true }),
    Bodies.rectangle(config.width/2, config.thickness, config.width, config.thickness, { isStatic: true }),
    Bodies.rectangle(config.thickness/2, config.height/2, config.thickness, config.height, { isStatic: true }),
    Bodies.rectangle(config.width-config.thickness/2, config.height/2, config.thickness, config.height, { isStatic: true })
];
Composite.add(iEngine.world, player.body);
Composite.add(iEngine.world, ground);
Render.run(iRender);
Runner.run(iRunner, iEngine);
