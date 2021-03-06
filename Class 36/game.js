class Game {
    constructor() {

    }

    getState(){
        var gamestateRef = dataBase.ref("gameState");
        gamestateRef.on("value", function(data){
        gameState = data.val();
        console.log(gameState);
        }) 
    }


    updateState(state) {
        dataBase.ref("/").update({gameState:state})
    }

    async start(){
        console.log("start entered");
        console.log("GameState= "+gameState);
        player = new Player();
        var playerCountREf = await dataBase.ref("playerCount").once("value")
        if (playerCountREf.exists()){
        playerCount = playerCountREf.val();    
        player.getCount();    
        }
        if (gameState === 0){
        clear();    
        form = new Form();
        form.display();    
        } else{
            console.log("entered in else");
        }   
        oneCar = createSprite (100, 200);
        oneCar.addImage (carOne)
        twoCar = createSprite (300, 200);
        twoCar.addImage (carTwo)
        threeCar = createSprite (500, 200);
        threeCar.addImage (carThree)
        fourCar = createSprite (700, 200);
        fourCar.addImage (carFour)
        //oneCar.visible = false
        //twoCar.visible = false
        //threeCar.visible = false
        //fourCar.visible = false
        cars = [oneCar, twoCar, threeCar, fourCar];
    }
play(){
  form.hide();
  text("Game Start", 120, 100);
  Player.getAllPlayerInfo();
  if(allPlayers !== undefined){
  var xpos= 300; 
  var index = 0;
  background(ground)
  image(track, 0, - displayHeight * 4, width, displayHeight * 5)
  for (var pla in allPlayers){   
    index = index + 1;
  cars[index - 1].x = xpos;
  cars [index - 1].y = height - allPlayers [pla].distance
  if (player.index === (index)){
  fill ("blue")
  ellipse(cars[index - 1].x, cars[index - 1].y, 60, 60)
  cars [index - 1].shapeColor = "blue"
  camera.position.x = width / 2;
  camera.position.y = cars[index-1]
  }
 xpos = xpos + 200    
  }
  }
if (keyDown ("up") && player.index !== null) {
player.distance = player.distance + 100;
player.updatePlayer();    
}
if (player.distance === 4000){
gameState = 2;    
}
drawSprites ();
}    
}