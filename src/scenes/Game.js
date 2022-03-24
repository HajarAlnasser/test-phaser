  import Phaser from "phaser";
  import { plotSine } from "./Potting_Wave";
  import { clearDraw
   } from "./Potting_Wave";
  export default class Game extends Phaser.Scene{

   
    
    init(){
      this.number = 1
      this.timer;
    }

    create() {
      this.graph = this.add.graphics();
      this.graph.lineStyle(3,0x00ffff);

      //this.startD();
     // this.time.delayedCall(10000,this.clearDraw() ,null,this);
    }
    update(){

      plotSine(this.number, window.innerWidth,this.graph);
      //this.graph.clear();
      this.number=this.number+0.1;
      this.timer = this.time.delayedCall(100, this.startD, [], this);
     
     
    }
    
    
    startD(){
      this.timer = this.time.addEvent({
        delay: 100,                // ms
        callback: clearDraw(this.graph),
       
        loop: true
    });
    
    }


  }
