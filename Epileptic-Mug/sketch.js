var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var ground;
var leftWall;
var rightWall;

var objects = [];

function setup() {
    createCanvas(600, 600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    var options = {
        isStatic: true
    };

    ground = Bodies.rectangle(0.5 * width, 0.67 * height, 0.33 * width, 10, options);
    leftWall = Bodies.rectangle(200, 200, 6, 400, options);
    rightWall = Bodies.rectangle(400, 200, 6, height, options);

    World.add(world, [ground, leftWall, rightWall]);
}

function mouseDragged() {
    let randomChoice = floor(random(0,2));
    var randSize = floor(random(7, 12));

    switch(randomChoice){
        case 0:
            objects.push(new Circle(mouseX, mouseY, randSize));
        break;
        case 1:
            objects.push(new Square(mouseX - 10, mouseY - 10, randSize, randSize));
        break;
        default:
            objects.push(new Circle(mouseX, mouseY, randSize));
    }
}

function draw() {
    background(102, 102, 153);

    var randRed = floor(random(0, 255));
    var randGreen = floor(random(0, 255));
    var randBlue = floor(random(0, 255));
    fill(randRed, randGreen, randBlue);

    for (var i = 0; i < objects.length; i++) {
        objects[i].show();
    }

    stroke('#fae');
    fill(255);
    strokeWeight(6);
    line(0.33 * width, 0.67 * height, 0.67 * width, 0.67 * height);
    line(0.33 * width, 0.33 * height, 0.33 * width, 0.67 * height);
    line(0.67 * width, 0.33 * height, 0.67 * width, 0.67 * height);
}