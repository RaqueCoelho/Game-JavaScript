const snoreAudio = new Audio('./Audio/snore_audio.mp3');
const wakeupAudio = new Audio('./Audio/bocejo (online-audio-converter.com).mp3');

class Scoreboard {
  constructor(game) {
    this.game = game;
    this.score = 0;
    this.$scoreSpan = document.querySelector('.score');
    //console.dir(this.$scoreSpan);
  }

  addScore() {
    this.game.doll.score += 1;
    wakeupAudio.play();
  }

  takeScore() {
    this.game.doll.score -= 1;
    snoreAudio.play();
  }

  clearScore() {
    this.game.doll.score = 0;
  }

  paint() {
    const scoreText = this.game.doll.score;
    this.$scoreSpan.innerText = scoreText;
  }
}
