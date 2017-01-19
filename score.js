function Score() {
    this.y = height / 2;
    this.x = 64;
    this.score = 0

    //Show the score
    this.show = function () {
        fill("green");
        rect(10, 10, 40, 40);
        fill("black");
        textAlign(CENTER)
        textSize(25);
        text(this.score, 30, 40);

    }

    //Update de score
    this.update = function (i) {

        this.score++;
        //Not needed to add more text in the update
        // text(this.score + i, 20, 30);
    }
}
