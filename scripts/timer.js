class Timer {
  constructor(game) {
    this.game = game;
    this.timeToLoose = 30;
    // this.$timer = document.getElementById('timer-countdown').textContent;
  }

  setTimer() {
    let countdown = setInterval(() => {
      // console.log('countdown');
      this.timeToLoose--;
      document.getElementById('timer-countdown').textContent = this.timeToLoose;
      if (this.timeToLoose <= 0) {
        this.timeToLoose = 30;
        this.game.pauseGame();
        alert(`TIMES'S UP. YOUR SCORE IS ${this.game.doll.score}. CLICK START TO PLAY AGAIN`);
        document.location.reload();
        clearInterval(countdown);
      }
    }, 1000);
  }
}
