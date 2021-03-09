//var ImgSelector= ".Image";
//var TxtSelector= ".Text";
var RectangleSelector = "#Rectangle";// will go to Shape array if needed 
var CircleSelector = "#Circle";// will go to Shape array if needed 
var ImgArray = new Array();
var TxtArray = new Array();


class Images {//get and create random img array to use
    constructor(ImgSelector, ImgPath) {
        this.ImgSelector = ImgSelector;
        this.ImgPath = ImgPath;

    }

    get Select() {
        return this.ImgSelector;
    }

    get Path() {
        return this.ImgPath;
    }
    set Select(ImgSelector) {
        this.ImgSelector = ImgSelector;
    }
    set Path(ImgPath) {
        this.ImgPath = ImgPath;
    }
    toString() {
        return this.ImgSelector + ":" + this.ImgPath;
    }
}

function MakeRealImages() {
    var Quotes = ["Words", "Words", "Words", "Words", "Words", "Words", "Words", "Words", "Words",];
    var TextIndex = [0, 0, 0, 0, 0];
    // we have to test to see if all spots have been filled
    while (TxtArray.length < 5) {
        // we use the random number of the Math class to get a number between
        // 0 and 1 (not including 1) and then multiply it by the number of Ids (5)
        // so we can get a number between 0 and 4 to put that into our RealImgs array
        var randomNumber = Math.floor(Math.random() * Quotes.length);
        console.log("Working Make Real WHILE" + randomNumber);

        if (TextIndex[randomNumber] < 5) {
            console.log("Working Make Real IF" + randomNumber);
            // this array contains all the actual images that will show
            // when you click on an image
            TxtArray.push(Quotes[randomNumber]);
            // this just makes sure only two of the same images appear
            TextIndex[randomNumber] = TextIndex[randomNumber] + 1;
        }
    }
}
function StartFunction() {
    var ImageSet1 = new Images("#Images1", "Images/Animal2.jpg");
    var ImageSet2 = new Images("#Images1", "Images/Devil2.jpg");
    var ImageSet3 = new Images("#Images1", "Images/Devil1.jpg");
    var ImageSet4 = new Images("#Images1", "Images/Deer.jpg");
    var ImageSet5 = new Images("#Images1", "Images/Bear.jpg");
    ImgArray.push(ImageSet1);
    ImgArray.push(ImageSet2);
    ImgArray.push(ImageSet3);
    ImgArray.push(ImageSet4);
    ImgArray.push(ImageSet5);
}

$(function () {//jQuery code goes in this function #=id .=class 
    StartFunction();
    console.log(TxtArray.length);
    console.log(ImgArray.length);
    console.log(ImgArray[0].toString());
    $("#Images1").hover(function () {
        // over
        $("#Images1Div").animate({ right: '500px', height: "300px", width: "300px", }, "slow");
        setInterval(AnimateRectangle, 10);
    }, function () {
        var RandomNumber = Math.floor(Math.random(0 - 10) * 10);
        $(ImgArray[RandomNumber].ImgSelector).attr("src", ImgArray[RandomNumber].ImgPath);
        $("#Images1").fadeOut(1500).fadeIn(1500);
    }
    );
    $("html").click(function (e) {
        
        $("#Quote1").text("Suprise!");
        setTimeout(5000);
        $("#Quote1").fadeIn(1500).fadeOut(1500);
        $("#Quote1").click(function (e) {
            $("#Quote2").text("Wanna hear a joke?");
            setTimeout(5000);
            $("#Quote2").fadeIn(1500).fadeOut(1500);
        });
        $("#Quote2").click(function (e) {
            $("#Quote3").text("Great!");
            setTimeout(5000);
            $("#Quote3").fadeOut(1500).fadeIn(1500);
        });
        $("#Quote2").click(function (e) {
            $("#Quote3").text("Whats Wheatly's(portal 2) favorite song?");
            setTimeout(5000);
            $("#Quote3").fadeOut(1500).fadeIn(1500);
        });
        $("#Quote3").click(function (e) {
            $("#Quote4").text("Fly me to the moon");
            setTimeout(1500);
        });
        $("#Quote4").click(function (e) {
            $("#Quote3").fadeout();
            $("#Quote2").fadeout();
            $("#Quote1").fadeout();
            $("#Quote4").fadeout();
        });

        $("#Images1Div").hover(function () {
            $("#Quote1").text("Suprise!");
            setTimeout(5000);
            $("#Quote1").fadeIn(1500).fadeOut(1500);
            $("#Quote1").click(function (e) {
                $("#Quote2").text("Wanna hear a joke?");
                $("#Quote2").fadeIn(1500).fadeOut(1500);
            });
            $("#Quote2").click(function (e) {
                $("#Quote3").text("Great!");
                setTimeout(5000);
                $("#Quote3").fadeOut(1500).fadeIn(1500);
            });
            $("#Quote2").click(function (e) {
                $("#Quote3").text("Whats Wheatly's(portal 2) favorite song?");
                setTimeout(5000);
                $("#Quote3").fadeOut(1500).fadeIn(1500);
            });
            $("#Quote3").click(function (e) {
                $("#Quote4").text("Fly me to the moon");
                setTimeout(1500);
            });
        }, function () {
            $("#Quote3").fadeout();
            $("#Quote2").fadeout();
            $("#Quote1").fadeout();
            $("#Quote4").fadeout();
        }
        );
        
      

    });

});


function AnimateRectangle()
{
    $("#Rectangle").animate({left:300}).animate({top:150}).animate({left:0}).animate({top:300});
}