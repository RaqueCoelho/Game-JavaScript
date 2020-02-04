class Timer {
  constructor(game) {
    this.game = game;
  }

  setTimer() {
    let seconds = document.getElementById('timer-countdown').textContent;
    let countdown = setInterval(function() {
      seconds--;
      document.getElementById('timer-countdown').textContent = seconds;
      if (seconds <= 0) clearInterval(countdown);
    }, 1000);
  }
}
