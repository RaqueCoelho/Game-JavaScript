const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
let gameIsRunning = true;
console.log(context);

// Class object
class Obstacle {
  constructor(posY) {
    this.posX = 100 + Math.random() * (context.canvas.width - 200) + 5;
    this.posY = posY;
    this.width = 100;
    this.height = 130;
    this.randNumber = Math.floor(Math.random() * 100);
  }

  drawobstacle() {
    let image = new Image();
    if (this.randNumber % 3 === 0) image.src = './images/hacker-icon.png';
    else if (this.randNumber % 5 === 0) image.src = './images/beer-cartoon-png-transparent.png';
    else if (this.randNumber % 2 === 0) image.src = './images/teacher-16030.png';
    context.drawImage(image, this.posX, this.posY, this.width, this.height);
  }

  runLogic() {
    this.posY += 3;
    this.checkCollision();
  }

  setRandomPosition() {
    this.posY = Math.random() * 100;
    this.posX = 100 + Math.random() * (context.canvas.width - 200) + 5;
  }

  checkCollision() {
    const dollX = doll.col * GRID_SIZE;
    const dollY = doll.row * GRID_SIZE;
    const dollWidth = doll.width;
    const dollHeight = doll.height;

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
      //gameIsRunning = false;
      let index = obstacles.indexOf(this);
      obstacles.splice(index, 1);
      doll.score--;
      console.log(doll.score);
    }
  }
}

const obstacles = [];

for (let i = 0; i < 100; i++) {
  const obstacle = new Obstacle(i * -200);
  obstacles.push(obstacle);
}

const runLogic = () => {
  for (let obstacle of obstacles) {
    obstacle.runLogic();
  }
};
