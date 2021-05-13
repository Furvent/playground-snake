
export class Rect {
    /**
     * 
     * @param width int
     * @param height int
     */
    constructor(width, height) {
        this.width = width
        this.height = height
    }
}

export class Circle {
    constructor(radius) {
        this.radius = radius
    }
}

export class Point {
    /**
     * 
     * @param x int
     * @param y int
     */
    constructor(x, y) {
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