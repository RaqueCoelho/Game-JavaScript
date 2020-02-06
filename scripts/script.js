const $canvas = document.querySelector('canvas');
const game = new Game($canvas);

window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    game.startGame(1);
  };
  document.getElementById('pause-button').onclick = function() {
    game.pauseGame();
  };
  document.getElementById('level').onclick = function() {
    game.startGame(2);
  };
};
