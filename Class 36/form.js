class Form{
constructor() {
  this.input = createInput("Name");
  this.button = createButton("Go");
  this.greet = createElement('h2');
  this.restart = createButton('restart')
}

display(){
    console.log("enter")    
    var title = createElement('h2') ;
    title.html("Racing Game");   
    title.position(width / 2 - 100, 50);  
   
    this.input.position (width / 2 - 150, 200);
    this.button.position (width / 2 + 50, 200);
    this.restart.position (width - 100, 50)
    this.button.mousePressed(()=> {
      this.input.hide();
      this.button.hide();

      playerCount=playerCount+1;
      player.name = this.input.value();
      player.index = playerCount;
      player.updatePlayer();
      player.updateCount(playerCount);

      this.greet.html("Hello " +player.name);
      this.greet.position(width / 2 - 100, 200);

    })
      this.restart.mousePressed( ()=>{
      player.updateCount(0)
      game.updateState(0)
      game.start()
      })

}
hide(){
this.input.hide();
this.button.hide()  
this.greet.hide();
}
}
