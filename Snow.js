class Snow {
    constructor(x,y,width,height){
        var options={
            friction:0.2,
            density:0.1,
            
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.image=loadImage("snow4.webp");
        World.add(world,this.body);
    }
    display(){
       
        
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
       
    }
}