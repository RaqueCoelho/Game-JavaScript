const $canvas = document.querySelector('canvas');

window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    const game = new Game($canvas);
    game.startGame();
    document.getElementById('pause-button').onclick = function() {
      game.pauseGame();
    };
  };
};
