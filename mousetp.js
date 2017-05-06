var ball  = null;
function setup(){
	createCanvas(window.innerWidth,window.innerHeight);
	background(0,0,0);
	ball = new Ball(mouseX,mouseY,90,90);
}

function draw(){
	background(0);
	ball.show();
	ball.update();
}

function Ball(xpush,ypush,width,height){
	this.pos = createVector(xpush,ypush);
	this.w = width;
	this.h = height;
	this.show = function(){
		ellipse(xpush,ypush,width,height);
	}
	this.update = function(){
		background(0);
		ellipse(mouseX,mouseY,90,90);
	}
}