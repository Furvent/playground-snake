import { Point, Rect } from "./figure.js";

export default class Draw {
  ctx: CanvasRenderingContext2D;
  canvasWidth: number;
  canvasHeight: number;
  color: string;
  constructor(
    canvasCtx: CanvasRenderingContext2D,
    canvasWidth: number,
    canvasHeight: number,
    color = "black"
  ) {
    console.log(
      "Init drawer with width " + canvasWidth + " and height " + canvasHeight
    );
    this.ctx = canvasCtx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.color = color;
  }
  setColor(newColor: string) {
    this.color = newColor;
  }
  rect(pos: Point, rectDimension: Rect, color = this.color) {
    this.ctx.strokeStyle = color;
    this.ctx.beginPath();
    this.ctx.rect(pos.x, pos.y, rectDimension.width, rectDimension.height);
    this.ctx.stroke();
  }
  fillRect(pos: Point, rectDimension: Rect, color = this.color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(pos.x, pos.y, rectDimension.width, rectDimension.height);
  }
  circle(pos: Point, radius: number) {
    this.ctx.strokeStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(pos.x, pos.y, radius, 0, 2 * Math.PI);
    this.ctx.stroke();
  }
  fillCircle(pos: Point, radius: number) {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(pos.x, pos.y, radius, 0, 2 * Math.PI);
    this.ctx.fill();
  }
  line(posBegin: Point, posEnd: Point, color = this.color) {
    this.ctx.strokeStyle = color;
    this.ctx.beginPath();
    this.ctx.moveTo(posBegin.x, posBegin.y);
    this.ctx.lineTo(posEnd.x, posEnd.y);
    this.ctx.stroke();
  }
  clear() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }
}
