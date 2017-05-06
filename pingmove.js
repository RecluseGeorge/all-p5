function setup(){
	createCanvas(window.innerWidth,window.innerHeight);
	background(0);
}

var x = 0;
var y = window.innerHeight/2;

function draw(){
	x = x + 9;
	background(0);
	for(var i=0;i<=6;i++){
		var m = i *16;
		var ping = new Ping(x+m,y,15+i+i,15+i+i);
		ping.show();
	}

	if(x>window.innerWidth){
		x = 0;
	}
}

function Ping(x,y,d,d){
	this.show = function(){
		ellipse(x,y,d,d);
	}
}