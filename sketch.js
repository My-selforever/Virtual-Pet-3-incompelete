//Create variables here
var food;
var database;
var dog, sit, stand;
var change,read;
var state;
var room,garden,livingr,washroom;

var button, button2;
var d;
function preload()
{
  sit = loadImage("images/dogImg.png");
  stand = loadImage("images/dogImg1.png");
  room  = loadImage("images/Bed Room.png");
  garden = loadImage("images/Garden.png");
  livingr = loadImage("images/Living Room.png");
  washroom = loadImage("images/Wash Room.png");

}

function setup() {
  createCanvas(800, 700);
  dog = createSprite(400,500,10,10)
  dog.addImage(sit)
  dog.scale = 0.5
  database = firebase.database()
  var foodC= database.ref('Food/Count')
    foodC.on("value",Read,Backup)
    read = database.ref('GameState');
    read.on("value",function(data)
    {
      s = data.val();
    })
   
    d = new Date("2020-12-09T20:36:00.01");

    
}


function draw() {  
  background(0,255,0)
  drawSprites();
   button = createButton("Feed");
  button.position(400,350);
  button.mousePressed(function()
  {

    Update(1);    
  })

  button2 = createButton("refill");
  button2.position(600,350);
  button2.mousePressed(function()
  {

    Update(-1);    
  })
  if(food===0)
  {
     Update(-50)
  }


text("Food Remaining = " + food,400,100)
}

function Read(d)
{
   food = d.val()
   
}

function Update(v)
{ 
  if(food<=0)
  {
    button.hide();
    button2.hide();
  }
  else
  {
    button.show();
    button2.show();
  }
  database.ref('Food').set({
      'Count':food - v
  });
  
}

function Backup()
{
  console.log("error");
}

