const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var w1,canvas,boy,um;
var t1,t2,t3,t4;
function preload(){
    w1=loadAnimation("images/Walking Frame/walking_8.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_1.png");
    t1=loadImage("images/thunderbolt/1.png");
    t2=loadImage("images/thunderbolt/2.png");
    t3=loadImage("images/thunderbolt/3.png");
    t4=loadImage("images/thunderbolt/4.png");
}

function setup(){
    canvas=createCanvas(400,800);
    boy=createSprite(200,630,200,300);
    boy.addAnimation("walking",w1);
    boy.scale=0.5;
    engine = Engine.create();
    world = engine.world;
    
    um=new Umbrella(200,400,200);
}

function draw(){
    Engine.update(engine);
    background("Black");
    um.display();
    drawSprites();
}   

