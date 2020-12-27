class launcher{

    constructor(body,anchor){
   
        var option = {
            bodyA: body ,
            pointB: anchor,
            stiffness: 0.004 ,
            length: 1
        }
        this.bodyA = body ;
        this.pointB = anchor ;
       this.launcher= Constraint.create(option)
        this.image = loadImage("sprites/stone.png")
        //this.body = Bodies.circle(this.x , this.y , this.r/2, option)
        console.log(this.launcher)
        world.add(world, this.launcher) ;

    }
       attach(body){
           this.launcher.bodyA = Body ;
       }

       fly(){
           this.launcher.bodyA= null ;
       }

    display(){
      if(this.launcher.bodyA) {
         var pointA = this.bodyA.position ;
         var pointB = this.pointB ;

         strokeWeight(2) ;
         line(pointA.x , pointA.y ,pointB.x , pointB.y )
        }
      }
    }
