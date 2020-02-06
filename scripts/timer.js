class Timer {
  constructor(game) {
    this.game = game;
    this.timeToLoose = 30;
    // this.$timer = document.getElementById('timer-countdown').textContent;
  }

  setTimer() {
    this.countdown = setInterval(() => {
      // console.log(this.game.scoreBoard.score);
      if (this.game.gameIsRunning) {
        this.timeToLoose--;
      }

      document.getElementById('timer-countdown').textContent = this.timeToLoose;

      if (this.timeToLoose <= 0) {
        this.game.gameOver();

        this.timeToLoose = 30;

        // alert(`TIMES'S UP. YOUR SCORE IS ${this.game.scoreBoard.score}. CLICK LEVEL 1 OR LEVEL 2 TO PLAY AGAIN`);
        this.game.pauseGame();
        //document.location.reload();
        clearInterval(this.countdown);
      }
    }, 1000);
  }
}
