class Scoreboard {
  constructor(game) {
    this.game = game;
    this.score = 0;
    this.$scoreSpan = document.querySelector('.score');
    //console.dir(this.$scoreSpan);
  }

  addScore() {
    this.score += 1;
  }

  takeScore() {
    this.score -= 1;
  }

  clearScore() {
    this.score = 0;
  }

  paint() {
    const scoreText = this.score;
    this.$scoreSpan.innerText = scoreText;
  }
}
