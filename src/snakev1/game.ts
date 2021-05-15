import Draw from "../render/draw.js"
import { Point } from "../render/figure.js"
import { config } from "./config.js"
import { Snake } from "./snake.js"

export default class {
  draw: Draw
  area: Point[]
  snake: Snake
    constructor(draw: Draw) {
        this.draw = draw
        this.area = this.initArea(config.area.x, config.area.y)
        this.snake = new Snake(config.snake.length, config.snake.initPos)
    }

    init() {
        this.drawArea()
        setInterval(() => {
            console.log('update loop called')
            this.update()
            this.renderer()
        }, 500)
    }

    initArea(x: number, y: number): Point[] {
        const pointArray: Point[] = []
        for (let index = 0; index < x; index++) {
            for (let indexY = 0; indexY < y; indexY++) {
              pointArray.push({x, y});
            }
        }
        return pointArray
    }

    update() {
        this.snake.move()
    }

    renderer() {
        this.draw.clear()
        this.drawArea()
        this.drawSnake()
    }

    drawArea() {
        // First draw rect
        const pos = { x: config.margin.left, y: config.margin.top }
        const rectDimension = {
            width: config.cellWidth * config.area.x,
            height: config.cellWidth * config.area.y
        }
        this.draw.rect(pos, rectDimension, "purple")
        // Draw each line
        const lineWidth = config.cellWidth * config.area.x
        for (let index = 0; index <= config.area.x; index++) {
            const posBegin = {
                x: config.margin.left,
                y: config.margin.top + index * config.cellWidth
            }
            const posEnd = {
                x: config.margin.left + lineWidth,
                y: config.margin.top + index * config.cellWidth
            }
            this.draw.line(posBegin, posEnd, "grey")
        }
        // Draw each column
        const lineHeight = config.cellWidth * config.area.y
        for (let index = 0; index <= config.area.y; index++) {
            const posBegin = {
                x: config.margin.left + index * config.cellWidth,
                y: config.margin.top
            }
            const posEnd = {
                x: config.margin.left + index * config.cellWidth,
                y: config.margin.top + lineHeight
            }
            this.draw.line(posBegin, posEnd, "grey")
        }
    }

    drawSnake() {
        this.snake.positions.forEach(pos => {
            const startDrawPos = {
                x: config.margin.left + config.cellWidth * pos.x,
                y: config.margin.top + config.cellWidth * pos.y,
            }
            const rectDimension = {
                width: config.cellWidth,
                height: config.cellWidth,
            }
            this.draw.fillRect(startDrawPos, rectDimension, "green")
        })
    }
}