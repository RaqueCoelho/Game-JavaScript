class Timer {
  constructor(game) {
    this.game = game;
    this.timeToLoose = 30;
    // this.$timer = document.getElementById('timer-countdown').textContent;
  }

  setTimer() {
    let countdown = setInterval(() => {
      // console.log('countdown');
      if (this.game.gameIsRunning) {
        this.timeToLoose--;
      }
      console.log(this.timeToLoose);
      document.getElementById('timer-countdown').textContent = this.timeToLoose;
      if (this.timeToLoose <= 0) {
        this.timeToLoose = 30;
        alert(`TIMES'S UP. YOUR SCORE IS ${this.game.scoreboard.score}. CLICK START TO PLAY AGAIN`);
        this.game.pauseGame();
        document.location.reload();
        clearInterval(countdown);
      }
    }, 1000);
  }
}
