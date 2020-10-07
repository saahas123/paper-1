class Paper{
    constructor(x,y){
        var options = {
           
            'restititution':0.3,
            'friction':0.5,
            'density':1.2,
            'isStatic':false
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world,this.body)
    }



    display(){
        var pos = this.posistion;
        push();
        fill("grey")
        circle(222,640,this.radius);
        pop();
    }
}