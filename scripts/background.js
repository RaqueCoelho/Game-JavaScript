class Background {
  constructor(game) {
    this.game = game;
  }

  draw() {
    //square purple
    const purpleRectWidth = 30;
    this.game.context.fillStyle = 'rgb(200, 201, 240)';
    this.game.context.fillRect(
      0,
      0,
      this.game.context.canvas.width,
      this.game.context.canvas.height
    );

    //purple line beggining
    this.game.context.fillStyle = 'rgb(200, 201, 240)';
    this.game.context.fillRect(0, 0, purpleRectWidth, this.game.context.canvas.height);

    //purple line end
    this.game.context.fillStyle = 'rgb(200, 201, 240)';
    this.game.context.fillStyle = this.game.context.fillRect(
      this.game.context.canvas.width - purpleRectWidth,
      0,
      this.game.context.canvas.width,
      this.game.context.canvas.height
    );
  }
}
