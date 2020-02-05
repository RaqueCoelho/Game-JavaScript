const snoreAudio = new Audio('./Audio/snore_audio.mp3');
const wakeupAudio = new Audio('./Audio/rooster.mp3');

class Scoreboard {
  constructor(game) {
    this.game = game;
    this.score = 0;
    this.$scoreSpan = document.querySelector('.score');
    //console.dir(this.$scoreSpan);
  }

  addScore() {
    this.score += 1;
    wakeupAudio.play();
  }

  takeScore() {
    this.score -= 1;
    snoreAudio.play();
  }

  clearScore() {
    this.score = 0;
  }

  paint() {
    const scoreText = this.score;
    this.$scoreSpan.innerText = scoreText;
  }
}
