
var Canvas=document.getElementById("Canvas");;
var ctx=Canvas.getContext("2d");
var x = 50;
var y = 50;
var shapeArray = [];
var collectable1=[];
var collectable2=[];
var collectable3=[];
var instruction;
var score = 3;


$(document).ready(function () {

    setup();
    document.getElementById("score").innerHTML = "Current Score:"+score;

    $(this).keypress(function(event) {
        Controller(event);

    });
});

function setup() {

   
    $.getJSON("JSON/BGplayer.JSON",function (data) {
            for (var i = 0; i < data.BGshapes.length; i++) {
                shapeArray.push(new Shapes(data.BGshapes[i].X, data.BGshapes[i].Y, data.BGshapes[i].H, data.BGshapes[i].W, data.BGshapes[i].C));
            }
            drawShapes();
        });
        shape1 = new Shapes(x, y, 50, 50, "#f5425d");//player controlled and bg shapes
        $.getJSON("JSON/Collectables.JSON",function (data) {
            for (var i = 2; i < data.Collectables.length; i++) {
                collectable1.push(new Shapes(data.Collectables[0].X, data.Collectables[0].Y, data.Collectables[0].H, data.Collectables[0].W, data.Collectables[0].C));

            }
            drawShapes();
        });
        $.getJSON("JSON/Collectables.JSON",function (data) {
            for (var i = 2; i < data.Collectables.length; i++) {
                collectable2.push(new Shapes(data.Collectables[1].X, data.Collectables[1].Y, data.Collectables[1].H, data.Collectables[1].W, data.Collectables[1].C));

            }
            drawShapes();
        });
        $.getJSON("JSON/Collectables.JSON",function (data) {
            for (var i = 2; i < data.Collectables.length; i++) {
                collectable3.push(new Shapes(data.Collectables[2].X, data.Collectables[2].Y, data.Collectables[2].H, data.Collectables[2].W, data.Collectables[2].C));

            }
            drawShapes();
        });

}

function Controller(event) {//based on examples from stackoverflow 
    var char = event.which || event.keyCode;
    switch(char){
        case 37:
            Left();
            break;
        case 38:
            Up();
            break;
        case 39:
            Right();
            break;
        case 40:
            Down();
            break;
    }
        
    var test = Collied(shape1,collectable1,collectable2,collectable3);//based off of example from Week11 Github
    var test2 = false;
    for(var i = 0; i < collectable1.length; i++)
    {

        test2 = Collied(shape1,collectable1[i]);
        if(test2==shape1)
        {
            break;
        }
        if(test && test2==true)
    {
        collectable1[i].setY(10000);
        collectable1[i].setX(10000);
        console.log("IF is working");
        score+=1;
        document.getElementById("score").innerHTML = "Current Score:"+score;

    }
        console.log(test2);
    }

    for(var i = 0; i < collectable2.length; i++)
    {

        test2 = Collied(shape1,collectable2[i]);
        if(test2==shape1)
        {
            break;
        }
        if(test && test2==true)
    {
        collectable2[i].setY(10000);
        collectable2[i].setX(10000);
        console.log("IF is working");
        score+=1;
        document.getElementById("score").innerHTML = "Current Score:"+score;

    }
        console.log(test2);
    }

    for(var i = 0; i < collectable3.length; i++)
    {

        test2 = Collied(shape1,collectable3[i]);
        if(test2==shape1)
        {
            break;
        }
        if(test && test2==true)
    {
        collectable3[i].setY(10000);
        collectable3[i].setX(10000);
        console.log("IF is working");
        score+=1;
    }
        console.log(test2);
    }
    if(score==6){
        document.getElementById("score").innerHTML = "YOU WIN!!!";

    }
    drawShapes();
}

function Up() {
    shape1.setY(shape1.Y - 15);
}

function Down() {
    shape1.setY(shape1.Y + 15);
}

function Left() {
    shape1.setX(shape1.X + 15);
}

function Right() {
    shape1.setX(shape1.X - 15);
}

function drawShapes() {
    ctx.clearRect(0, 0, 1000, 1000);

    for (var i = 0; i < shapeArray.length; i++) {
        ctx.fillStyle = shapeArray[i].C;
        ctx.fillRect(shapeArray[i].X, shapeArray[i].Y, shapeArray[i].H, shapeArray[i].W);
    }

    for (var i = 0; i < collectable1.length; i++) {
        ctx.fillStyle = collectable1[i].C;
        ctx.fillRect(collectable1[i].X, collectable1[i].Y, collectable1[i].H, collectable1[i].W);
    }
    for (var i = 0; i < collectable2.length; i++) {
        ctx.fillStyle = collectable2[i].C;
        ctx.fillRect(collectable2[i].X, collectable2[i].Y, collectable2[i].H, collectable2[i].W);
    }
    for (var i = 0; i < collectable3.length; i++) {
        ctx.fillStyle = collectable3[i].C;
        ctx.fillRect(collectable3[i].X, collectable3[i].Y, collectable3[i].H, collectable3[i].W);
    }
    ctx.fillStyle = shape1.C;
    ctx.fillRect(shape1.X, shape1.Y, shape1.H, shape1.W);

}
function Collied(object1, object2) {
    return !(
        ((object1.Y + object1.H) < (object2.Y)) ||
        (object1.Y > (object2.Y + object2.H)) ||
        ((object1.X + object1.W) < object2.X) ||
        (object1.X > (object2.X + object2.W))
    );
}

