class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(450,390,900,20,options);
      //this.width = width;
      //this.height = height;
      World.add(world, this.body);
    }
    display(){
    
      rectMode(CENTER);
      fill(188,67,67);
      rect(this.body.position.x, this.body.position.y, 900, 20);
    }
  };
