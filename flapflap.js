var obs = new Array();

var meow = window.innerWidth;
var points = 0;
var mini= 200;
var maxi = 350;

function setup(){
	createCanvas(window.innerWidth,window.innerHeight);
	background(0);
	frameRate(30);
	append(obs,new Obstacle(random(mini,maxi),meow));
}

var bx = 90;
var by = window.innerHeight/2;
var birdsize = 40;

var jumpspeed = 9;
var yspeed = 4;

function draw(){
	background(0);
	var bird = new Bird(bx,by);
	bird.show();
	bird.keyDown();
	for(var i = 0;i<=obs.length-1;i++){
		if(obs[i].ow >= 0){obs[i].show();}
		else{obs.splice(i,1);}
	}
	append(obs,new Obstacle(random(400),meow+340))
	meow = meow+340;
	fill("yellow");
	text("Points : "+points,40,90);
	fill("white");
}

function Bird(x,y){
	this.show = function(){ellipse(x,y,birdsize,birdsize);}
	this.keyDown = function(){
		if(keyIsDown(ENTER)){
			by = by - jumpspeed;
			if(by<0){by = 0;}
		}
		else{
			by = by + yspeed;
			if(by>window.innerHeight){by = window.innerHeight;}
			else if(by<0){by = 0;}
		}
	}
}

obspeed = 4

function Obstacle(h,x){
	this.ow = x;
	this.show = function(){
		rect(this.ow,0,16,h);
		if( (bx>this.ow && bx<this.ow+16) && (by>0 && by<h) ){
			window.location.href = getURL();	
		}
		else if( (bx>this.ow && bx<this.ow+16) && (by>0+h+140 && by<h-140+window.innerHeight) ){
			window.location.href = getURL();
		}
		else if(bx>this.ow && bx<this.ow+16){
			points += 1;
			if(points%20 ==0){
				obspeed +=4;
			}
		}
		rect(this.ow,0+h+140,16,h-140+window.innerHeight);
		this.ow = this.ow-obspeed;
	}
}