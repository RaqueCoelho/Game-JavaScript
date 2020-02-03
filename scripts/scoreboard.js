class Scoreboard {
  constructor(game) {
    this.game = game;

    this.$scoreSpan = document.querySelector('.score');
    //console.dir(this.$scoreSpan);
  }

  addScore() {
    this.game.doll.score += 1;
  }

  takeScore() {
    this.game.doll.score -= 1;
  }

  clearScore() {
    this.game.doll.score = 0;
  }

  paint() {
    const scoreText = this.game.doll.score;
    this.$scoreSpan.innerText = scoreText;
  }
}
