//these are the variables to call the 4 image boxes
a = document.getElementById("img1");
b = document.getElementById("img2");
c = document.getElementById("img3");
d = document.getElementById("img4");
key = document.getElementById("winner");
//this array holds the questions that can be randomly selected when the page is loaded
question = ["Who is the defense-man?", "Who is known as the great one?", "Who is known as the Finnish flash?", "Who has the most wins over their career?", "What team has the most Stanley Cup wins?"];
//this variable will randomly select an array value from the question array
rand = Math.floor(Math.random() * question.length );


//This function will run when the body in the HTML is loaded
function random(){
	//this will call the HTML element with the id ="question" and change the text to a randomly selected question array value
    document.getElementById("question").innerHTML = question[rand];
	// in the console section in the inspect tool, it will display the text "the numbre of the question is" and the random value 
	console.log("The number of the question is " + rand);
}

function hint(el) {
	if (rand==0) {
		el.src = "";
	}
}

//the images will cycle from brent - sidney - alex - wayne - teemu - red - martin - montrael then will start again when the top left image is clicked on
function img1(el){
	//when the img src is brent 1 then the element that was being clicked on will change to "sidney1" and the process repeats
	if (el.src.match("images/brent1.png")){
		el.src = "images/sidney1.png";
	} else if (el.src.match("images/sidney1.png")){
		el.src = "images/alex1.png";
	} else if (el.src.match("images/alex1.png")){
	    el.src = "images/wayne1.png";
	} 
	else if (el.src.match("images/wayne1.png")){
	    el.src = "images/teemu1.png";
	} 
	else if (el.src.match("images/teemu1.png")){
	    el.src = "images/red1.png";
	} 
	else if (el.src.match("images/red1.png")){
	    el.src = "images/martin1.png";
	} 
	else if (el.src.match("images/martin1.png")){
	    el.src = "images/montrael1.png";
	} 
	else if (el.src.match("images/montrael1.png")){
	    el.src = "images/brent1.png";
	} 
}

// cycle order alex - montrael - wayne - red - sidney - brent - martin - teemu - REPEAT
function img2(el){
	if (el.src.match("images/alex2.png")){
		el.src = "images/montrael2.png";
	} else if (el.src.match("images/montrael2.png")){
		el.src = "images/wayne2.png";
	} else if (el.src.match("images/wayne2.png")){
	    el.src = "images/red2.png";
	} 
	else if (el.src.match("images/red2.png")){
	    el.src = "images/sidney2.png";
	} 
	else if (el.src.match("images/sidney2.png")){
	    el.src = "images/brent2.png";
	} 
	else if (el.src.match("images/brent2.png")){
	    el.src = "images/martin2.png";
	} 
	else if (el.src.match("images/martin2.png")){
	    el.src = "images/teemu2.png";
	} 
	else if (el.src.match("images/teemu2.png")){
	    el.src = "images/alex2.png";
	} 
}


// cycle order teemu - martin - brent - wayne - montrael - red - sidney - alex - REPEAT
function img3(el){
	if (el.src.match("images/teemu3.png")){
		el.src = "images/martin3.png";
	} else if (el.src.match("images/martin3.png")){
		el.src = "images/brent3.png";
	} else if (el.src.match("images/brent3.png")){
	    el.src = "images/wayne3.png";
	} 
	else if (el.src.match("images/wayne3.png")){
	    el.src = "images/montrael3.png";
	} 
	else if (el.src.match("images/montrael3.png")){
	    el.src = "images/red3.png";
	} 
	else if (el.src.match("images/red3.png")){
	    el.src = "images/sidney3.png";
	} 
	else if (el.src.match("images/sidney3.png")){
	    el.src = "images/alex3.png";
	} 
	else if (el.src.match("images/alex3.png")){
	    el.src = "images/teemu3.png";
	} 
}
//cycle order wayne - red - martin - alex - teemu - brent - montrael - sidney - REPEAT
function img4(el){
	if (el.src.match("images/wayne4.png")){
		el.src = "images/red4.png";
	} else if (el.src.match("images/red4.png")){
		el.src = "images/martin4.png";
	} else if (el.src.match("images/martin4.png")){
	    el.src = "images/alex4.png";
	} 
	else if (el.src.match("images/alex4.png")){
	    el.src = "images/teemu4.png";
	} 
	else if (el.src.match("images/teemu4.png")){
	    el.src = "images/brent4.png";
	} 
	else if (el.src.match("images/brent4.png")){
	    el.src = "images/montrael4.png";
	} 
	else if (el.src.match("images/montrael4.png")){
	    el.src = "images/sidney4.png";
	} 
	else if (el.src.match("images/sidney4.png")){
	    el.src = "images/wayne4.png";
	} 
}

//when the user clicks on the chekc answer box, this function will run. 
//This function will check the user's answer
function checkAnswer(){
	//value 0 in the array question is "who is a defenseman?" If the rand variable is 0, and the 4 images make one big picture of brent burns then...
	if (rand==0 && a.src.match("images/brent1.png") && b.src.match("images/brent2.png") && c.src.match("images/brent3.png") && d.src.match("images/brent4.png")) {
		//the class hide on the key will be removed causing the key to be shown
		key.classList.remove("hide");
		//an alert will pop up at the top of the screen
		window.alert("yay you did");	
	} //value 1 is "Who is known as the great one?" which the answer is Wayne Gretzky
	else if (rand==1 && a.src.match("images/wayne1.png") && b.src.match("images/wayne2.png") && c.src.match("images/wayne3.png") && d.src.match("images/wayne4.png")) {
		key.classList.remove("hide");
		window.alert("yay you did");
	} //value 2 is "who is known as the Finnish flash?" which the answer is Teemu Selanne
	else if (rand==2 && a.src.match("images/teemu1.png") && b.src.match("images/teemu2.png") && c.src.match("images/teemu3.png") && d.src.match("images/teemu4.png")) {
		key.classList.remove("hide");
		window.alert("yay you did");
	} //value 3 is "Who has the most wins over their career?" which the answer is Martin Brodeur
	else if (rand==3 && a.src.match("images/martin1.png") && b.src.match("images/martin2.png") && c.src.match("images/martin3.png") && d.src.match("images/martin4.png")) {
		key.classList.remove("hide");
		window.alert("yay you did");
	} // value 4 is "What team has the most Stanley Cup wins?" which the answer is Montreal Canadiens
	else if (rand==4 && a.src.match("images/montrael1.png") && b.src.match("images/montrael2.png") && c.src.match("images/montrael3.png") && d.src.match("images/montrael4.png")) {
		key.classList.remove("hide");
		window.alert("yay you did");
	} //if the answer is incorrect, an alert will appear saying that they need to start again and the page will restart
	else { 
		window.alert("sorry you're wrong. Restart");
		location.reload();
	}
}
