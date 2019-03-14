function Circle(x, y, r) {

    var options = {
        friction: 0.2,
        restitution: 1
    };

    this.r = r;
    this.body = Matter.Bodies.circle(x, y, r, options);
    World.add(engine.world, this.body);

    this.show = function () {
        var randRed = floor(random(0, 255));
        var randGreen = floor(random(0, 255));
        var randBlue = floor(random(0, 255));
        fill(randRed, randGreen, randBlue);

        var randStrokeWeight = floor(random(0, 3));
        strokeWeight(randStrokeWeight);
        stroke(randRed,randGreen,randBlue);

        var pos = this.body.position;

        push();
        circle(pos.x, pos.y, this.r);
        pop();
    }
}

function Square(x, y, w, h) {

    var options = {
        friction: 0.2,
        restitution: 1
    };

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);

    this.show = function () {
        var randRed = floor(random(0, 255));
        var randGreen = floor(random(0, 255));
        var randBlue = floor(random(0, 255));
        fill(randRed, randGreen, randBlue);

        var randStrokeWeight = floor(random(0, 3));
        stroke(randRed,randGreen,randBlue);
        strokeWeight(randStrokeWeight);

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}