function Score() {
    this.y = height / 2;
    this.x = 64;
    this.score = 0

    //Show the score
    this.show = function () {
        text(this.score, 20, 30);
    }
    
    //Update de score
    this.update = function (i) {
        this.score++;
        text(this.score + i, 20, 30);
    }
}
