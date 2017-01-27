var bird;
var pipes = [];
var score;
var menu;

function preload()
{
  // load image
  img = loadImage("img/yo2.png");
  imgBackground = loadImage("img/sky.jpg");

}

function setup() {
	createCanvas(400, 600);
	bird = new Bird();
	pipes.push(new Pipe());
    score = new Score();
    menu = new Menu();
}

function draw() {
    push();
	background(255);
    image(imgBackground, 0, 0);
        
	for (var i = pipes.length-1; i >= 0; i--){
		pipes[i].show();
		pipes[i].update();

		if(pipes[i].hits(bird)){
			console.log("HIT");
		}
        if(pipes[i].score(bird)){
            
            score.update (score.score++);
        }

		//if the pipes are off the screen, delete them
		if (pipes[i].offScreen()){
			//splice delete an element from the array
			pipes.splice(i, 1);
		}
	}
    score.show();
	bird.update();
	bird.show();

	if(frameCount % 80 == 0){
		pipes.push(new Pipe());
	}
    
    menu.update();
	
    if(menu.activated == true){
        menu.show();
    }else{
        menu.close();
    }
}

function mousePressed(){
    
    //TODO: Working fine on PC by clicking but not on phone/tablet by tapping.
	bird.up();
    if(menu.activated == true){
        menu.click();
    }
}