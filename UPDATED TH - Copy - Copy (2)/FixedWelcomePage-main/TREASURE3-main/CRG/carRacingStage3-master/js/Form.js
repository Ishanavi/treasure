class Form {

  constructor() 
  {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h32');
    this.title = createElement('h42');
    this.reset = createButton('Reset');
  }

  hide()
  {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display()
  {
    background(bg2);

    this.title.html("Underwater Treasure Race");
    this.title.position(displayWidth/2 - 180, 0);

    this.input.position(displayWidth/2 - 150 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 -90, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 100, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
