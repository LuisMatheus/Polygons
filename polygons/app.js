let t = new sphere(150,150,0,30,10,10)
let x = -1;
let y = -1;
let z = 0;

function setup() {
    createCanvas(720, 400,WEBGL);
    createEasyCam()
    frameRate(15);
}

function draw() {
    background(50);
    t.setColor('#f58f72')
    t.draw()
    //t.translate(y,x,z);
    t.rotateZ(1)

    //c.draw()
    //c.rotate(1)
}
