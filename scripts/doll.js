class CharacterDoll {
  constructor(game) {
    this.game = game;
    this.col = 450;
    this.width = 120;
    this.height = 180;
    this.row = 650;
    this.image = new Image();
    this.imageUrl = './images/hiclipart.com.png';
  }

  moveRight() {
    if (this.col <= 860 - this.width) {
      this.col += 20;
    }
  }

  moveLeft() {
    if (this.col >= 40) {
      this.col -= 20;
    }
  }
  drawDoll() {
    this.image.src = this.imageUrl;
    this.game.context.drawImage(this.image, this.col, this.row, this.width, this.height);
  }
}
