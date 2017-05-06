//TODO :: MULTIPLAYER

function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
	background(0,0,0);  
	frameRate(60); 
	text("Score : "+(points.toString()),0,0,20,20);
	fill(255);
}
var ballspeed = 5.6;

var paddleballcolor = "#5DADE2"
var mo = 6;
var y = window.innerWidth/2;
var x = window.innerHeight/2;
var bool = 0;
var points = 0;
var paw = 0;
function draw(){
	background(0);

	textSize(20);
	text("Score : "+points.toString(), 20, 60);
	text("A - Left : D - Right", 1100, 60);
	fill(paddleballcolor);
	if(bool == 0){
		y = y - ballspeed;
		x = x - ballspeed;
	}
	else if(bool == 1){
		y = y - ballspeed;
		x = x + ballspeed;
	}
	else if(bool == 2){
		y = y + ballspeed;
		x = x + ballspeed;
	}
	else if(bool == 3){
		y = y + ballspeed;
		x = x - ballspeed;
	}
	a = new Ball(x,y,20,20);
	a.show();
	if((a.y>0&&a.y<window.innerHeight) && (a.x > 0 &&a.x<9)){
		if(bool == 0){
			bool = 1;
		}
		else{
			bool = 2;
		}
	}
	else if((a.x>0&&a.x<window.innerWidth) && (a.y > 0 &&a.y<9)){//paddleopp for mp afterwards (TODO://///)
		if(bool==1){
			bool = 2;
		}
		else{
			bool = 3;
		}
	}
	else if((a.y>0&&a.y<window.innerHeight) && (a.x < window.innerWidth &&a.x>window.innerWidth-9)){
		if(bool == 2){
			bool = 3;
		}
		else{
			bool =0;
		}
	}
	//else if((a.x>0&&a.x<window.innerWidth) && (a.y < window.innerHeight &&a.y>window.innerHeight-9)){//playerside
	//	bool = 0;
	//}

	else if((a.x>px&&a.x<px+140) && (a.y < window.innerHeight &&a.y>window.innerHeight-9)){//playerside
		if(bool == 3){
			bool = 0;
			points += 5;
			if(points%20 == 0){
				ballspeed += 2;
			}
			text("Score : "+(points.toString()),0,0,20,20);
			console.log(points);
		}
		else{
			bool = 1;
			points += 5;
			text("Score : "+(points.toString()),0,0,20,20);
			if(points%20 == 0){
				ballspeed += 2;
			}
			console.log(points);
		}
	}
	else if(a.y>window.innerHeight+9){
		y = 0;
		x = 0;
		points = 0;
		confirm("YOu LOST.");
		setInterval(function(){},90);
	}

	p = new Paddle();
	p.show();
	p.keyPressed();
}

function Ball(x,y,r){
	this.x = x;
	this.y = y;
	this.radius = r;
	this.show = function(){
		ellipse(this.x,this.y,r*2,r*2);
	};
}
var px = window.innerWidth/2;
var py = window.innerHeight-16;
function Paddle(){
	this.px = px;
	this.py = py;
	this.show = function(){
		rect(this.px,this.py,140,90,4,4,4,4,4);
		fill("yellow");
	}
	this.left = function(){
		if(this.px < 0){
			this.px = 0;	
		}
		else{
			this.px = px - 12;
			px = px - 12;
		}
	};
	this.right = function(){
		if(this.px > window.innerWidth-140){
			this.px = window.innerWidth-140;	
		}
		else{
			this.px = px + 12;
			px = px + 12;
		}
	}

	this.keyPressed = function(){
		if (keyCode === 97) {
    		this.left();

  		} else if (keyCode === 100) {
    		this.right();
  		}
	}

}
