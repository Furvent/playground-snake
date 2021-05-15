export class Snake {
  constructor(length, initPos) {
    this.length = length;
    this.positions = initPos;
    this.direction = EnumDir.RIGHT;
  }

  move() {
    switch (this.direction) {
      case EnumDir.LEFT:
        this.moveWithVector({ x: -1, y: 0 });
        break;
      case EnumDir.TOP:
        this.moveWithVector({ x: 0, y: -1 });
        break;
      case EnumDir.RIGHT:
        this.moveWithVector({ x: 1, y: 0 });
        break;
      case EnumDir.BOTTOM:
        this.moveWithVector({ x: 0, y: 1 });
        break;
      default:
        break;
    }
  }
  moveWithVector(vector) {
    this.positions.forEach((pos) => {
      pos.x += vector.x;
      pos.y += vector.y;
    });
  }
}

export const EnumDir = {
  LEFT: 1,
  TOP: 2,
  RIGHT: 3,
  BOTTOM: 4,
};
