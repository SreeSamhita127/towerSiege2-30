class Box{
    constructor(x,y,width,height){
        var options ={
            isStatic: false,
            friction: 1.2,
        }

        this.visibility = 225;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        
      if(this.body.speed < 3){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }

      else{
        push();
        World.remove(world, this.body);
        this.visibility = this.visibility - 1;
        pop();
      } 
   }
};