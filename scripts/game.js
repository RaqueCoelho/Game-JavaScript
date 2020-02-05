const sleepMusic = new Audio('./Audio/sleep_audio.mp3');

class Game {
  constructor($canvas) {
    this.width = $canvas.width;
    this.height = $canvas.height;
    this.context = $canvas.getContext('2d');
    this.background = new Background(this);
    this.time = 0;
    this.speed = 1000;
    this.gameIsRunning = false;

    this.timer = new Timer(this);
    this.timer.setTimer();
    this.doll = new CharacterDoll(this);
    this.keyboard = new Keyboard(this);
    this.scoreBoard = new Scoreboard(this);
    this.scoreBoard.clearScore();
    this.keyboard.setKeyboard();
    this.obstacles = [];
    this.points = [];
  }

  startGame() {
    //Whenever a game starts, we fist restart every elemtent with this.restartGame()
    this.restartGame();

    sleepMusic.loop = true;
    sleepMusic.play();

    //Before runing our loop, we check that the loop is not already running, if the loop is already running we would run a loop over another one (speeding game problem)
    if (!this.gameIsRunning) {
      //it the game is not runing let's make it run! We set this.gameIsRunning to the oposite
      this.gameIsRunning = !this.gameIsRunning;
      this.loop();
    }
    // If the game is already runing, the loop should already be running so we just restart the game(first line of this method)
  }

  restartGame() {
    //when we restart a game we have to clear the timer's interval so that it is not running on top of the previus one.
    clearInterval(this.timer.countdown);
    this.timer = new Timer(this);
    this.timer.setTimer();
    //this.timer.timeToLoose = 30;

    //CREATE NEW OBJECTS OF EVERYTHING
    this.doll = new CharacterDoll(this);
    this.keyboard = new Keyboard(this);
    this.scoreBoard = new Scoreboard(this);
    this.scoreBoard.clearScore();

    //RESETS ALL THE GAME LOGIC (since we are not creating a new Game)
    this.obstacles = [];
    this.points = [];
    this.keyboard.setKeyboard();
    this.time = 0;
  }

  pauseGame() {
    if (this.gameIsRunning) {
      this.gameIsRunning = !this.gameIsRunning;
      document.getElementById('pause-button').innerText = 'RESUME';
    } else {
      this.gameIsRunning = !this.gameIsRunning;
      document.getElementById('pause-button').innerText = 'PAUSE';
      this.loop();
    }
    sleepMusic.pause();
    //console.log(sleepMusic.paused);
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
      this.animationID = window.requestAnimationFrame(timestamp => this.loop(timestamp));
    }
  };
}
