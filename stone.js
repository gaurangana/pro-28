class stone {

    constructor(x,y,r){

        var option= {
        isStatic: false ,
        restitution: 0,
        friction: 1 ,
        density:1.2
        }
        this.x = x ;
        this.y = y ;
        this.r = r ;
        this.image = loadImage("sprites/stone.png")
        this.body = Bodies.circle(this.x , this.y , this.r/2, option)
        world.add(world, this.body) ;

    }

    display(){
        var p = this.body.position ;
        push()
        translate(p.x ,p.y ) ;
        fill(255,0,255) ;
        imagmeMode(CENTER) ;
        ellipseMode(RADIUS) ;
        image(this.image ,0,0,this.r*2 ,this.r*2 )
        pop()
    }
}