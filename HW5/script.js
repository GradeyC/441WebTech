var ImageNumber=["image1","image2","image3","image4","image5","image6","image7","image8","image9","image10"];//names are equal to those in the Image folder
var FillerIMG=["Images/Devil1.jpg","Images/Devil2.jpg","Images/FrozenGyser.jpg","Images/Gyser","Images/Gyser2.jpg","Images/Gyser3.jpg","Images/Hottsprings.jpg","Images/River.jpg","Images/Rock.jpg","Images/Tower1"];;
var RealImgs= new Array();
var random= Math.floor(Math.random());


function Blanks(){
    MakeRealImages();
    for(var i=0; i>ImageNumber.length; i++){
        document.getElementById(image[i]).src=FillerIMG;
        console.log("Working Blanks");
    }
}

function MakeRealImages(){
var RealImgIds =["Images/Animal1.jpg","Images/Animal2.jpg","Images/Bear.jpg","Images/Deer.jpg","Images/Moose.jpg"];
var RealIndex=[0,0,0,0,0,0,0,0,0];
while(RealIndex<9)
{
    random*RealImgIds.length;
    console.log("Working Make Real WHILE");
}
if(RealIndex[random]<10){
    console.log("Working Make Real IF");
    RealImgIds.push(RealImgs[random]);
    RealIndex[random]= RealIndex[random]+1;
}
}

function GetImage(number){
    document.getElementById(ImageNumber[number]).src=RealImgs[number];
    console.log("Working Get Number");
}
