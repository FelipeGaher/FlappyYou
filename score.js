function Score() {
    this.y = height / 2;
    this.x = 64;
    this.score = 0

    this.show = function () {
        text(this.score, 20, 30);
    }



    this.update = function (i) {
        this.score++;
        text(this.score + i, 20, 30);
    }
}
