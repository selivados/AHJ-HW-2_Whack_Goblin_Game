import GamePlay from "./GamePlay";

const mainElement = document.querySelector(".game");

const gamePlay = new GamePlay(mainElement);
gamePlay.run();
