class Player {
constructor (){
this.index = null ;
this.name ="";  
this.distance=0
}

getCount(){
    var playerCountRef = dataBase.ref("playerCount");
    playerCountRef.on("value", function(data){
    playerCount = data.val();
    console.log(playerCount);
    })     
}

updateCount(count){
    dataBase.ref("/").update({
        playerCount:count
    });
}


updatePlayer(){
var playerIndex = "players/player" + this.index; 
var playerDetail = {
     Name: this.name, 
 distance:this.distance    
}   
dataBase.ref(playerIndex).update(playerDetail);
}

static getAllPlayerInfo(){
    var playersRef = dataBase.ref("players");
    playersRef.on("value", function(data){
        allPlayers = data.val();
    })
}
}