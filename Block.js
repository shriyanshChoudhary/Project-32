class Block{
    constructor(x,y,width,height){

        var options={
            restitution:1,
            friction:0.8,
            density:0.7
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){

        if(this.body.speed<4.5){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        }
        else{

            World.remove(world,this.body);
        }
    
    }
}