function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
	background(0,0,0);
}
var xroot = window.innerWidth/2;
var yroot = window.innerHeight/2;

var xroots = []
var yroots = []

function draw(){

	background(0);
	var sun = new Sun(width/2,height/2,40,40);
	sun.show();
	var planet = new Planet(,40,40);
	planet.show();

}

function Sun(xpush,ypush,r,r){
	this.x = xpush;
	this.y = ypush;
	xroot = xpush;
	yroot = ypush;
	this.radius = r;
	this.show = function(){
		fill("yellow");
		ellipse(this.x,this.y,r*2,r*2);
	}
}

function Planet(xpush,ypush,r,r){
	this.x = xpush;
	this.y = ypush;
	this.radius = r;
	this.show = function(){
		fill("white");
		ellipse(this.x,this.y,r*2,r*2);
	}
}