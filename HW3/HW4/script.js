//for all "a" options 

var Value1=Math.floor(Math.random() * 10);
var Value2= Math.floor(Math.random() * 10);

function Choice1(){//Start
      var Choice = document.getElementById("Prompt1").value;// Prompt 1= Start, Prompt 2-4=Computer|| Prompt 5-7=T.V.|| Prompt 8-10=Books||
      var Story = document.getElementById("CYOA");
      
      if(Choice=="Computer"){
      document.getElementById("Option1").style.display="none";
      document.getElementById("Prompt1").style.display="none";

      document.getElementById("Option2").style.display="block";
      document.getElementById("Prompt2").style.display="block";

            Story.innerHTML='You decide that you want to play something on your computer. After turning it on and opening Steam, you decide you want to play a(n) Puzzle game or Shooter game.'//prompt choice group 1 *Puzzle or Shooter
      }
      else if(Choice=="T.V."){
            document.getElementById("Option1").style.display="none";
            document.getElementById("Prompt1").style.display="none";
      
            document.getElementById("Option5").style.display="block";
            document.getElementById("Prompt5").style.display="block";

            Story.innerHTML='You decide that watching something sounds nice. Grabbing your remote, and turning your T.V. on you decide to watch...'//prompt choice 2 group Show or Movie
      }
      else if(Choice=="Books"){
            document.getElementById("Option1").style.display="none";
            document.getElementById("Prompt1").style.display="none";
      
            document.getElementById("Option8").style.display="block";
            document.getElementById("Prompt8").style.display="block";

             Story.innerHTML='You decide a nice relaxing read would be fun. Walking over to your bookshelf you decide you want to read...'//prompt choice group 3 Hitchhikers Guide or Lord of The Rings
      }
      else{
            Story.innerHTML="Invalid Answer please try again."
      }
}
 //computer options 
  function Choice1A(){
      var Story = document.getElementById("CYOA");
      var game = document.getElementById("Prompt2").value;
            if(game=="Shooter"){
                  document.getElementById("Option2").style.display="none";
                  document.getElementById("Prompt2").style.display="none";
            
                  document.getElementById("Option4").style.display="block";
                  document.getElementById("Prompt4").style.display="block";

                  Story.innerHTML="You decide you want a more action packed game right now. Looking through your Steam library, Borderlands2 and Fallout4 catch your eye. Thinking about it for a moment, you choose to play..."
            }
            else if(game=="Puzzle"){
                  document.getElementById("Option2").style.display="none";
                  document.getElementById("Prompt2").style.display="none";
            
                  document.getElementById("Option3").style.display="block";
                  document.getElementById("Prompt3").style.display="block";
            
                  Story.innerHTML="You decide you want something a bit calmer right now. Looking through your Steam library, Baba is You and Portal catch your eye. Thinking about it for a moment, you decide to play..."
            }
            else{
                  Story.innerHTML="Invalid Answer"
            }
  }

  
function Choice1B(){
      var Story = document.getElementById("CYOA");
      var game = document.getElementById("Prompt3").value;//Puzzle
      if(game=="Portal"){
            document.getElementById("Option2").style.display="none";
            document.getElementById("Prompt2").style.display="none";
      
            document.getElementById("Reset").style.display="block";

            Story.innerHTML="You decide to play some Portal. Having a great time, using the interesting mechanics to zip through each level."
      }
      else if(game=="BaBa is You"){
            document.getElementById("Option2").style.display="none";
            document.getElementById("Prompt2").style.display="none";
      
            document.getElementById("Reset").style.display="block";
      
            Story.innerHTML="You decided to play some BaBa is You. Finding yourself captivated by the charming visuals and interesting logic basted puzzles!"
      }
      else{
            Story.innerHTML="Invalid Answer"
      }
}

function Choice1C(){//shooter
      var Story = document.getElementById("CYOA");
      var game = document.getElementById("Prompt4").value;
      if(game=="Borderlands2"){
            document.getElementById("Option2").style.display="none";
            document.getElementById("Prompt2").style.display="none";
      
            document.getElementById("Reset").style.display="block";

            Story.innerHTML="You decide that you're in the mood for a mix of comedy and collecting. Deciding to play Borderlands2. You find yourself chuckling at the jokes, and amazed at the weapons that you find."
      }
      else if(game=="Fallout4"){
            document.getElementById("Option2").style.display="none";
            document.getElementById("Prompt2").style.display="none";
      
            document.getElementById("Reset").style.display="block";
      
            Story.innerHTML="You decide that you're in the mood for something a little more realistic. Finding yourself drawn to Fallout4's odd and interesting post-apocalyptic world."
      }
      else{
            Story.innerHTML="Invalid Answer"
      }
}

//end of computer options 

//start TV options
function Choice2A(){
      var Story = document.getElementById("CYOA");
      var Program = document.getElementById("Prompt5").value;
      if(Program=="Movie"){
            document.getElementById("Option5").style.display="none";
            document.getElementById("Prompt5").style.display="none";
      
            document.getElementById("Option6").style.display="block";
            document.getElementById("Prompt6").style.display="block";

            Story.innerHTML="You decide that you're not totally wanting to commit to a movie. Thinking how there were some shows you've been meaning to watch some of. Thinking about what to watch you immediately think of watching either, Watchmen(HBO) or Seinfeld."
      }
      else if(Program=="Show"){
            document.getElementById("Option5").style.display="none";
            document.getElementById("Prompt5").style.display="none";
      
            document.getElementById("Option7").style.display="block";
            document.getElementById("Prompt7").style.display="block";
      
            Story.innerHTML="You decide to watch a movie, finding that you have plenty of time to hangout and relax. Looking through your streaming services you can't decide between Die Hard or Avengers (End Game). Giving it a few minuets you decide to watch..."
      }
      else{
            Story.innerHTML="Invalid Answer"
      }
}

function Choice2B(){
      var Story = document.getElementById("CYOA");
      var Show = document.getElementById("Prompt6").value;//Show
      if(Show=="Watchmen(HBO)"){
            document.getElementById("Option6").style.display="none";
            document.getElementById("Prompt6").style.display="none";
      
            document.getElementById("Reset").style.display="block";

            Story.innerHTML="You decide to tryout an episode of the HBO Watchmen series. Finding it interesting, but longer then you thought. You get up to make food while enjoying and theorizing about what could happen next."
      }
      else if(Show=="Seinfeld"){
            document.getElementById("Option6").style.display="none";
            document.getElementById("Prompt6").style.display="none";
      
            document.getElementById("Reset").style.display="block";
      
            Story.innerHTML="You decide for old time sake to watch an episode or two of Seinfeld. While not being your personal favorite show of its time, you do find yourself chuckling and enjoying the show for what it is."
      }
      else{
            Story.innerHTML="Invalid Answer"
      }
}

function Choice2C(){
      var Story = document.getElementById("CYOA");
      var Movie = document.getElementById("Prompt7").value;//movie
      if(Movie=="Die Hard"){
            document.getElementById("Option7").style.display="none";
            document.getElementById("Prompt7").style.display="none";

            document.getElementById("Reset").style.display="block";

            Story.innerHTML="You decide to watch the old classic Bruce Willis movie. Finding it to be as good as it ever was, reminding you as you watch it why its so memorable. "
      }
      else if(Movie=="Avengers (End Game)"){
            document.getElementById("Option7").style.display="none";
            document.getElementById("Prompt7").style.display="none";
      
            document.getElementById("Reset").style.display="block";
      
            Story.innerHTML="You decide to watch perhaps the biggest movie to comeout in the past decade, Avengers End Game. Finding it to still be a classic of its time, with the action and drama being memorable as ever."
      }
      else{
            Story.innerHTML="Invalid Answer"
      }
}
//end TV options

//Start Books Option
function Choice3A(){
      var Story = document.getElementById("CYOA");
      var Genere = document.getElementById("Prompt8").value;
      if(Genre=="Fantasy"){
            document.getElementById("Option8").style.display="none";
            document.getElementById("Prompt8").style.display="none";
      
            document.getElementById("Option9").style.display="block";
            document.getElementById("Prompt9").style.display="block";
            
            Story.innerHTML="You decide a fun fantasy story would be enjoyable right now. Looking around your bookshelf you spot Percy Jackson, and Lord of The Rings. Seeing as you enjoy them both you give it some time,after which you decide to read..."
      }
      else if(game=="Sci-Fi"){
            document.getElementById("Option8").style.display="none";
            document.getElementById("Prompt8").style.display="none";
      
            document.getElementById("Option10").style.display="block";
            document.getElementById("Prompt10").style.display="block";
      
            Story.innerHTML="You decide to sitdown and read part of a Sci-Fi book. Looking around the bookshelf for books that qualify you notice your copy of Hitchhikers Guid and Slaughter House 5. Giving it a second you decide to read..."
      }
      else{
            Story.innerHTML="Invalid Answer"
      }
}

function Choice3B(){
      var Story = document.getElementById("CYOA");
      var SciFi = document.getElementById("Prompt9").value;
      if(SciFi=="Hitchhikers Guide"){
            document.getElementById("Option9").style.display="none";
            document.getElementById("Prompt9").style.display="none";
      
            document.getElementById("Reset").style.display="block";

            Story.innerHTML="You pick the classic Douglas Adams work, The Hitchhikers Guide to The Galaxy. Finding yourself just as enthralled and amused as the first time you read it. You get sucked into the book for the majority of the day."
      }
      else if(SciFi=="Slaughter House 5"){
            document.getElementById("Option9").style.display="none";
            document.getElementById("Prompt9").style.display="none";
      
            document.getElementById("Reset").style.display="block";
      
            Story.innerHTML="Wanting something a little more abstract and dark you pick Slaughter House 5. Finding it to be an enjoyable read, but no less confusing then when you first read it. With the use of time adding to the story and to your confusion."
      }
      else{
            Story.innerHTML="Invalid Answer"
      }
}

function Choice3C(){
      var Story = document.getElementById("CYOA");
      var Fantasy = document.getElementById("Prompt10").value;
      if(Fantasy=="Lord of The Rings"){
            document.getElementById("Option10").style.display="none";
            document.getElementById("Prompt10").style.display="none";
      
            document.getElementById("Reset").style.display="block";

            Story.innerHTML="You decide to pick your favorite classic fantasy story, The Lord of The Rings. Finding it to be incredibly immersive and captivating. With the tale of the group on a quest to destroy evil being something simple, but robust."
      }
      else if(Fantasy=="Percy Jackson"){
            document.getElementById("Option2").style.display="none";
            document.getElementById("Prompt2").style.display="none";
      
            document.getElementById("Option3").style.display="block";
            document.getElementById("Prompt3").style.display="block";
      
            Story.innerHTML="You decide on reading Percy Jackson, while not your favorite, it was still enjoyable. Finding a way to meld ancient myth into the modern day in a somewhat interesting way."
      }
      else{
            Story.innerHTML="Invalid Answer"
      }
}

function Reload(){
      history.go(0);
}