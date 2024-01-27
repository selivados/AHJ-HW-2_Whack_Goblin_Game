import goblinImage from "../img/goblin.png";

export default class GamePlay {
  constructor(element) {
    this.mainElement = element;
    this.boardWidth = 4;
    this.boardHeight = 4;
    this.holesCount = this.boardWidth * this.boardHeight;
    this.goblinPositionId = 0;
    this.intervalId = null;
    this.timeOut = 1000;
  }

  run() {
    this.renderBoard();
    this.showGamePlay();
  }

  renderBoard() {
    this.board = document.createElement("div");
    this.board.className = "game-board";
    this.board.style.width = `${this.boardWidth * 180}px`;

    for (let i = 0; i < this.holesCount; i++) {
      const hole = document.createElement("div");
      hole.className = "hole";
      this.board.appendChild(hole);
    }

    this.mainElement.insertAdjacentElement("beforeend", this.board);
  }

  showGamePlay() {
    this.intervalId = setInterval(() => {
      this.showGoblin();
    }, this.timeOut);
  }

  showGoblin() {
    this.goblin = this.mainElement.querySelector(".goblin");

    if (!this.goblin) {
      this.goblin = document.createElement("img");
      this.goblin.src = goblinImage;
      this.goblin.classList.add("goblin");
    }

    const oldGoblinPositionId = this.goblinPositionId;

    do {
      this.goblinPositionId = Math.floor(Math.random() * this.holesCount);
    } while (this.goblinPositionId === oldGoblinPositionId);

    const holes = this.mainElement.querySelectorAll(".hole");
    holes[this.goblinPositionId].appendChild(this.goblin);
  }
}
