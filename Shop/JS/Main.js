var shopping=[];
    //A
    $.getJSON( "./JSON/Shop.json", function( data ) {
       var id1 = data.id1; var id2=data.id2;var id3 = data.id3; var id4=data.id4;var id5 = data.id5; var id6=data.id6;//gets all indivual IDS 
       var Price1a = data.Price1a; var Price2=data.Price2;var Price3 = data.Price3; var Price4=data.Price4;var Price5 = data.Price5; var Price6=data.Price6;//gets all Indivual prices
       var Name1 = data.Name1; var Name2=data.Name2;var Name3 = data.Name3; var Name4=data.Name4;var Name5 = data.Name5; var Name6=data.Name6;//gets all indivual names  
        console.log("This is being sold"+ id1);console.log("This is being sold"+ id2);console.log("This is being sold"+ id3);console.log("This is being sold"+ id4);console.log("This is being sold"+ id5);console.log("This is being sold"+ id6);//test logs all ids
        console.log("This costs"+ Price1a);console.log("This costs"+ Price2);console.log("This costs"+ Price3);console.log("This costs"+ Price4);console.log("This costs"+ Price5);console.log("This costs"+ Price6);//test logs all prices
        console.log("Its called"+ Name1);console.log("Its called"+ Name2);console.log("Its called"+ Name3);console.log("Its called"+ Name4);console.log("Its called"+ Name5);console.log("Its called"+ Name6);//test logs all names
        document.getElementById("PriceAbs").innerHTML=("$"+Price1a+' USD');
        document.getElementById("PriceReal").innerHTML=("$"+Price2+' USD');
        document.getElementById("PriceMood").innerHTML=("$"+Price3+' USD');
        document.getElementById("NameI1").innerHTML=(Name1);
        document.getElementById("NameI2").innerHTML=(Name2);
        document.getElementById("NameI3").innerHTML=(Name3);

      });


    //B
    function ChangePg(){

      $('img').click(function () { 
        console.log("This worked Img");
        var ImgID=$(this).attr('id');
        window.location="ItemPage"+ImgID+".html";
      });

    }

    //C1
    function cart(){
        var add = document.getElementsByClassName('add');
        var remove = document.getElementsByClassName('remove');
        var amount = [];
        window.alert('Item Removed');
    for(var i=0; i<remove.length; i++){
        var button=remove[i];
        button=remove.length-1;
        
    }
    window.alert('Item Added');
    for(var i=0; i<add.length; i++){
        var button=add[i]
        button=remove.length-1;
        
    }


    for(var i=0; i<amount.length; i++){
        var button=amount[i];
        button=amount.length-1;
        document.getElementById("amounts").innerHTML=("You have:"+amount+"in your cart");
    } 


    
}



var PicIndex = 1;
var MaskArray = []
showSlides(slideIndex);

function SlideInfo(){
$('.ItemImg').hover(function () {
  
  // over
  $(this).filter(':not(:animated)').animate({ width: "500px", height: "500px" });
    $('.ItemTxt').fadeOut("fast");
    $('.ItemTitle').fadeOut("fast");
    $('.add').fadeOut("fast");
    $('.remove').fadeOut("fast");
  }, function () {
    // out
    $(this).animate({ width: "500px", height: "300px" });
    $('.ItemTxt').fadeIn("slow");
    $('.ItemTitle').fadeIn("slow");
    $('.add').fadeIn("slow");
    $('.remove').fadeIn("slow");

  }
);
}




/*var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}*/



$(selector).fadeIn();