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
        //stroke(this.color);
        //fill(this.color);

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
}

class sphere{
    constructor(x,y,z,r,st,se){

        this.stackCount = st;
        this.sectorCount = se;

        this.points = [];
        //this.points.push(new Vector(4,[x,y,z,1]));

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
                this.points.push(new Vector(4,[newX,newY,newZ,1]))
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
}

class pyramid{
    constructor(x,y,z,w,h,l,hp){
        this.points = [];
        this.points.push(new Vector(4,[x,y,z,1]));
        this.points.push(new Vector(4,[x+w,y,z,1]));
        this.points.push(new Vector(4,[x+w,y+h,z,1]));
        this.points.push(new Vector(4,[x,y+h,z,1]));

        this.color = '#000000';
        this.trans = new Transformations();
    }

    setColor(newColor){
        this.color = newColor;
    }

    draw(){
        beginShape(TRIANGLES);
        endShape();
    }
}