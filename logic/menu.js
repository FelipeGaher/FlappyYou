function Menu() {
    this.y = height - 20;
    this.x = width - 20;
    this.actiated = false;
    this.startButton;
    this.creditButton;
    this.exitButton;
    
    this.startClick =false;
    this.creditClick =false;
    this.exitClick =false;

    
    this.show = function () {

        var menuColor = color('rgba(180, 50, 50, 0.8)')
        var botons = color('blue')
        var letters = color('rgba(180, 50, 50, 1)')

        noStroke();
        fill(menuColor);
        rect(10, 10, this.x, this.y);
        this.actiated = true;

        stroke(255);
        fill(botons);
        this.startButton = rect(100, 100, 200, 40);
        noStroke();
        fill(letters);
        textSize(25);
        text('START', 200, 130);
        stroke(255);
        fill(botons);
        this.creditButton = rect(100, 300, 200, 40);
        noStroke();

        fill(letters);
        textSize(25);
        text('CREDITS', 200, 330);
        stroke(255);
        fill(botons);
        this.exitButton = rect(100, 500, 200, 40);
        noStroke();

        fill(letters);
        textSize(25);
        text('EXIT', 200, 530);

    }


    this.update = function () {
        //START
        if(mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 140 ){
            
            this.startClick = true;

        }else{
            this.startClick = false;
        }
        
         //CREDITS
        if(mouseX > 100 && mouseX < 300 && mouseY > 300 && mouseY < 340 ){
            
            this.creditClick = true;
                    stroke(100);

        }else{
            this.creditClick = false;
        }
        
         //EXIT
        if(mouseX > 100 && mouseX < 300 && mouseY > 500 && mouseY < 540 ){
            
            this.exitClick = true;
                    stroke(100);

        }else{
            this.exitClick = false;
        }

    }
    
    this.click = function() {
        // Start is clicked
        if (this.startClick == true) {
            console.log("onStartButton");
        }
        // Credits is clicked
        if (this.creditClick == true) {
            console.log("onCreditsButton");
        }
        //Exit is clicked
        if (this.exitClick == true) {
            console.log("onExitButton");
        }
    }
    
}
