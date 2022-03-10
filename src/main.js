import Phaser, { Scale } from"phaser";

import Menu from "./scenes/Menu";
import Game from "./scenes/Game";
const config={

type: Phaser.AUTO,

scale: {
    parent: "phaser-example",
mode: Phaser.Scale.FIT,
autoCenter: Phaser.Scale.CENTER_BOTH,
width: 800,
height: 600
}

}

const game=new Phaser.Game(config);

game.scene.add("menu", Menu);
game.scene.add("game", Game);

//game.scene.start("menu");
game.scene.start("game");