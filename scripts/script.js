const $canvas = document.querySelector('canvas');
const game = new Game($canvas);

window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    game.startGame();
    document.getElementById('pause-button').onclick = function() {
      game.pauseGame();
    };
  };
};
