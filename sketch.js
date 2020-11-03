var fixedRect, movingRect 
function setup() {
   createCanvas(800,400);
    fixedRect=createSprite(600, 200, 50, 50);
    fixedRect.shapeColor="green";
    fixedRect.debug=true;
    fixedRect.velocityY=5;
    movingRect=createSprite(600,300,50,30);
    movingRect.shapeColor="green";
    movingRect.velocityY=-5;
    movingRect.debug=true; 
    }
     function draw() {
        background(255,255,255);
        //movingRect.x=mouseX;
        //movingRect.y=mouseY; 
        if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 
          && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 ){        
        //fixedRect.shapeColor="red";
        //movingRect.shapeColor="red";
        fixedRect.velocityY=fixedRect.velocityY *-1;
        movingRect.velocityY=movingRect.velocityY *-1;

        }
         else
        {
        //fixedRect.shapeColor="green";
         //movingRect.shapeColor="green";
        } 
        drawSprites(); 
        }
