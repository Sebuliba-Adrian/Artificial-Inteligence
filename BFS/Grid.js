class Grid{

    constructor(grid=[]) {
        this.grid = grid;
    }
    draw() {
        let canvas = document.getElementById("myCanvas");
        let ctx    = canvas.getContext("2d");
        
        for (let i = 0; i < this.grid.length; i++) {
            const row = this.grid[i];
            for (let j = 0; j < row.length; j++) {
        
                let rectange = new Rectangle(i, j);
                switch (this.grid[i][j]) {
                    case 0:
                        rectange.setColor('#AAAAAA');
                        rectange.draw(ctx);
                        break;
                    case 1:
                        rectange.setColor('#FF0000');
                        rectange.draw(ctx);
                        break;
                    case 2:
                        rectange.setColor('#00FF00');
                        rectange.draw(ctx);
                        break;
                    default:
                        break;
                }
            }
        }  
    }
}