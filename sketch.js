var dog
var happyDog
var database
var foodS
var foodStock
var happydogimg
var dogimg


function preload()
{
  dogimg=loadImage("images/dogImg.png")
  happydogimg=loadImage("images/dogImg1.png")
}

function setup() { 
  createCanvas(500, 500);
 
  database=firebase.database
  dog = createSprite(250,250,50,70);
  dog.addImage(dogimg)
  database.ref("food").on("value",readStock)
}


function draw() {  
background(46,139,87)

 if(KeyWentDown(UP_ARROW)){
   writeStock(foodS)
   dog.addImage(dogHappy)
   }
  drawSprites();
  textsize(5)
  fill("white")
  text("Note:Press up arrow key to feed the dog milk!",50,30)

}
function readStock(data){
  foodS=data.val()
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref("/").update({
    food:x
  })
}



