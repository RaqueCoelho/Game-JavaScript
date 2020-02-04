// Class object

class Obstacle {
  constructor(game, posY) {
    this.game = game;
    this.posX = 100 + Math.random() * (this.game.context.canvas.width - 200) + 5;
    this.posY = posY;
    this.width = 50;
    this.height = 50;
    this.randNumber = Math.floor(Math.random() * 100);
  }

  drawobstacle() {
    let image = new Image();
    if (this.randNumber % 3 === 0) image.src = './images/hacker-icon.png';
    else if (this.randNumber % 5 === 0) image.src = './images/beer-cartoon-png-transparent.png';
    else if (this.randNumber % 2 === 0) image.src = './images/teacher-16030.png';
    this.game.context.drawImage(image, this.posX, this.posY, this.width, this.height);
  }

  runLogic() {
    this.posY += 3;
    //console.log(this.posX, this.posY);
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

    const obstacleX = this.posX;
    const obstacleY = this.posY;
    const obstacleWidth = this.width;
    const obstacleHeight = this.height;

    if (
      dollX + dollWidth > obstacleX &&
      dollX < obstacleX + dollWidth &&
      dollY + dollHeight > obstacleY &&
      dollY < obstacleY + obstacleHeight
    ) {
      let index = this.game.obstacles.indexOf(this);
      this.game.obstacles.splice(index, 1);
      this.game.scoreBoard.takeScore();
    }
  }
}
