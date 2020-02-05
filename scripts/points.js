class Points {
  constructor(game, posY) {
    this.game = game;
    this.posX = 100 + Math.random() * (this.game.context.canvas.width - 200) + 5;
    this.posY = posY;
    this.width = 50;
    this.height = 50;
    this.randNumber = Math.floor(Math.random() * 100);
  }

  drawpoints() {
    let image = new Image();
    if (this.randNumber % 3 === 0) image.src = '/images/cassette-tape.png';
    else if (this.randNumber % 5 === 0) image.src = '/images/bath.png';
    else if (this.randNumber % 2 === 0) image.src = '/images/clock.png';
    this.game.context.drawImage(image, this.posX, this.posY, this.width, this.height);
  }

  runLogic() {
    this.posY += 3;
    this.checkCollision();
  }

  setRandomPosition() {
    this.posY = Math.random() * 100;
    this.posX = 100 + Math.random() * (this.game.context.canvas.width - 200) + 5;
  }

  checkCollision() {
    const dollX = this.game.doll.col;
    const dollY = this.game.doll.row;
    const dollWidth = this.game.doll.width;
    const dollHeight = this.game.doll.height;

    const pointsX = this.posX;
    const pointsY = this.posY;
    const pointsWidth = this.width;
    const pointsHeight = this.height;

    if (
      dollX + dollWidth > pointsX &&
      dollX < pointsX + dollWidth &&
      dollY + dollHeight > pointsY &&
      dollY < pointsY + pointsHeight
    ) {
      //gameIsRunning = false;
      console.log('there was a colission with a point');
      let index = this.game.points.indexOf(this);
      this.game.points.splice(index, 1);
      this.game.scoreBoard.addScore();
      //console.log(this.game.doll.score);
    }
  }
}
