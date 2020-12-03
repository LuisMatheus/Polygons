class plane{
    constructor(x,y,z,w,h){
        this.points = [];
        this.points.push(new Vector(4,[x,y,z,1]));
        this.points.push(new Vector(4,[x+w,y,z,1]));
        this.points.push(new Vector(4,[x+w,y+h,z,1]));
        this.points.push(new Vector(4,[x,y+h,z,1]))
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

        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3))
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3))

        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3))

        endShape(CLOSE)

    }

    translate(dx,dy,dz){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.translate3D(this.points[i],dx,dy,dz);    
        }
        
    }

    rotateX(angle){
        let old_points = this.points.slice()

        this.translate(-(this.points[0].get(1)),-(this.points[0].get(2)),-(this.points[0].get(3)))
        this.translate(-(this.points[2].get(1)/2),-(this.points[2].get(2)/2),-(this.points[2].get(3)/2))
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.rotation3Dx(this.points[i],angle);
        }
        this.translate((old_points[0].get(1)+old_points[2].get(1))/2,(old_points[0].get(2)+old_points[2].get(2))/2,(old_points[0].get(3)+old_points[2].get(3))/2);
    }

    rotateY(angle){
        let old_points = this.points.slice()

        this.translate(-(this.points[0].get(1)),-(this.points[0].get(2)),-(this.points[0].get(3)))
        this.translate(-(this.points[2].get(1)/2),-(this.points[2].get(2)/2),-(this.points[2].get(3)/2))
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.rotation3Dy(this.points[i],angle);
        }
        this.translate((old_points[0].get(1)+old_points[2].get(1))/2,(old_points[0].get(2)+old_points[2].get(2))/2,(old_points[0].get(3)+old_points[2].get(3))/2);
    }

    rotateZ(angle){
        let old_points = this.points.slice()

        this.translate(-(this.points[0].get(1)),-(this.points[0].get(2)),-(this.points[0].get(3)))
        this.translate(-(this.points[2].get(1)/2),-(this.points[2].get(2)/2),-(this.points[2].get(3)/2))
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.rotation3Dz(this.points[i],angle);
        }
        this.translate((old_points[0].get(1)+old_points[2].get(1))/2,(old_points[0].get(2)+old_points[2].get(2))/2,(old_points[0].get(3)+old_points[2].get(3))/2);
    }
    
}

class parallelogram{
    constructor(x,y,z,w,h,l){
        this.points = [];
        this.points.push(new Vector(4,[x,y,z,1]));
        this.points.push(new Vector(4,[x+w,y,z,1]));
        this.points.push(new Vector(4,[x+w,y+h,z,1]));
        this.points.push(new Vector(4,[x,y+h,z,1]))

        this.points.push(new Vector(4,[x,y,z-l,1]));
        this.points.push(new Vector(4,[x+w,y,z-l,1]));
        this.points.push(new Vector(4,[x+w,y+h,z-l,1]));
        this.points.push(new Vector(4,[x,y+h,z-l,1]))
        this.color = '#000000';
        this.trans = new Transformations();
    }

    setColor(newColor){
        this.color = newColor;
    }

    draw(){
        strokeWeight(1);
        stroke(this.color);
        fill(this.color);

        beginShape(TRIANGLES);

        //frente
        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3))
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3))

        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3))

        //traseira
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3))
        vertex(this.points[5].get(1),this.points[5].get(2),this.points[5].get(3))
        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3))

        vertex(this.points[5].get(1),this.points[5].get(2),this.points[5].get(3))
        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3))
        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3))

        //esquerda
        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3))
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3))
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3))

        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3))
        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3))
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3))

        //direita
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[5].get(1),this.points[5].get(2),this.points[5].get(3))
        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3))

        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))
        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3))

        //superior
        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3))
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3))

        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3))
        vertex(this.points[5].get(1),this.points[5].get(2),this.points[5].get(3))

        //inferior
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3))
        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3))

        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))
        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3))
        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3))

        endShape()

    }

    translate(dx,dy,dz){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.translate3D(this.points[i],dx,dy,dz);    
        }
        
    }

    rotateX(angle){
        let old_points = this.points.slice()

        this.translate(-(this.points[0].get(1)),-(this.points[0].get(2)),-(this.points[0].get(3)))
        this.translate(-(this.points[6].get(1)/2),-(this.points[6].get(2)/2),-(this.points[6].get(3)/2))

        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.rotation3Dx(this.points[i],angle)
        }

        this.translate((old_points[0].get(1)+old_points[6].get(1))/2,(old_points[0].get(2)+old_points[6].get(2))/2,(old_points[0].get(3)+old_points[6].get(3))/2)
    }

    rotateY(angle){
        let old_points = this.points.slice()

        this.translate(-(this.points[0].get(1)),-(this.points[0].get(2)),-(this.points[0].get(3)))
        this.translate(-(this.points[6].get(1)/2),-(this.points[6].get(2)/2),-(this.points[6].get(3)/2))

        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.rotation3Dy(this.points[i],angle)
        }

        this.translate((old_points[0].get(1)+old_points[6].get(1))/2,(old_points[0].get(2)+old_points[6].get(2))/2,(old_points[0].get(3)+old_points[6].get(3))/2)
    }

    rotateZ(angle){
        let old_points = this.points.slice()

        this.translate(-(this.points[0].get(1)),-(this.points[0].get(2)),-(this.points[0].get(3)))
        this.translate(-(this.points[6].get(1)/2),-(this.points[6].get(2)/2),-(this.points[6].get(3)/2))

        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.rotation3Dz(this.points[i],angle)
        }

        this.translate((old_points[0].get(1)+old_points[6].get(1))/2,(old_points[0].get(2)+old_points[6].get(2))/2,(old_points[0].get(3)+old_points[6].get(3))/2)
    }

}

class sphere{
    constructor(x,y,z,r,st,se){

        this.stackCount = st;
        this.sectorCount = se;

        this.x = x;
        this.y = y;
        this.z = z;
        
        this.points = [];

        let sectorStep = 2* Math.PI/se;
        let stackStep = Math.PI/st;
        let sectorAngle, stackAngle;
        let xy ;
        let newX,newY,newZ

        for (let i = 0; i <= this.stackCount; ++i) {
            stackAngle = Math.PI/2 - i*stackStep;
            xy = r * Math.cos(stackAngle) 
            newZ = r * Math.sin(stackAngle)

            for(let j = 0 ; j <= this.sectorCount ; ++j){
                sectorAngle = j*sectorStep;
                newX = xy * Math.cos(sectorAngle);
                newY = xy * Math.sin(sectorAngle);
                this.points.push(new Vector(4,[newX+x,newY+y,newZ+z,1]))
            }

        }

        this.color = '#000000';
        this.trans = new Transformations();
    }

    setColor(newColor){
        this.color = newColor;
    }

    draw(){
        let k1,k2;
        strokeWeight(1);
        stroke(this.color);
        fill(this.color);
        beginShape(TRIANGLES)
        for (let i = 0; i < this.stackCount; ++i) {
            k1 = i * (this.sectorCount + 1);
            k2 = k1 + this.sectorCount + 1;
            for (let j = 0; j < this.sectorCount; ++j, ++k1 , ++k2) {
                if(i!=0){
                    vertex(this.points[k1].get(1),this.points[k1].get(2),this.points[k1].get(3))
                    vertex(this.points[k2].get(1),this.points[k2].get(2),this.points[k2].get(3))
                    vertex(this.points[k1+1].get(1),this.points[k1+1].get(2),this.points[k1+1].get(3))
                }if(i != (this.stackCount - 1)){
                    vertex(this.points[k1+1].get(1),this.points[k1+1].get(2),this.points[k1+1].get(3))
                    vertex(this.points[k2].get(1),this.points[k2].get(2),this.points[k2].get(3))
                    vertex(this.points[k2+1].get(1),this.points[k2+1].get(2),this.points[k2+1].get(3))
                }
            }
        }
        endShape(CLOSE);
    }

    translate(dx,dy,dz){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.translate3D(this.points[i],dx,dy,dz);    
        }
        
    }

    rotateX(angle){

        this.translate(-this.x,-this.y,-this.z)

        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.rotation3Dx(this.points[i],angle);
        }

        this.translate(this.x,this.y,this.z)

    }

    rotateY(angle){

        this.translate(-this.x,-this.y,-this.z)

        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.rotation3Dy(this.points[i],angle);
        }

        this.translate(this.x,this.y,this.z)

    }

    rotateZ(angle){

        this.translate(-this.x,-this.y,-this.z)

        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.rotation3Dz(this.points[i],angle);
        }

        this.translate(this.x,this.y,this.z)

    }
}

class pyramid{
    constructor(x,y,z,w,h,l,hp){
        this.points = [];
        this.points.push(new Vector(4,[x,y,z,1]));
        this.points.push(new Vector(4,[x+w,y,z,1]));
        this.points.push(new Vector(4,[x+w,y+h,z,1]));
        this.points.push(new Vector(4,[x,y+h,z,1]))

        this.points.push(new Vector(4,[x,y,z-l,1]));
        this.points.push(new Vector(4,[x+w,y,z-l,1]));
        this.points.push(new Vector(4,[x+w,y+h,z-l,1]));
        this.points.push(new Vector(4,[x,y+h,z-l,1]));

        this.points.push(new Vector(4,[(x+w)-w/2,y+h+hp,(z-l)+l/2,1]));

        this.hp = hp;

        this.color = '#000000';
        this.trans = new Transformations();
    }

    setColor(newColor){
        this.color = newColor;
    }

    draw(){

        strokeWeight(1);
        stroke(this.color);
        fill(this.color);

        beginShape(TRIANGLES);

        //frente
        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3))
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3))

        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3))

        //traseira
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3))
        vertex(this.points[5].get(1),this.points[5].get(2),this.points[5].get(3))
        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3))

        vertex(this.points[5].get(1),this.points[5].get(2),this.points[5].get(3))
        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3))
        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3))

        //esquerda
        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3))
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3))
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3))

        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3))
        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3))
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3))

        //direita
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[5].get(1),this.points[5].get(2),this.points[5].get(3))
        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3))

        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))
        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3))

        //superior
        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3))
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3))

        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3))
        vertex(this.points[5].get(1),this.points[5].get(2),this.points[5].get(3))

        //inferior
        //vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))
        //vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3))
        //vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3))

        //vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))
        //vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3))
        //vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3))


        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))
        vertex(this.points[8].get(1),this.points[8].get(2),this.points[8].get(3))
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3))

        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))
        vertex(this.points[8].get(1),this.points[8].get(2),this.points[8].get(3))
        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3))

        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3))
        vertex(this.points[8].get(1),this.points[8].get(2),this.points[8].get(3))
        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3))

        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3))
        vertex(this.points[8].get(1),this.points[8].get(2),this.points[8].get(3))
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3))


        endShape();
    }

    translate(dx,dy,dz){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.translate3D(this.points[i],dx,dy,dz);    
        }
        
    }

    rotateX(angle){
        let old_points = this.points.slice()

        this.translate(-(this.points[0].get(1)),-(this.points[0].get(2)),-(this.points[0].get(3)))
        this.translate(-(this.points[6].get(1)/2),-(this.points[8].get(2)/2),-(this.points[6].get(3)/2))

        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.rotation3Dx(this.points[i],angle)
        }

        this.translate((old_points[0].get(1)+old_points[6].get(1))/2,(old_points[0].get(2)+old_points[8].get(2))/2,(old_points[0].get(3)+old_points[6].get(3))/2)
    }

    rotateY(angle){
        let old_points = this.points.slice()

        this.translate(-(this.points[0].get(1)),-(this.points[0].get(2)),-(this.points[0].get(3)))
        this.translate(-(this.points[6].get(1)/2),-(this.points[8].get(2)/2),-(this.points[6].get(3)/2))

        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.rotation3Dy(this.points[i],angle)
        }

        this.translate((old_points[0].get(1)+old_points[6].get(1))/2,(old_points[0].get(2)+old_points[8].get(2))/2,(old_points[0].get(3)+old_points[6].get(3))/2)
    }

    rotateZ(angle){
        let old_points = this.points.slice()

        this.translate(-(this.points[0].get(1)),-(this.points[0].get(2)),-(this.points[0].get(3)))
        this.translate(-(this.points[6].get(1)/2),-(this.points[8].get(2)/2),-(this.points[6].get(3)/2))

        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.rotation3Dz(this.points[i],angle)
        }

        this.translate((old_points[0].get(1)+old_points[6].get(1))/2,(old_points[0].get(2)+old_points[8].get(2))/2,(old_points[0].get(3)+old_points[6].get(3))/2)
    }
}