var canvas=newFabric.canvas('mycanvas');
playerX=10;
playerY=10;
blockImageWidth=30;
blockImageheight=30;
var playerObject="";
var blockImageobject="";
function playerUpdate()
{
    fabric.image.fromURL("player.png", function(img)
    {
        playerObject=img;
        playerObject.scaletowidth(150);
        playerObject.scaletoheight(150);
        playerObject.set({
            topPlayer_Y,leftPlayer_X
        });
        canvas.add(playerObject);
    });
}
function newImage(getImage)
{
    fabric.image.fromURL(getImage,function(img)
    {
        blockImageobject=img;
        blockImageobject.scaletowidth(blockImageWidth);
        blockImageobject.scaletoheight(blockImageheight);
        blockImageobject.set({
            topPlayer_Y,leftPlayer_X;
        })
    });
    canvas.add(blockImageobject);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keypressed=e.keycode;
    console.log(keypressed);
    if(e.shiftkey==true&&keypressed=='80')
    {
        console.log("p and shift pressed together");
        blockImageWidth=blockImageWidth+10;
        blockImageheight=blockImageheight+10;
        document.getElementById("currentwidth").innerHTML=blockImageWidth;
        document.getElementById("currentheight").innerHTML=blockImageheight;
    }
    if(e.shiftkey&&keypressed=='70')
    {
        console.log("m and shift presed together");
        blockImageWidth=blockImageWidth-10;
        blockImageheight=blockImageheight-10;
        document.getElementById("currentwidth").innerHTML=blockImageWidth;
        document.getElementById("currentheight").innerHTML=blockImageheight;

    }
    if(keypressed=='38')
    {
        up();
        console.log("up");
    }
    if(keypressed=='40')
    {
        down();
        console.log("down");
    }
    if(keypressed=='37')
    {
        left();
        console.log("left");
    }
    if(keypressed=='39')
    {
        right();
        console.log("right");
    }
    if(keypressed=='87')
    {
        newImage('wall.jpg');
        console.log("w"); 
    }
    if(keypressed=='71')
    {
        newImage('ground.png');
        console.log("g"); 
    }
    if(keypressed=='76')
    {
        newImage('light_green.png');
        console.log("l"); 
    }
    if(keypressed=='84')
    {
        newImage('trunk.jpg');
        console.log("t"); 
    }
    if(keypressed=='87')
    {
        newImage('roof.jpg');
        console.log("r"); 
    }
    if(keypressed=='89')
    {
        newImage('yellow_wall.pnge');
        console.log("y"); 
    }
    if(keypressed=='87')
    {
        newImage('dark_green.png');
        console.log("d"); 
    }
    if(keypressed=='85')
    {
        newImage('unique.png');
        console.log("u"); 
    }
    if(keypressed=='67')
    {
        newImage('cloud.jpg');
        console.log("c"); 
    }
}
function up()
{
    if(playerY>=0)
    {
        playerY=playerY-blockImageheight;
        console.log("blockImageheight= "+blockImageheight);
        console.log("when up arrow key is pressed, X= "+playerX+" ", Y=""+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function down()
{
    if(playerY<=500)
    {
        playerY=playerY-blockImageheight;
        console.log("blockImageheight= "+blockImageheight);
        console.log("when up down key is pressed, X= "+playerX+" ", Y=""+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function right()
{
    if(playerX>0)
    {
        playerY=playerX-blockImageWidth;
        console.log("blockImageWidth= "+blockImageWidth);
        console.log("when Left arrow key is pressed, X= "+playerX+" ", Y=""+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function left()
{
    if(playerX<=850)
    {
        playerY=playerX-blockImageWidth;
        console.log("blockImageWidth= "+blockImageWidth);
        console.log("when Right arrow key is pressed, X= "+playerX+" ", Y=""+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}