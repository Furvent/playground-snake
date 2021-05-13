export default class Draw {
    /**
     * 
     * @param canvasCtx
     * @param color Optional
     */
    constructor(canvasCtx, canvasWidth, canvasHeight, color = "black") {
        if (!canvasCtx) console.error("Cannot use drawer without canvas context.")
        else {
            console.log("Init drawer with width " + canvasWidth + " and height " + canvasHeight)
            this.ctx = canvasCtx
            this.canvasWidth = canvasWidth
            this.canvasHeight = canvasHeight
            this.color = color
        }
    }
    setColor(newColor) {
        this.color = newColor
    }
    rect(pos, rectDimension, color = this.color) {
        this.ctx.strokeStyle = color
        this.ctx.beginPath()
        this.ctx.rect(pos.x, pos.y, rectDimension.width, rectDimension.height)
        this.ctx.stroke()
    }
    fillRect(pos, rectDimension, color = this.color) {
        this.ctx.fillStyle = color
        this.ctx.fillRect(pos.x, pos.y, rectDimension.width, rectDimension.height)
    }
    circle(pos, radius) {
        this.ctx.strokeStyle = this.color
        this.ctx.beginPath()
        this.ctx.arc(pos.x, pos.y, radius, 0, 2 * Math.PI);
        this.ctx.stroke()
    }
    fillCircle(pos, radius) {
        this.ctx.fillStyle = this.color
        this.ctx.beginPath()
        this.ctx.arc(pos.x, pos.y, radius, 0, 2 * Math.PI);
        this.ctx.fill()
    }
    line(posBegin, posEnd, color = this.color) {
        this.ctx.strokeStyle = color
        this.ctx.beginPath()
        this.ctx.moveTo(posBegin.x, posBegin.y)
        this.ctx.lineTo(posEnd.x, posEnd.y)
        this.ctx.stroke()
    }
    clear() {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }
}