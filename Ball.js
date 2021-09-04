class Ball{
    constructor(x,y,r){

        var options={
            restitution:1,
            friction:0.8,
            density:0.7
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);
    }
    display(){

        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("teal");
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}