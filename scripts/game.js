class Game {
  constructor($canvas) {
    this.width = $canvas.width;
    this.height = $canvas.height;
    this.context = $canvas.getContext('2d');
    this.background = new Background(this);
    this.gameIsRunning = true;
    this.doll = new CharacterDoll(this);
    this.obstacles = [];
    this.points = [];
    this.keyboard = new Keyboard(this);
    this.keyboard.setKeyboard();
  }

  startGame() {
    console.log('game has started');
    this.fillArrays();
    this.drawEverything();
    this.loop();
  }

  fillArrays() {
    for (let i = 0; i < 100; i++) {
      const obstacles = new Obstacle(this, i * -200);
      this.obstacles.push(obstacles);
    }

    for (let i = 0; i < 100; i++) {
      const point = new Points(this, i * -200);
      this.points.push(point);
    }
    console.log('arrays filled', this.points);
  }

  runLogic() {
    for (let point of this.points) {
      point.runLogic();
    }

    for (let obstacle of this.obstacles) {
      obstacle.runLogic();
    }
  }

  drawEverything() {
    console.log('drawing game');
    this.context.clearRect(0, 0, this.width, this.height);
    this.background.draw();
    for (let obstacle of this.obstacles) {
      obstacle.drawobstacle();
    }
    for (let point of this.points) {
      point.drawpoints();
    }
    this.doll.drawDoll();
  }

  loop = timestamp => {
    this.drawEverything();
    this.runLogic();
    if (this.gameIsRunning) {
      window.requestAnimationFrame(timestamp => this.loop(timestamp));
    }
  };
}
