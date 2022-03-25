  import Phaser from "phaser";
  import { plotSine } from "./Potting_Wave";
  import { clearDraw
   } from "./Potting_Wave";

   const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;
// colors
  export default class Game extends Phaser.Scene{

    preload() {
      this.load.scenePlugin({
          key: 'rexuiplugin',
          url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
          sceneKey: 'rexUI'
      });
  }

    init(){
      this.number = 1
      this.timer;
    }

<<<<<<< HEAD
  create() {
    this.graph = this.add.graphics();
    this.graph.lineStyle(1000, 0x509555);

    //this.startD();
    // this.time.delayedCall(10000,this.clearDraw() ,null,this);

    // start sider

    var print1 = this.add.text(500, 400, "");
    this.rexUI.add
      .slider({
        x: 600,
        y: 500,
        width: 300,
        height: 30,
        orientation: "x",
        track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_DARK),
        indicator: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_PRIMARY),
        thumb: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_PRIMARY),

        input: "click", // 'drag'|'click'
        easeValue: { duration: 250 },
        value: 0.5,

        valuechangeCallback: function (value) {
          print1.text = Math.round(value * 100);
          amplitude = Math.round(value * 100);
        },
      })
      .layout();
var waveLenght = this.add.text(100, 400, "");
    var print2 = this.add.text(0, 400, "");
    this.rexUI.add
      .slider({
        x: 200,
        y: 500,
        width: 300,
        height: 30,
        orientation: "x",

        track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_DARK),
        indicator: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_PRIMARY),
        thumb: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_PRIMARY),

        input: "click", // 'drag'|'click'
        easeValue: { duration: 250 },

        valuechangeCallback: function (value) {
          print2.text = Math.round(value * 100);
          frequency = Math.round(100-(value * 100));
          waveLenght = Math.round(100-(value*100));
        },
      })
      .layout();
  }
=======
    create() {
      this.graph = this.add.graphics();
      this.graph.lineStyle(1000,0x509555);
>>>>>>> parent of 6079ac2 (done)

      //this.startD();
     // this.time.delayedCall(10000,this.clearDraw() ,null,this);

// start sider
var print0 = this.add.text(0, 0, '');

this.rexUI.add.slider({
    x: 200,
    y: 200,
    width: 200,
    height: 20,
    orientation: 'x',

    track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 6, COLOR_DARK),
    thumb: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_LIGHT),

    valuechangeCallback: function (value) {
        print0.text = value;
    },
    space: {
        top: 4,
        bottom: 4
    },
    input: 'drag', // 'drag'|'click'
})
    .layout();


var print1 = this.add.text(400, 0, '');
this.rexUI.add.slider({
    x: 600,
    y: 300,
    width: 20,
    height: 200,
    orientation: 'y',

    track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_DARK),
    indicator: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_PRIMARY),
    thumb: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_PRIMARY),

    input: 'click', // 'drag'|'click'
    valuechangeCallback: function (value) {
        print1.text = value;
    },

})
    .layout();


var print2 = this.add.text(0, 400, '');
this.rexUI.add.slider({
    x: 200,
    y: 500,
    width: 300,
    height: 30,
    orientation: 'x',

    track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_DARK),
    indicator: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_PRIMARY),
    thumb: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_PRIMARY),

    input: 'click', // 'drag'|'click'
    easeValue: { duration: 250 },

    valuechangeCallback: function (value) {
        print2.text = value;
    },

})
    .layout();


    }


    update(){

      plotSine(this.number, window.innerWidth,this.graph,);
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
