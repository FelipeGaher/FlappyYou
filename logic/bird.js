function Bird() {
    this.y = height / 2;
    this.x = 64;

    this.gravity = 0.5;
    this.lift = -15
    this.velocity = 0;

    //TODO: Change the image to a functionality where
    this.preload = function(){
        img = loadImage(preLoadImg("yo"));
    }
    
    this.preLoadImg =function(name){
        return "img/"+name+".png"
    }
    
    
    this.show = function () {
        //fill(255);
       // ellipse(this.x, this.y, 32, 32);
        image(img, this.x, this.y, 50, 50);
    }


    this.up = function () {

        this.velocity += this.lift;

    }

    this.update = function () {
        this.velocity += this.gravity;
        //Air Resistance
        this.velocity *= 0.9;
        this.y += this.velocity;

        //If the obj is bigger than the height
        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }

        //If the obj is bigger than the height
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }
}
