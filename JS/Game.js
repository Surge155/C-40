class Game{
    constructor(){

    }

   getState(){
        var gameStateInfo = database.ref('gameState');
        gameStateInfo.on("value", (data)=>{
            gameState = data.val(); 
        })
   }

   update(state){
       database.ref('/').update({
            gameState : state
       })
   }

   start(){
    if(gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
    }
        car1 = createSprite(500,200);
        car1.addImage(car1I);
        car2 = createSprite(520,200);
        car2.addImage(car2I);
        car3 = createSprite(540,200);
        car3.addImage(car3I);
        car4 = createSprite(560,200);
        car4.addImage(car4I);
        cars = [car1,car2,car3,car4];
    
   }

   play(){
    form.hide();
    //textSize(30);
   // text(" Game Start", 120,100);
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
      //  var display_position = 130;
        
        background(groundI); 
      image(trackI,0,-displayHeight * 4,displayWidth,displayHeight * 5); 

      var index = 0;
      var x = 350;
      var y = 0;
        for(var plr in allPlayers){
            index = index + 1;
            x = x + 250;
            y = displayHeight - allPlayers[plr].distance;
            
            cars[index-1].x = x;
            cars[index-1].y = y;

            if(index === player.index){
               cars[index-1].shapeColor = "red";
               camera.position.x = displayWidth/2;
               camera.position.y = cars[index-1].y;
               fill("yellow");
               stroke("red");
               strokeWeight(10);
               ellipse(cars[index-1].x,cars[index-1].y,60,60);
               
            }
            else{
                cars[index-1].shapeColor = "black";
            }
            
            
            //display_position = display_position + 20;
          //  textSize(15);
          //  text(allPlayers[plr].name + " : " + allPlayers[plr].distance,120,display_position);   
        }

        
    }
    
    if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance += 10;
        player.update();
    }

    if(player.distance > 3860){
        gameState = 2;
    }

    drawSprites();
   }

   end(){
        console.log("Game Ended");

   }


}