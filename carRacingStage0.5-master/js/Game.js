class Game {
  constructor(){
    this.control = true;
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1=createSprite(700,200,60,60);
    car2=createSprite(900,200,60,60);
    car3=createSprite(1100,200,60,60);
    car4=createSprite(1300,200,60,60);

    cars=[car1,car2,car3,car4];
  }

  play(){
    form.hide();
    Player.getPlayerInfo();
    player.getCarsEnd();
    if(allPlayers!==undefined){
      //background(198, 135, 103);
      image(track, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
      var index = 0;
      var x = 0;
      var y;
      car1.addImage(cr1);
      car2.addImage(cr2);
      car3.addImage(cr3);
      car4.addImage(cr4);
      for(var plr in allPlayers){
        index++;
        x=x + 220;
        y=displayHeight-allPlayers[plr].distance;
        cars[index-1].x =x;
        cars[index-1].y =y;
        if(index===player.index){
          cars[index-1].shapeColor="red";
          camera.position.x=displayWidth/2;
          camera.position.y=cars[index-1].y;
        }
      }
    }
    if(keyDown(UP_ARROW)&&player.index!==null && this.control === true){
      player.distance+=20;
      player.update();
    }
    if (player.distance > 3860) {
      gameState = 2;
      this.control = false;
      //game.update(gameState);
      player.rank++;
      Player.updateCars(player.rank);
    }
    drawSprites();
  }

  end() {
    console.log(player.rank);
  }
}
