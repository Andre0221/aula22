class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.imagemBase = loadImage("assets/cannonBase.png");
    this.imagemCanhao = loadImage("assets/canon.png");
  }
  
  display(){
    push();
    translate(this.x,this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.imagemCanhao,0,0,this.width,this.height);
    pop();
    image(this.imagemBase,70,20,200,200);
   /* rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height);
    rect(70,20,200,200);
    noFill();*/
  }

}
