class CharacterDoll {
  constructor(game) {
    this.game = game;
    this.col = 300;
    this.width = 350;
    this.height = 250;
    this.row = 900;
    this.score = 0;
    this.image = new Image();
    this.imageUrl = './images/hiclipart.com.png';
  }

  moveRight() {
    this.col += 50;
    console.log('right');
  }

  moveLeft() {
    this.col -= 50;
  }

  drawDoll() {
    this.image.src = this.imageUrl;
    this.game.context.drawImage(this.image, this.col, this.row, this.width, this.height);
  }
}
