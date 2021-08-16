class Game {
  constructor()
  {
    this.scoreDis = createElement('h2');
    this.time = createElement('h3');
    
    this.gameOver = createElement('h5');

    this.rankDis = createElement('h4');
    this.rankDis1 = createElement('h6');
    this.rankDis2 = createElement('h7');
    this.rankDis3 = createElement('h8');

    this.name1 = createElement('h9');
    this.name2 = createElement('h10');
    this.name3 = createElement('h11');
    this.name4 = createElement('h12');

    this.score1 = createElement('h13');
    this.score2 = createElement('h14');
    this.score3 = createElement('h15');
    this.score4 = createElement('h16');

    this.time1 = createElement('h17');
    this.time2 = createElement('h18');
    this.time3 = createElement('h19');
    this.time4 = createElement('h20');
  }

  getState()
  {
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }




  update(state)
  {
    database.ref('/').update({
      gameState: state
    });
  }





  async start()
  {
    if(gameState === 0)
    {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists())
      {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }



  ///////////////////////////////////////////////////////////////////////////////////////////

    diver1 = createSprite(0,100);
    diver1.addImage("div1",diver1_img);
    
    diver2 = createSprite(0,300);
    diver2.addImage("div2",diver2_img);

    diver3 = createSprite(0,500);
    diver3.addImage("div3",diver3_img);

    diver4 = createSprite(0,700);
    diver4.addImage("div4",diver4_img);

    divers = [diver1, diver2, diver3, diver4];
    diver1.scale=0.6;
    diver2.scale=0.6;
    diver3.scale=0.6;
    diver4.scale=0.6;

    //////////////////////////////////////////////////////////////////////////////////////////

    treasure1 = createSprite(5380,330);
    treasure1.addImage("t1",t1);
  
    treasure2=createSprite(5380,480);
    treasure2.addImage("t2",t5);

    treasure3=createSprite(5380,620);
    treasure3.addImage("t3",t1);

    treasure4=createSprite(5380,180)
    treasure4.addImage("t4",t5);
    
    treasure1.scale=0.2;
    treasure2.scale=0.05;
    treasure3.scale=0.2;
    treasure4.scale=0.05;

    ///////////////////////////////////////////////////////////////////////////////////////

   
  }






  play()
  {
    form.hide();


    Player.getPlayerInfo();
    player.getDiversAtEnd();


    player.timer=player.timer+1;
    player.update();
    

    ////////////////////////////////////////////////////////////////////////////////////////
    



    if(allPlayers !== undefined)
    {
      background(track);
      image(track, -displayWidth,displayHeight,displayWidth*5, displayHeight);
      
     

      //index of the array
      var index = 0;
      

      //x and y position of the cars
      var x;
      var y = 25 ;
      

      for(var plr in allPlayers)
      {

        //add 1 to the index for every loop
        index = index + 1 ;
      


        //position the cars a little away from each other in x direction
        //You can change the 100 and set accordingly
        y = y + 150;
       


        //use data form the database to display the cars in y direction
        // y = displayHeight - allPlayers[plr].distance
        x = displayWidth + allPlayers[plr].distance;
        
        divers[index-1].x = x;
        divers[index-1].y = y;

        
      

  ///////////////////////////////////////////////////////////////////////////////////////////////
      
        if (index === player.index)
        {


          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
         
          divers[index - 1].shapeColor = "red";

          stroke(30);
          stroke("white");
          line(700,250,5370,250);
          line(700,560,5370,560);
          line(700,410,5370,410);
        

  //////////////////////////////////////////////////////////////////////////////////

         if(frameCount%50===0)
    {
      var obs2 = createSprite(random(1500,4050),random(160,650),10,10);
      obs2.scale=0.13;
      obs2.addImage(d2);
      obs2.lifetime=500;
      ob1G.add(obs2);

      for(var i=0;i<ob1G.length;i++)
  {

      if(divers[index-1].isTouching(ob1G.get(i)))
    {
      player.score=player.score+10;
      player.update();
      ob1G.get(i).destroy();
      console.log("isTouching");
    }

  }
       }
         
  
  ///////////////////////////////////////////////////////////////////////

  if(frameCount%50===0)
  {
    var obs1 = createSprite(random(1500,4050),random(160,650),10,10);
    obs1.scale=0.1;
    obs1.addImage(d1);
    obs1.lifetime=500;
    ob2G.add(obs1);

    for(var i=0;i<ob2G.length;i++)
{

    if(divers[index-1].isTouching(ob2G.get(i)))
  {
    player.score=player.score+10;
    player.update();
    ob2G.get(i).destroy();
    console.log("isTouching");
  }

}
     }

//////////////////////////////////////////////////////////////////////////////////

if(frameCount%50===0)
{
  var obs4 = createSprite(random(1500,4050),random(160,650),10,10);
  obs4.scale=0.3;
  obs4.addImage(r2);
  obs4.lifetime=500;
  ob4G.add(obs4);

  for(var i=0;i<ob4G.length;i++)
{

  if(divers[index-1].isTouching(ob4G.get(i)))
{
  player.score=player.score+10;
  player.update();
  ob4G.get(i).destroy();
  console.log("isTouching");
}

}
   }

////////////////////////////////////////////////////////////////////////////////////

if(frameCount%50===0)
{
  var obs5 = createSprite(random(1500,4050),random(160,650),10,10);
  obs5.scale=0.6;
  obs5.addImage(mb);
  obs5.lifetime=500;
  ob5G.add(obs5);

  for(var i=0;i<ob5G.length;i++)
{

  if(divers[index-1].isTouching(ob5G.get(i)))
{
  player.score=player.score+20;
  player.update();
  ob5G.get(i).destroy();
  console.log("isTouching");
}

}
   }

///////////////////////////////////////////////////////////////////////////////////////



          camera.position.y = displayHeight/2;
          camera.position.x = divers[index-1].x;

        }
       

        this.scoreDis.html("Score: " + player.score);
        this.scoreDis.position(displayWidth/2-650,5);

        this.time.html("Time: " + player.timer + " seconds");
        this.time.position(displayWidth/2-650,20);



      }




    }




  /////////////////////////////////////////////////////////////////////////////////////





    if(keyIsDown(RIGHT_ARROW) && player.index !== null)
    {
      player.distance +=10
      player.update();
    }


    ////////////////////////////////////////////////////////////////////////////////////
   
    
    if(player.distance > 3860)
    {
      gameState = 2;
      player.rank +=1
      Player.updateDiversAtEnd(player.rank);
      player.update();

    }


    
    
    drawSprites();

    

  }




  end()
  {
    
    
    background(bg2);

    Player.getPlayerInfo();

    this.scoreDis.hide();
    this.time.hide();


    this.gameOver.html("GAME OVER!");
    this.gameOver.position(displayWidth/2-120,80);

    this.rankDis.html("Rank: " + allPlayers.player1.rank);
    this.rankDis.position(displayWidth/2-350,250);

    this.rankDis1.html("Rank: " + allPlayers.player2.rank);
    this.rankDis1.position(displayWidth/2-150,230);

    this.rankDis2.html("Rank: " + allPlayers.player3.rank);
    this.rankDis2.position(displayWidth/2+50,280);

    this.rankDis3.html("Rank: " + allPlayers.player4.rank);
    this.rankDis3.position(displayWidth/2+250,280);

    this.name1.html(allPlayers.player1.name);
    this.name1.position(displayWidth/2-350,210);

    this.name2.html(allPlayers.player2.name);
    this.name2.position(displayWidth/2-150,210);

    this.name3.html(allPlayers.player3.name);
    this.name3.position(displayWidth/2+50,210);

    this.name4.html(allPlayers.player4.name);
    this.name4.position(displayWidth/2+250,210);

    this.score1.html("Score: "+allPlayers.player1.score);
    this.score1.position(displayWidth/2-350,300);

    this.score2.html("Score: "+allPlayers.player2.score);
    this.score2.position(displayWidth/2-150,300);

    this.score3.html("Score: "+allPlayers.player3.score);
    this.score3.position(displayWidth/2+50,300);

    this.score4.html("Score: "+allPlayers.player4.score);
    this.score4.position(displayWidth/2+250,300);

    this.time1.html("Time Taken: "+allPlayers.player1.timer);
    this.time1.position(displayWidth/2-350,320);

    this.time2.html("Time Taken: "+allPlayers.player2.timer);
    this.time2.position(displayWidth/2-150,320);

    this.time3.html("Time Taken: "+allPlayers.player3.timer);
    this.time3.position(displayWidth/2+50,320);

    this.time4.html("Time Taken: "+allPlayers.player4.timer);
    this.time4.position(displayWidth/2+250,320);
    
    
  }





subs()
{
    sub1=createSprite(100,100,10,10);
    sub1.addImage("s1",sub);

    sub2=createSprite(100,230,10,10);
    sub2.addImage("s2",sub);

    sub3=createSprite(100,370,10,10);
    sub3.addImage("s3",sub);

    sub4=createSprite(100,500,10,10);
    sub4.addImage("s4",sub);

    sub1.scale=0.15;
    sub2.scale=0.15;
    sub3.scale=0.15;
    sub4.scale=0.15;
}





}
