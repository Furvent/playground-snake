import Draw from "./render/draw.js";
import Game from "./snakev1/game.js";

console.log("MAIN")
document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    init();
  }
}

function init() {
  console.log("Game initialisation");
  const canvas = document.getElementById("renderer") as HTMLCanvasElement;
  if (!canvas) console.error("No canvas loaded");
  else {
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const draw = new Draw(ctx, canvas.width, canvas.height, "black");
    const game = new Game(draw);
    game.init();
    // test(draw)
  }
}

function test(draw: Draw) {
  draw.line({ x: 0, y: 0 }, { x: 400, y: 450 }, "green");
}
