class Keyboard {
  constructor(game) {
    this.game = game;
  }
  setKeyboard() {
    window.addEventListener('keydown', event => {
      event.preventDefault();

      // React based on the key pressed
      switch (event.keyCode) {
        case 37:
          this.game.doll.moveLeft();
          console.log('left');
          break;
        case 39:
          this.game.doll.moveRight();
          console.log('right');
          break;
      }
    });
  }
}

//creat movement
