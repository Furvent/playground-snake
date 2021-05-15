import Draw from './render/draw.mjs'
import * as fig from './render/figure.mjs'
import Game from './snakev1/game.mjs'

document.onload = init();

function init() {
    console.log("Initialisation")
    const canvas = document.getElementById('renderer')
    const ctx = canvas.getContext('2d')
    const draw = new Draw(ctx, canvas.width, canvas.height, "black")
    const game = new Game(draw)
    game.init()
    // test(draw)
}

 function test(draw) {
    const rect = new fig.Rect(150, 100)
    draw.fillRect(new fig.Point(10, 10), rect, "purple")
    draw.setColor("red")
    const rect2 = new fig.Rect(50, 80)
    draw.fillRect(new fig.Point(300, 250), rect2, "purple")
    draw.setColor("blue")
    draw.rect(new fig.Point(400, 250), rect2)
    draw.setColor("yellow")
    const circle = new fig.Circle(85)
    draw.fillCircle(new fig.Point(90, 400), circle.radius)
    draw.line({x: 0, y: 0}, {x: 400, y: 450}, "green")
 }

