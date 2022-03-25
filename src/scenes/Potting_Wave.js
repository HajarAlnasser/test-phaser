import { Game } from "phaser";

export function plotSine(number, innerW,graph,amplitude,frequency) {
      var x=0;
      var y=0;
      graph.moveTo(x,y);
  //   amplitude = 0;
  //frequency = 20;
     //console.log("num="+this.number);
      while (x < innerW) 
      { 
        
          y = window.innerHeight/2 + amplitude * Math.sin(x/frequency-number);
          graph.lineTo(x,y);
          x = x + 1;
      
        }
        console.log("number"+ number)
      
        console.log("inner"+ innerW)
        
      //  print("number"+ number)
   graph.strokePath();
     
      
    }

export function clearDraw(graph){

      console.log("i am in ");
     graph.clear();
    }