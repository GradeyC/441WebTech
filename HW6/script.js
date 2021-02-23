var ImageNumber = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"]; //names are equal to those in the Image folder
var FillerIMG = ["Images/Devil1.jpg", "Images/Devil2.jpg", "Images/FrozenGyser.jpg", "Images/Gyser", "Images/Gyser2.jpg", "Images/Gyser3.jpg", "Images/Hottsprings.jpg", "Images/River.jpg", "Images/Rock.jpg", "Images/Tower1"];;
var RealImgs = new Array();
var User= {"Name":"","Date":"","Age":"","Attempts":""}
var First=-1;
var Second=-1;

//function to store info from text box (Works)
function GetInfo(){
    var Name = document.getElementById("Name").value;
      if(Name == "")
      {
        window.alert("Please Enter Your Name");
        document.getElementById("Name").style.backgroundColor="red";
        document.getElementById("Name").focus();
      }
      else
      {
        document.getElementById("Name").style.backgroundColor="white";
      }
    var CheckAge = document.getElementById("Age").value;
      if(CheckAge == "")
      {
        window.alert("Please Enter Your Age");
        document.getElementById("Age").style.backgroundColor="red";
        document.getElementById("Age").focus();
      }
      else
      {
        document.getElementById("Age").style.backgroundColor="white"; 
      }
    if(Name && Age !=""){
         var NameVar=document.getElementById("Name").value; 
        console.log(NameVar);
    var AgeVar=document.getElementById("Age").value;    
        console.log(AgeVar);
    var DateVar=document.getElementById("Date").value;
        console.log(DateVar);
    User.Name= NameVar;
    User.Age= AgeVar;
    User.Date= DateVar;
    localStorage.setItem("AddInfo",JSON.stringify(User));
    window.location="index.html";
    }  
   
}

//function to retrive info from JSON storage to add to User (works) prints to Log 


function Blanks() {
    
    MakeRealImages();
    // this makes sure the blanks will appear
    for (var i = 0; i < ImageNumber.length; i++) {
        document.getElementById(ImageNumber[i]).src = FillerIMG[0];
        //console.log("Working Blanks");
    }
}

function MakeRealImages() {
    var RealImgIds = ["Images/Animal1.jpg", "Images/Animal2.jpg", "Images/Bear.jpg", "Images/Deer.jpg", "Images/Moose.jpg"];
    var RealIndex = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // we have to test to see if all spots have been filled
    while (RealImgs.length < 10) {
        // we use the random number of the Math class to get a number between
        // 0 and 1 (not including 1) and then multiply it by the number of Ids (5)
        // so we can get a number between 0 and 4 to put that into our RealImgs array
        var randomNumber = Math.floor(Math.random() * RealImgIds.length);
        //console.log("Working Make Real WHILE" + randomNumber);

        if (RealIndex[randomNumber] < 2) {
           // console.log("Working Make Real IF" + randomNumber);
            // this array contains all the actual images that will show
            // when you click on an image
            RealImgs.push(RealImgIds[randomNumber]);
            // this just makes sure only two of the same images appear
            RealIndex[randomNumber] = RealIndex[randomNumber] + 1;
        }
    }
}

// we want to get the correct element in the HTML and use the RealImgs array which contain which images should appear
function GetImage(number) {
   // console.log(number)
   var Total=number/2;
   var Attempts=number/2;
   if(First >= 0){
       Second=number;
       document.getElementById(ImageNumber[number]).src= RealImgs[Second];
   }
   else if(First <0){
        First=number;
    document.getElementById(ImageNumber[First]).src = RealImgs[First];
   }
   if(RealImgs[Second] != RealImgs[First] && First >= 0 && Second >= 0)
    {
        setTimeout(ResetImage, 1000);
    }
   else if(RealImgs[Second] == RealImgs[First] && First >= 0 && Second >= 0) {
       Attempts+1;
       Total+1;
   }
   if(Total == RealImgs.length/2){
       User.Attempts=Attempts;
       localStorage.setItem("AddInfo", JSON.stringify(User));
       window.location="FinalPage.html";
   }
   else if(Attempts > RealImgs.length*5)
   {
       window.alert("Sorry,but please try again.")
       Attempts==0;
       Total==0;
       setTimeout(ResetImage, 1000);
   }
}

function ResetImage(){
    document.getElementById(ImageNumber[First]).src=FillerIMG[1];
    document.getElementById(ImageNumber[Second]).src=FillerIMG[1];
    First=-1;
    Second=-1;
}

function AddInfo(){
    var Info= localStorage.getItem("AddInfo");
    User=JSON.parse(Info);
    console.log(User.Name);
    console.log(User.Age);
    console.log(User.DateVar);
    console.log(User.Attempts);
    var EndName= "Name: "+User.Name;
    var EndAge="Age: "+User.Age;
    var EndAttempts="Attempts: "+User.Attempts;
    if(document.getElementById("EndName")!= null){
        document.getElementById("EndName").innerHTML=EndName
    }
    if(document.getElementById("EndAge")!= null){
        document.getElementById("EndAge").innerHTML=EndAge
    }
    if(document.getElementById("EndAttempts")!= null){
        document.getElementById("EndAttempts").innerHTML=EndAttempts
    }
}