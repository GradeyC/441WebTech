
var Canvas = document.getElementById("Canvas");
var context = Canvas.getContext("2d");
var x1 = 90;
var x2 = 20;
var y1 = 75;
var y2 = 50;
var shape1;
var shape2;

createShapes();

drawShapes();

setInterval(moveShape2, 10000)

function createShapes() {
    shape1 = new Shape(x1, y1, 50, 50, "green");//player controlled
    shape2 = new Shape(x2, y2, 30, 30, "black");//automated movement
    Canvas.style.background= "rgba("+Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","+ Math.floor(Math.random() * 100) +")";
}

function moveShape2() {
    shape2.setx(Math.floor(Math.random() * Canvas.width));
    shape2.sety(Math.floor(Math.random() * Canvas.height));
    drawShapes();
}

function drawShapes() {//based on example
    context.clearRect(0, 0, 750, 750);
    context.fillStyle = shape1.Cvalue;
    context.fillRect(shape1.Xvalue, shape1.Yvalue, shape1.Hvalue, shape1.Wvalue);
    context.fillStyle = shape2.Cvalue;
    context.fillRect(shape2.Xvalue, shape2.Yvalue, shape2.Hvalue, shape2.Wvalue);
}

$(document).ready(function () {//from example
    $(this).keypress(function (event) {
        Controller(event);
    });
});

function Controller(event){
    var collision= Collied(shape1,shape2);
    if (collision){
        changeAudio();
        Canvas.style.borderColor= "rgba("+Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","+ Math.floor(Math.random() * 100) +")";
        Canvas.style.background= "rgba("+Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","+ Math.floor(Math.random() * 100) +")";
        shape2.setW(shape1.Wvalue - (Math.floor(Math.random() * 5)));
        shape1.setH(shape2.Hvalue - (Math.floor(Math.random() * 5)));
        shape1.setW(shape2.Wvalue + (Math.floor(Math.random() * 5)));
        shape2.setH(shape1.Hvalue + (Math.floor(Math.random() * 5)));
    }
    if(shape2.Wvalue >= 300||shape2.Wvalue <= 0 ){//to ensure shape 2 doesn't disappear due to no width
        shape2.setW(30);
    }
    if(shape2.Hvalue >= 300||shape2.Hvalue <= 0 ){//to ensure shape 2 doesn't disappear due to no height
        shape2.setH(30);
    }
    if(shape1.Wvalue >= 300||shape1.Wvalue <= 0 ){//to ensure shape 1 doesn't disappear due to no width
        shape1.setW(45);
    }
    if(shape1.Hvalue >= 300||shape1.Hvalue <= 0 ){//to ensure shape 2 doesn't disappear due to no height
        shape1.setH(45);
    }

    if(shape2.Xvalue >= 650||shape2.Xvalue <= 0 ){//to ensure shape 2 doesn't disappear due to no width
    shape2.setx(30);
    }
    if(shape2.Yvalue >= 650||shape2.Yvalue <= 0 ){//to ensure shape 2 doesn't disappear due to no height
    shape2.sety(30);
    }
    if(shape1.Xvalue >= 650||shape1.Xvalue <= 0 ){//to ensure shape 1 doesn't disappear due to no width
    shape1.setx(45);
    }
    if(shape1.Yvalue >= 650||shape1.Yvalue <= 0 ){//to ensure shape 2 doesn't disappear due to no height
    shape1.sety(45);
}
        var char = event.which || event.keyCode;//from example
        var actualLetter = String.fromCharCode(char);
        if (actualLetter == "w") {
            Up();
        } else if (actualLetter == "s") {
            Down();
        } else if (actualLetter == "d") {
            Right();
        } else if (actualLetter == "a") {
            Left();
        }
        drawShapes();
}

function Up() {
    shape1.sety(shape1.Yvalue - 15);
}

function Down() {
    shape1.sety(shape1.Yvalue + 15);
}

function Left() {
    shape1.setx(shape1.Xvalue - 15);
}

function Right() {
    shape1.setx(shape1.Xvalue + 15);
}

function Collied(shape1, shape2) {//from example
    return !(
        ((shape1.y + shape1.H) < (shape2.y)) ||
        (shape1.y > (shape2.y + shape2.H)) ||
        ((shape1.x + shape1.W) < shape2.x) ||
        (shape1.x > (shape2.x + shape2.W))
    );
}

function changeAudio(){
    var audio = document.getElementById("Audio");
        
    function getRandomInt(max=3) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      console.log(getRandomInt(3));
    if(getRandomInt=0){
        audio.src="https://www.youtube.com/watch?v=NGazythwAkU";
    }
    if(getRandomInt=1){
        audio.src="https://youtu.be/aJ2JL4qOoys";
    }
    if(getRandomInt=2){
        audio.src="https://www.youtube.com/watch?v=Dg0IjOzopYU";
    }
    else{
        audio.src="https://www.youtube.com/watch?v=qjqsIENcFR0";
    }
}  
