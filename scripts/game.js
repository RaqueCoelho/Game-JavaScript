const sleepMusic = new Audio('./Audio/sleep_audio.mp3');

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
    this.scoreBoard = new Scoreboard(this);
    this.timer = new Timer();
  }

  startGame() {
    // this.restartGame();
    this.loop();
    this.timer.setTimer();

    this.fillArrays();
    this.drawEverything();
  }

  restartGame() {
    this.timer.setTimer();

    console.log('restarting');
    this.obstacles = [];
    this.points = [];
    this.scoreBoard.clearScore();
    this.startGame();
  }

  pauseGame() {
    this.gameIsRunning = !this.gameIsRunning;
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
    this.context.clearRect(0, 0, this.width, this.height);
    this.background.draw();
    this.doll.drawDoll();
    this.scoreBoard.paint();
    for (let obstacle of this.obstacles) {
      obstacle.drawobstacle();
    }
    for (let point of this.points) {
      point.drawpoints();
    }
    sleepMusic.loop = true;
    sleepMusic.play();
  }

  loop = timestamp => {
    this.drawEverything();
    this.runLogic();
    if (this.gameIsRunning) {
      window.requestAnimationFrame(timestamp => this.loop(timestamp));
    }
  };
}
