const $canvas = document.querySelector('canvas');
const game = new Game($canvas);

window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    game.startGame();
  };
  document.getElementById('restart-button').onclick = function() {
    game.restartGame();
  };
  document.getElementById('pause-button').onclick = function() {
    game.pauseGame();
  };
  //console.log('button pressed');
};
