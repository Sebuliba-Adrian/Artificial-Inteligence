class Rectangle {
   #cellWidth  = 50;
   #cellHeight = 50;
   #color      = "#FF00F0";
    constructor(i, j) {
        this.i  = i;
        this.j  = j;
       
    }

    setColor(color="#FF00F0") {
        this.#color = color;
        
    }
    
    draw(ctx) {
        ctx.fillStyle = this.#color;
        ctx.beginPath();
        ctx.rect(this.j*(this.#cellWidth + 3), this.i*(this.#cellHeight + 3), this.#cellWidth, this.#cellHeight)
        ctx.closePath();
        ctx.fill();
    }

    
}