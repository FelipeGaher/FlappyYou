function ExtraButtons() {
    this.y = height;
    this.x = width;
    this.menuShown = false;
    this.menuClicked = false;

    //Show the buttons
    this.show = function () {
        fill("green");
        rect(this.x-50, 10, 40, 40);
        fill("black");
        textAlign(CENTER)
        textSize(25);
        text("III", this.x-30,40);

    }

    //Update - Manage when the button is clicked or tapped
    this.update = function () {
        //START
        if(mouseX > this.x-50 && mouseX < this.x-10 && mouseY > 50 && mouseY < 140 ){
            console.log("BUTTON!!!!")
            this.menuClicked = true;

        }else{
            this.menuClicked = false;
        }
    }
    
    //TODO: Should display the Menu
    //Click functionality
    this.click = function() {
        // Start is clicked
        if (this.menuClicked == true) {
            console.log("onStartButton");
        }
        
    }
    
}
