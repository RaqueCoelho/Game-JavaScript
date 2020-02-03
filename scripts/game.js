function drawBackground() {
  //square purple
  context.fillStyle = 'rgb(200, 201, 240)';
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);

  //purple line beggining
  const greenRectWidth = 30;
  context.fillStyle = 'rgb(200, 201, 240)';
  context.fillRect(0, 0, greenRectWidth, context.canvas.height);

  //purple line end
  context.fillStyle = 'rgb(200, 201, 240)';
  context.fillStyle = context.fillRect(
    context.canvas.width - greenRectWidth,
    0,
    context.canvas.width,
    context.canvas.height
  );

  //white line beggining
  const whiteRectWidth = 10;
  context.fillStyle = 'white';
  context.fillRect(40, 0, whiteRectWidth, context.canvas.height);

  //white line end
  context.fillStyle = 'white';
  context.fillRect(
    context.canvas.width - greenRectWidth - whiteRectWidth,
    0,
    whiteRectWidth,
    context.canvas.height
  );
}
