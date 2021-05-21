class Umbrella {
    constructor(x,y,radius) {
       var options={
            isStatic:true,
            restitution:0.4,
            friction:0.1
       
       }
       this.body= Bodies.circle(x,y,radius,options);
       this.radius=radius;
       World.add(world,this.body);

    }
    display() {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("Blue");
        ellipse(0,0,this.radius,this.radius);
        pop();
      }
      
}