class Points {
  constructor(posY) {
    this.posX = 100 + Math.random() * (context.canvas.width - 200) + 5;
    this.posY = posY;
    this.width = 100;
    this.height = 130;
    this.randNumber = Math.floor(Math.random() * 100);
  }

  drawpoints() {
    let image = new Image();
    if (this.randNumber % 3 === 0)
      image.src =
        './images/kissclipart-cartoon-alarm-clock-ringing-clipart-alarm-clocks-c-56650bb19378603f.png';
    else if (this.randNumber % 5 === 0)
      image.src =
        './images/kisspng-bell-clip-art-bell-png-vector-element-5aa62d3a4a8459.8830207115208399943052.png';
    else if (this.randNumber % 2 === 0) image.src = '/images/pngwave.png';
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
      let index = points.indexOf(this);
      points.splice(index, 1);
      doll.score++;
      console.log(doll.score);
    }
  }
}

// Make the points disappeur after touching the girl
const points = [];

for (let i = 0; i < 100; i++) {
  const point = new Points(i * -200);
  points.push(point);
}

// Point logic
const runLogicPoints = () => {
  for (let point of points) {
    point.runLogic();
  }
};
