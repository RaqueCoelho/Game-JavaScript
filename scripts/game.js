const sleepMusic = new Audio('./Audio/sleep_audio.mp3');

class Game {
  constructor($canvas) {
    this.width = $canvas.width;
    this.height = $canvas.height;
    this.context = $canvas.getContext('2d');
    this.background = new Background(this);
    this.time = 0;
    this.speed = 1000;
  }

  startGame() {
    this.restartGame();
    this.loop();
  }

  restartGame() {
    this.gameIsRunning = true;

    this.timer = new Timer(this);
    this.timer.setTimer();

    this.doll = new CharacterDoll(this);
    this.keyboard = new Keyboard(this);
    this.scoreBoard = new Scoreboard(this);
    this.scoreBoard.clearScore();

    this.obstacles = [];
    this.points = [];
    this.keyboard.setKeyboard();
  }

  pauseGame() {
    this.gameIsRunning = !this.gameIsRunning;
  }

  fillArrays(timestamp) {
    //Everything runnning inside this condition runs at the speed of the game this.speed
    if (this.time < timestamp - this.speed) {
      this.time = timestamp;
      //This pushes an obstacle to the array every this.speed seconds
      const obstacles = new Obstacle(this, 0);
      this.obstacles.push(obstacles);
      //   console.log(this.obstacles.length);
      const point = new Points(this, 0);
      this.points.push(point);
    }
  }

  runLogic(timestamp) {
    this.fillArrays(timestamp);

    for (let point of this.points) {
      point.runLogic();
    }

    for (let obstacle of this.obstacles) {
      obstacle.runLogic();
    }
    sleepMusic.loop = true;
    sleepMusic.play();
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
  }

  loop = timestamp => {
    this.drawEverything();
    this.runLogic(timestamp);
    if (this.gameIsRunning) {
      window.requestAnimationFrame(timestamp => this.loop(timestamp));
    }
  };
}
