function setup(){
	createCanvas(400,400);
	background(0);
}
var r = 0;
var g = 0;
var b = 0;
function draw(){
	fill(random(255),random(255),random(255));
	var ball = new Ball(width/2,height/2,90,90);
	ball.show();
}

function Ball(xpush,ypush,width,height){

	this.show = function(){
		ellipse(xpush,ypush,width,height);
	}

}