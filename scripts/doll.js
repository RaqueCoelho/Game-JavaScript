class CharacterDoll {
  constructor(game) {
    this.game = game;
    this.col = 300;
    this.width = 90;
    this.height = 130;
    this.row = 460;
    this.image = new Image();
    this.imageUrl = './images/hiclipart.com.png';
  }

  moveRight() {
    if (this.col <= 700) {
      this.col += 30;
    }
  }

  moveLeft() {
    if (this.col >= 40) {
      this.col -= 30;
    }
  }
  drawDoll() {
    this.image.src = this.imageUrl;
    this.game.context.drawImage(this.image, this.col, this.row, this.width, this.height);
  }
}
