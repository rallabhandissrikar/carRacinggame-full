class Player {
  constructor(){
    this.index=null;
    this.name=name;
    this.distance=0;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  static getPlayerInfo(){
    database.ref("players").on("value",(data)=>{
      allPlayers=data.val();
    })
  }

  getCarsEnd() {
    var ref = database.ref("CarsAtEnd")
    ref.on("value", (data) => {
      this.rank = data.val();
    })
  }

  static updateCars(rank) {
    database.ref("/").update({
      CarsAtEnd : rank
    })
  }
}
