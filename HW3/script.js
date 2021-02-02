function adventureFunction(Things){
var Option1 = document.getElementById("Option1").innerHTML;//for all "a" options
var Option2 = document.getElementById("Option2").innerHTML;//for all "b" options 
var Value1=Math.floor(Math.random() * 10);
var Value2= Math.floor(Math.random() * 10);
if(Things==1 && Option1=="Today?")
{
     if(Value1<=4){
        document.getElementById("CYOA").innerHTML = "'Sure, want to meet at your house?'";
        document.getElementById("Option1").innerHTML ="Sure, what time do you want to meet?"
        document.getElementById("Option2").innerHTML ="Actually, would you want to go see a movie?"
    }
    if(Value1==5){
        document.getElementById("CYOA").innerHTML = "'Sorry, but something came up. Is it alright if we plan later?'";
        document.getElementById("Option1").innerHTML ="Sure, hope everything's ok. Just give me a call when you're free. (Unexpected events Ending) if this is your first ending, you can keep track but there are X amount of endings, and if you want you can try to get them all!";
    }
    if(Value1>=6){
        document.getElementById("CYOA").innerHTML = "'Sure, want meet at my house?'";
        document.getElementById("Option1").innerHTML ="Sure, what time do you want to meet?";
        document.getElementById("Option2").innerHTML ="Actually how about going to the park?";
    }
    else if(Things==1 && Option1=="Sure, what time do you want to meet?")
    {
        if(Value2>=4){
            document.getElementById("CYOA").innerHTML = "'How about this afternoon?'";
            document.getElementById("Option1").innerHTML ="I have some things to do this afternoon. But I can do something later tonight.";
            document.getElementById("Option2").innerHTML ="Sounds great! Is there anything you've been wanting to do?";
        }
        if(Value2==5){
            document.getElementById("CYOA").innerHTML = "Actually, lets plan for something tomorrow morning. Maybe breakfast, just saw I have family plans today.(Refresh to try again!)";
            document.getElementById("Option1").innerHTML ="Alright, I can do that. I'll see you in the morning!";
            document.getElementById("Option2").innerHTML ="That might work, I have to check my work schedule but I'll let you know.";
        }
        if(Value2<=6){
            document.getElementById("CYOA").innerHTML = "How about tonight?";
            document.getElementById("Option1").innerHTML ="That's a bit late, how about something this afternoon?";
            document.getElementById("Option2").innerHTML ="Sounds great! Is there anything you want to do specifically?";
        }}   
    }
    else if(Things==1 && Option1=="That's a bit late, how about something this afternoon?"||Option1=="I have some things to do this afternoon. But I can do something later tonight."){
        document.getElementById("CYOA").innerHTML ="'Maybe, I'll let you know in a bit. Getting an important call, and I'll call you back when it's over.'";
        document.getElementById("Option1").innerHTML="Alright, well I'll try to catch you later then.";
    }
    else if(Option2=="Actually how about going to the park?"){
        document.getElementById("CYOA").innerHTML ="'That sounds great! I'll bring some sandwiches, if you want to bring a frisbee.'";
        document.getElementById("Option1").innerHTML="Why a frisbee?";
        document.getElementById("Option2").innerHTML="I can do that.";
    }
    else if(Option1=="Why a frisbee?"){
        document.getElementById("CYOA").innerHTML ="'They just put in a frisbee golf course near my house and thought you'd want to try it. It's in the woods around the park.'";
        document.getElementById("Option1").innerHTML="Ah, alright. I'll bring a few and we can play a round or two.";
    }
    else if(Option1=="Ah, alright. I'll bring a few and we can play a round or two."){
        document.getElementById("CYOA").innerHTML="'Sounds like a day!' \n(Frisbee Golf Ending)  if this is your first ending, you can keep track but there are X amount of endings, and if you want you can try to get them all!";
    }
    else if(Option2=="Actually, would you want to go see a movie?"|| Option2=="I actually don't really like frisbee golf, wanna go see a movie? It might be a little easier."){
            if(Value2>=4){
                document.getElementById("CYOA").innerHTML = "'How about this afternoon?'";
                document.getElementById("Option1").innerHTML ="I have some things to do this afternoon. But I can do something later tonight.";
                document.getElementById("Option2").innerHTML ="Sounds great!";
            }
            if(Value2==5){
                document.getElementById("CYOA").innerHTML = "'Actually, lets plan for something tomorrow morning. Maybe breakfast, just saw I have family plans today.\n(Refresh to try again!)'";
                document.getElementById("Option1").innerHTML ="Alright, I can do that. I'll see you in the morning!";
                document.getElementById("Option2").innerHTML ="That might work, I have to check my work schedule but I'll let you know.";
            }
            if(Value2<=6){
                document.getElementById("CYOA").innerHTML = "'How about tonight?'";
                document.getElementById("Option1").innerHTML ="That's a bit late, how about something this afternoon?";
                document.getElementById("Option2").innerHTML ="Sounds great!";
            }   
            else if(Things==1 && Option1=="That's a bit late, how about something this afternoon?"||Option1=="I have some things to do this afternoon. But I can do something later tonight."){
                document.getElementById("CYOA").innerHTML ="'Maybe, I'll let you know in a bit. Getting an important call, and I'll call you back when it's over.'";
                document.getElementById("Option1").innerHTML="Alright, well I'll try to catch you later then.";
        if(Option2=="Sounds great!"){
            document.getElementById("CYOA").innerHTML="'And they saw Wonder Woman, it was a good time!'"
        }
    }
    
}    
if(Things==2 && Option2=="Tomorrow?"){
    if(Value1<=4){
        document.getElementById("CYOA").innerHTML = "'Would you want to get breakfast?'";
        document.getElementById("Option1").innerHTML ="Sure, where do you want to meet at?";
        document.getElementById("Option2").innerHTML ="Actually, tomorrow isn't good for me. I have some stuff going on.";
    }
    if(Value1==5){
        document.getElementById("CYOA").innerHTML = "'Sorry, but something came up. Is it alright if we plan later?'";
        document.getElementById("Option1").innerHTML ="Sure, hope everything's ok. Just give me a call when you're free.";
    }
    if(Value1>=6){
        document.getElementById("CYOA").innerHTML = "'Would you want to go on a morning hike?'";
        document.getElementById("Option1").innerHTML ="Sure, what trail do you want to meet at?";
        document.getElementById("Option2").innerHTML ="Actually, tomorrow isn't good for me. I have some stuff going on.";
    }
    else if (Option1=="Sure, where do you want to meet at?"){
        document.getElementById("CYOA").innerHTML = "'I was thinking, maybe Liquid Planet?'";
        document.getElementById("Option1").innerHTML ="Sure, I love their food.";
        document.getElementById("Option2").innerHTML ="Actually, tomorrow isn't good for me. I have some stuff going on.";
    }
    else if(Option1=="Sure, what trail do you want to meet at?"){
        document.getElementById("CYOA").innerHTML = "'I was thinking near the M.'";
        document.getElementById("Option1").innerHTML ="Sure, that sounds good!";
        document.getElementById("Option2").innerHTML ="Actually, tomorrow isn't good for me. I have some stuff going on.";

    }
else if(Option2=="Actually, tomorrow isn't good for me. I have some stuff going on."){
        document.getElementById("CYOA").innerHTML= "'Alright, well if anything changes just let me know.'"
    }    
}
}

