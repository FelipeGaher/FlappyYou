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

    //Update
    this.update = function () {
        //START
        if(mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 140 ){
            
            this.menuClicked = true;

        }else{
            this.menuClicked = false;
        }
    }
    
    this.click = function() {
        // Start is clicked
        if (this.menuClicked == true) {
            console.log("onStartButton");
        }
        
        }
    }
}
