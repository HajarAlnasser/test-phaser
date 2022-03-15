  import Phaser from "phaser";
  export default class Game extends Phaser.Scene{

   
    init(){
      this.number=1;
      this.timer;
    }

    create() {
      this.graph = this.add.graphics();
      this.graph.lineStyle(2,0x00ffff);

      //this.startD();
     // this.time.delayedCall(10000,this.clearDraw() ,null,this);
    }
    update(){

      this.plotSine(this.number);
      //this.graph.clear();
      this.number=this.number+0.1;
      this.timer = this.time.delayedCall(300, this.startD, [], this);
     
     
    }
    
     plotSine() {
      var x=0;
      var y=0;
      this.graph.moveTo(x,y);
      var amplitude = 30;
      var frequency = 20;
     //console.log("num="+this.number);
      while (x < window.innerWidth) {
        
          y = window.innerHeight/2 + amplitude * Math.sin(x/frequency-this.number);
            this.graph.lineTo(x,y);
          x = x + 1;
        
      
        }
      
      this.graph.strokePath();
     
      
    }

    clearDraw(){

      console.log("i am in ");
      this.graph.clear();
    }
    startD(){
      this.timer = this.time.addEvent({
        delay: 1000,                // ms
        callback: this.clearDraw(),
       
        loop: true
    });
    
    }


  }
