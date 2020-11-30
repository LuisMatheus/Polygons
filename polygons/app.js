let t = new sphere(50,50,50,20,10,10)

let x = 5;
let y = 5;


function setup() {
    createCanvas(720, 400,WEBGL);
    createEasyCam()
    frameRate(60);
}

function draw() {
    background(50);
    t.setColor('#f58f72')
    t.draw()
    //t.translate(x,y)
    //t.rotate(1)
}
