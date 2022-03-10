  import Phaser from "phaser";
  export default class Game extends Phaser.Scene{


    preload(){

    
    }

    create() {
      this.graphics = this.add.graphics();
    
      
      this.plotSine();
    }
    
    plotSine() {
      this.graphics.lineStyle(2,0x00ffff);
      
      
      
    
     
      var x=0;
      var y=0;
      this.graphics.moveTo(x,y);
      var amplitude = 40;
      var frequency = 20;
      //ctx.moveTo(x, y);
      while (x < window.innerWidth) {
          y = window.innerHeight/2 + amplitude * Math.sin(x/frequency);
            this.graphics.lineTo(x,y);
         
          x = x + 1;
      }
      this.graphics.strokePath();
  }


  }
