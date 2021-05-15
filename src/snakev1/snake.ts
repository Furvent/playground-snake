import { Point } from "../render/figure.js";

export class Snake {
  length: number;
  positions: Point[];
  direction: Direction;
  constructor(length: number, initPos: Point[]) {
    this.length = length;
    this.positions = initPos;
    this.direction = Direction.RIGHT;
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
    this.positions.forEach((pos) => {
      pos.x += vector.x;
      pos.y += vector.y;
    });
  }
}

export enum Direction {
  LEFT,
  TOP,
  RIGHT,
  BOTTOM,
}
