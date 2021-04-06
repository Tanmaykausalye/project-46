class Guideline{

 constructor(){

this.guideline = createElement('h4')
// in progress this.start = createButton('START PLAYING')

}

display(){

//message is to be made
this.guideline.html("1)=> You will be playing with a live player 2)=> You have to collect more fruits than your opponent to win the game 3)=> You will be able to move with ARROW keys 4)=> At last who won and a scoreboard will appear ", 10,10)

this.start.mousePressed(()=>{

    //this.start.hide()
    //this.input.hide()
    //player.name= this.input.value()
    
    //playerCount += 1
    
    //player.index = playerCount
    
    //player.update()
    //player.updateCount(playerCount)
    
    this.guideline.hide()

    game.start()

    })
    

}



}