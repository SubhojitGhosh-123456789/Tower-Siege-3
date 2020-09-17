class Block {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution:0.8,
          friction:1.0,
          density:1.0
      }
      this.body = Bodies.rectangle(x,y,30,50,options);
      this.image = loadImage("block.png");
      this.Visibility = 255;

      World.add(world, this.body);


    }

    score(){
      if(this.Visibility < 0 && this.Visibility > - 105){
        score++;  
       }
     }

    display(){

      if(this.body.speed<3){
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y, 30, 50);
      }else{
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility-5;
        tint(255,this.Visibility);
        image(this.image, this.body.position.x, this.body.position.y, 30, 50);
        pop();
      }
    }

  };