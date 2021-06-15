class Bird
{
    constructor(x,y,width,height)
    {
        var option={
            'restitution' : 0.8,
            'friction': 0.3,
            'density': 0.1
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        
        this.width=width;
        this.height=height;
    }

    display()
    {
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;

        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill ("red")
        rect(0,0,this.width,this.height);
        pop();     
    }
}