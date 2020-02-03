window.addEventListener('keydown', event => {
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      doll.moveLeft();
      drawEverything();
      console.log('left');
      break;
    case 39:
      doll.moveRight();
      drawEverything();
      console.log('right');
      break;
  }
});

//creat movement

function drawEverything() {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  drawBackground();
  doll.drawDoll();
  for (let obstacle of obstacles) {
    obstacle.drawobstacle();
  }
  for (let point of points) {
    point.drawpoints();
  }
}

//draw car

const loop = timestamp => {
  drawEverything();
  runLogic();
  runLogicPoints();

  if (gameIsRunning) {
    window.requestAnimationFrame(loop);
  }
};
