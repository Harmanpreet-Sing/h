class Log{
constructor(x,y,height,angle){
var features = {
'restitution' : 0.5,
'friction' : 1.5,
'density' : 1.2
}
this.body = Bodies.rectangle(x,y,45,height,features);
this.width = 45;
this.height = height;
Matter.Body.setAngle(this.body,angle);
World.add(world,this.body)
}
display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
fill("green");
rect(0,0,this.width,this.height);
pop();
}
}
  