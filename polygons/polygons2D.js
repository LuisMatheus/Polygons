class line{
    constructor(x1,y1,x2,y2){
        this.points = [];
        this.points.push(new Vector(3,[x1,y1,1]));
        this.points.push(new Vector(3,[x2,y2,1]));
        this.color = '#000000';
        this.trans = new Transformations();
    }

    setColor(newColor){
        this.color = newColor;
    }

    draw(){

        strokeWeight(1);
        stroke(this.color);
        beginShape();

        vertex(this.points[0].get(1),this.points[0].get(2));
        vertex(this.points[1].get(1),this.points[1].get(2));

        endShape(CLOSE);
    }

    translate(dx,dy){
        this.points[0] = this.trans.translate2D(this.points[0],dx,dy)
        this.points[1] = this.trans.translate2D(this.points[1],dx,dy)
    }

    rotate(angle){

        let old_points = this.points.slice()

        this.translate(-(this.points[0].get(1)+this.points[1].get(1))/2,-(this.points[0].get(2)+this.points[1].get(2))/2)
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.rotation2D(this.points[i],angle)
        }
        this.translate((old_points[0].get(1)+old_points[1].get(1))/2,(old_points[0].get(1)+old_points[1].get(1))/2)
    }

}

class rectangle{
    constructor(x,y,w,h){
        this.points = [];
        this.points.push(new Vector(3,[x,y,1]));
        this.points.push(new Vector(3,[x+w,y,1]));
        this.points.push(new Vector(3,[x+w,y+h,1]));
        this.points.push(new Vector(3,[x,y+h,1]))

        this.color = '#000000';
        this.trans = new Transformations();
    }

    setColor(newColor){
        this.color = newColor;
    }

    draw(){
        strokeWeight(0);
        stroke(this.color);
        fill(this.color);

        beginShape(TRIANGLES);

        vertex(this.points[0].get(1),this.points[0].get(2))
        vertex(this.points[1].get(1),this.points[1].get(2))
        vertex(this.points[3].get(1),this.points[3].get(2))

        vertex(this.points[1].get(1),this.points[1].get(2))
        vertex(this.points[2].get(1),this.points[2].get(2))
        vertex(this.points[3].get(1),this.points[3].get(2))

        endShape(CLOSE)

    }

    translate(dx,dy){
        for(let i = 0 ; i < this.points.length ; i++){
            this.points[i] = this.trans.translate2D(this.points[i],dx,dy);
        }
    }

    rotate(angle){
        let old_points = this.points.slice()

        this.translate(-(this.points[0].get(1)+this.points[2].get(1))/2,-(this.points[0].get(2)+this.points[2].get(2))/2)
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.rotation2D(this.points[i],angle)
        }
        this.translate((old_points[0].get(1)+old_points[2].get(1))/2,(old_points[0].get(1)+old_points[2].get(1))/2)

    }
}

class triangle{
    constructor(x1,y1,x2,y2,x3,y3){
        this.points = []
        this.points.push(new Vector(3,[x1,y1,1]))
        this.points.push(new Vector(3,[x2,y2,1]))
        this.points.push(new Vector(3,[x3,y3,1]))

        this.color = '#000000';
        this.trans = new Transformations();
    }

    setColor(newColor){
        this.color = newColor;
    }

    draw(){
        strokeWeight(0);
        stroke(this.color);
        fill(this.color);

        beginShape(TRIANGLES);

        vertex(this.points[0].get(1),this.points[0].get(2))
        vertex(this.points[1].get(1),this.points[1].get(2))
        vertex(this.points[2].get(1),this.points[2].get(2))

        endShape(CLOSE)
    }

    translate(dx,dy){
        for(let i = 0 ; i < this.points.length ; i++){
            this.points[i] = this.trans.translate2D(this.points[i],dx,dy);
        }
    }

    rotate(angle){
        let old_points = this.points.slice()

        this.translate(-(this.points[0].get(1)+this.points[1].get(1)+this.points[2].get(1))/3,-(this.points[0].get(2)+this.points[1].get(2)+this.points[2].get(2))/3)
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.rotation2D(this.points[i],angle)
        }
        this.translate((old_points[0].get(1)+old_points[1].get(1)+old_points[2].get(1))/3,(old_points[0].get(2)+old_points[1].get(2)+old_points[2].get(2))/3)
    }
}

//fix
class circle{
    constructor(x,y,r,t){
        if(t < 3) {throw('Numero minimo de triangulos eh 3')}
        this.points = []
        this.x = x;
        this.y = y;
        let ang = 360/t;
        this.trans = new Transformations();

        for(let i = 0 ; i <= t ; i ++){
            this.points.push(new Vector(3,[0,r,1]));
        }

        //rotate
        for(let i = 0 ; i <+ t ; i ++){
            this.points[i] = this.trans.rotation2D(this.points[i],i*ang);
        }

        //mover pra x,y
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.translate2D(this.points[i],x,y)
        }

        this.color = '#ffffff';
        

    }

    setColor(newColor){
        this.color = newColor;
    }

    translate(dx,dy){
        for(let i = 0 ; i < this.points.length ; i++){
            this.points[i] = this.trans.translate2D(this.points[i],dx,dy);
        }
    }

    draw(){
        strokeWeight(0);
        stroke(this.color);
        fill(this.color);

        

        beginShape(TRIANGLES);
        for (let i = 0; i < this.points.length-1; i++) {
            

            vertex(this.x,this.y)
            vertex(this.points[i].get(1),this.points[i].get(2))
            vertex(this.points[i+1].get(1),this.points[i+1].get(2))

        }

            vertex(this.x,this.y)
            vertex(this.points[this.points.length-1].get(1),this.points[this.points.length-1].get(2))
            vertex(this.points[0].get(1),this.points[0].get(2))

        endShape()
    }

    rotate(angle){
        let old_points = this.points.slice()

        this.translate(-(this.points[0].get(1)+this.points[2].get(1))/2,-(this.points[0].get(2)+this.points[2].get(2))/2)
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.rotation2D(this.points[i],angle)
        }
        this.translate((old_points[0].get(1)+old_points[2].get(1))/2,(old_points[0].get(1)+old_points[2].get(1))/2)

    }
}