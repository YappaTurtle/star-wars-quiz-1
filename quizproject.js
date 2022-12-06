let currentQuestion = 0;
let score = 0;
let hintCount = 0;
let hintbtnPress = false;
let questions = [
   {
	"question": "What is the name of the score playing during the final battle in the Phantom Menace?",
	"a": "Battle of the Heroes",
	"b": "Duel of Lightsabers",
	"c": "Darth Maul's Theme",
	"d": "Duel of the Fates",
	"image":"quizimagesfinal/q1final.jpg",
	"answer": "d",
	"hint": "It is a duel."
   },
   {
	"question": "On what planet was Anakin Skywalker found?",
	"a": "Dantooine",
	"b": "Tatooine",
	"c": "Coruscant",
	"d": "Dagobah",
	"image":"quizimagesfinal/q2final.jpg",
	"answer": "b",
	"hint": "It is an -ooine planet."
   },
   {
	"question": "Who deleted the records of Kamino in the Jedi Temple?",
	"a": "Count Dooku",
	"b": "Darth Sidious",
	"c": "General Grevious",
	"d": "Mace Windu",
	"image":"quizimagesfinal/q3final.jpg",
	"answer": "a",
	"hint": "It is somebody with a red lightsaber."
   },
   {
	"question": "What Jedi did Count Dooku impersonate to create the Clones?",
	"a": "Yaddle",
	"b": "Syfo Dias",
	"c": "Yoda",
	"d": "Kit Fisto",
	"image":"quizimagesfinal/q4final.jpg",
	"answer": "b",
	"hint": "They aren't green."
   },
   {
	"question": "Who is Caleb Dume in Star Wars?",
	"a": "A Jedi",
	"b": "A Sith",
	"c": "A Bounty Hunter",
	"d": "He doesn't exist",
	"image":"quizimagesfinal/q5final.jpg",
	"answer": "a",
	"hint": "Look at the picture."
   },
   {
	"question": "What species is Cad Bane?",
	"a": "Human",
	"b": "Umbaran",
	"c": "Duros",
	"d": "Twi'lek",
	"image":"quizimagesfinal/q6final.jpg",
	"answer": "c",
	"hint": "Umbarans aren't blue."
   },
   {
	"question": "What is the name of Boba Fett's starship?",
	"a": "Slave I",
	"b": "Tantive IV",
	"c": "Starship",
	"d": "QuadJumper",
	"image":"quizimagesfinal/q7final.jpg",
	"answer": "a",
	"hint": "It has a number in the name."
   },
   {
	"question": "Ahsoka Tano is padawan to which Jedi?",
	"a": "Plo Koon",
	"b": "Obi-wan Kenobi",
	"c": "Yoda",
	"d": "Anakin Skywalker",
	"image":"quizimagesfinal/q8final.jpg",
	"answer": "d",
	"hint": "He isn't a Jedi Master."
   },
   {
	"question": "What was Clone Trooper 'Fives' birth number?",
	"a": "CT-7567",
	"b": "CT-5555",
	"c": "CT-99",
	"d": "CT-3829",
	"image":"quizimagesfinal/q9final.jpg",
	"answer": "b",
	"hint": "C'mon, are you really that dumb? His name is 'Fives'."
   },
   {
	"question": "On what planet does Jedi Master Ki-Adi-Mundi die on?",
	"a": "Felucia",
	"b": "Mustafar",
	"c": "Coruscant",
	"d": "Mygeeto",
	"image":"quizimagesfinal/q10final.jpg",
	"answer": "d",
	"hint": "It is pretty cold there."
   },
   {
	"question": "On what planet does Anakin Skywalker become Darth Vader?",
	"a": "Coruscant",
	"b": "Mustafar",
	"c": "Tatooine",
	"d": "Ryloth",
	"image":"quizimagesfinal/q11final.jpg",
	"answer": "a",
	"hint": "Darth Sidious named him Darth Vader, where is he usually?"
   },
   {
	"question": "Grogu is a member of which species?",
	"a": "Yoda",
	"b": "Taun Taun",
	"c": "Unknown",
	"d": "Mandalorian",
	"image":"quizimagesfinal/q12final.jpg",
	"answer": "c",
	"hint": "Yoda is a name, not a species."
   },
   {
	"question": "During the Umbara Campaign, which Clone killed Pong Krell after he betrayed him?",
	"a": "Hardcase",
	"b": "Dogma",
	"c": "Rex",
	"d": "Echo",
	"image":"quizimagesfinal/q13final.jpg",
	"answer": "b",
	"hint": "Echo and Hardcase are both dead at this point."
   },
   {
	"question": "What colour does a lightsaber turn after it has been 'cured' of the Dark Side?",
	"a": "Green",
	"b": "Blue",
	"c": "Yellow",
	"d": "White",
	"image":"quizimagesfinal/q14final.jpg",
	"answer": "d",
	"hint": "This doesn't happen very often. What are the two most common light saber colours?"
   }
 ];
 

 function loadQuestion() {
     
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "80vh";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
} // loadQuestion
 
 
 function markIt(ans) {

    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + "/" + questions.length;
       
       message = "Correct, Your Score is Now " + score + "/" + questions.length;
    } else {
       message = "Incorrect, Your Score is Now " + score + "/" + questions.length; 
    } // else
        
   
    
    // move to the next question
    currentQuestion++;
	hintbtnPress = false;
    if (currentQuestion >= questions.length) {
       // create a special message
       if (score < 7 && score != 0){
		message = "You finish the quiz with a score of " + score + "/" + questions.length + "<br>" + "You are Bad :(";
	   }
	   else if(score === 7){
		message = "You finish the quiz with a score of " + score + "/" + questions.length + "<br>" + "You are Average :|";
	   }
	   else if(score === 14){
		message = "You finish the quiz with a score of " + score + "/" + questions.length + "<br>" + "You are the Best :D";
	   }
	   else if(score === 0){
		message = "You finish the quiz with a score of " + score + "/" + questions.length + "<br>" + "You are Terrible D:";
	   }
	   else if(score > 7 && score != 14){
		message = "You finish the quiz with a score of " + score + "/" + questions.length + "<br>" + "You are Good :)";
	   }
    } else {
       loadQuestion();
    }
    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt

 function giveHint(){
	if(hintbtnPress == false){
		hintCount++;
		message = questions[currentQuestion].hint + "<br>" + "You have used "+ hintCount + " out of 5 hints";
		if(hintCount <= 5){	
			document.getElementById("lightbox").style.display = "block";
			document.getElementById("message").innerHTML = message;
		}
		else{
			message = "You have no more hints remaining";			
			document.getElementById("lightbox").style.display = "block";
			document.getElementById("message").innerHTML = message;
		}
		hintbtnPress = true;
	}
	else{
		closeLightBox();
	}
 }

 function closeLightBox() {
	document.getElementById("lightbox").style.display = "none";
 } // closeLightbox

 if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js');
  }