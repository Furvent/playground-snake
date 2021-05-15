
export class Rect {
  width: number
  height: number
  constructor(width: number, height: number) {
      this.width = width
      this.height = height
  }
}

export class Circle {
  radius: number
  constructor(radius: number) {
      this.radius = radius
  }
}

export class Point {
  x: number
  y: number
  constructor(x: number, y: number) {
      this.x = x
      this.y = y
  }
}

// function setInitPos(fig, pos) {
//     if (pos?.x && pos?.y) {
//         fig.pos = pos;
//     } else {
//         fig.pos = new Point(0, 0);
//     }
// }