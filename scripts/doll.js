class CharacterDoll {
  constructor(row) {
    this.row = row;
    this.width = 250;
    this.height = 250;
    this.col = 7;
    this.score = 0;
  }

  moveRight() {
    this.col++;
    console.log('right');
  }

  moveLeft() {
    this.col--;
  }

  drawDoll() {
    const image = new Image();
    const imageUrl = '/images/hiclipart.com.png';
    image.src = imageUrl;

    context.drawImage(image, this.col * GRID_SIZE, this.row * GRID_SIZE, this.width, this.height);
  }
}

const doll = new CharacterDoll(18.5);
