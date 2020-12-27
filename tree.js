class Tree{
    constructor(x,y,r){

        var option ={
            isStatic:true  ,
            restitution: 0,
            friction: 1
        }
        this.x = x ;
        this.y = y ;
        this.r = r ;
        this.image = loadImage("sprites/mango.png")
        this.body = Bodies.circle(this.x , this.y , this.r, option)
        world.add(world, this.body) ;

    }

    display(){
        var m = this.body.position ;
        push()
        translate(m.x ,m.y ) ;
        fill(255,0,255) ;
        imagmeMode(CENTER) ;
        ellipseMode(CENTER) ;
        image(this.image ,0,0,this.r*2 ,this.r*2 )
        pop()
    }

    }

