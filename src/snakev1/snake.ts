import { Point } from "../render/figure.js";

export class Snake {
  length: number;
  positions: Point[];
  direction: Direction;
  constructor(length: number, initPos: Point[]) {
    this.length = length;
    this.positions = initPos;
    this.direction = Direction.RIGHT;
    this.initDirectionInput();
  }

  move() {
    switch (this.direction) {
      case Direction.LEFT:
        this.moveWithVector({ x: -1, y: 0 });
        break;
      case Direction.TOP:
        this.moveWithVector({ x: 0, y: -1 });
        break;
      case Direction.RIGHT:
        this.moveWithVector({ x: 1, y: 0 });
        break;
      case Direction.BOTTOM:
        this.moveWithVector({ x: 0, y: 1 });
        break;
      default:
        break;
    }
  }
  moveWithVector(vector: Point) {
    let lastX = 0;
    let lastY = 0;
    this.positions.forEach((pos, index) => {
      lastX = pos.x;
      lastY = pos.y;
      if (index === 0) {
        pos.x += vector.x;
        pos.y += vector.y;
      } else {
        pos.x = lastX;
        pos.y = lastY;
      }
    });
    console.log("After moveWithVector, snake positions: ", this.positions);
  }

  initDirectionInput() {
    document.addEventListener("keyup", (event: KeyboardEvent) => {
      console.log("touch pressed: ", event.key);
      switch (event.key) {
        case "ArrowUp":
          this.direction = Direction.TOP;
          break;
        case "ArrowRight":
          this.direction = Direction.RIGHT;
          break;
        case "ArrowDown":
          this.direction = Direction.BOTTOM;
          break;
        case "ArrowLeft":
          this.direction = Direction.LEFT;
          break;
      }
    });
  }
}

export enum Direction {
  LEFT,
  TOP,
  RIGHT,
  BOTTOM,
}
