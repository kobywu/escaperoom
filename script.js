a = document.getElementById("img1");
b = document.getElementById("img2");
c = document.getElementById("img3");
d = document.getElementById("img4");
question = ["Who is the defense-man?", "Who is known as the great one?", "Who is known as the Finnish flash?", "Who has the most wins over their career?", "What team has the most Stanley Cup wins?"];
rand = Math.floor(Math.random() * question.length );
//the images will cycle from brent - sidney - alex - wayne - teemu - red - martin - montrael then will start again when the image is clicked

function img1(el){
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

// cycle order alex - montrael - wayne - red - sidney - brent - martin - teemu 
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


// cycle order teemu - martin - brent - wayne - montrael - red - sidney - alex 
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
//cycle order wayne - red - martin - alex - teemu - brent - montrael - sidney 
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

function random(){
    document.getElementById("question").innerHTML = question[rand];
	console.log("The number of the question is " + rand);
}

function checkAnswer(){
	if (rand==1 && a.src.match("images/wayne1.png") && b.src.match("images/wayne2.png") && c.src.match("images/wayne3.png") && d.src.match("images/wayne4.png")) {
		console.log("yay you did");
	} else if (rand==0 && a.src.match("images/wayne1.png") && b.src.match("images/wayne2.png") && c.src.match("images/wayne3.png") && d.src.match("images/wayne4.png")) {
		console.log("yay you did");
	} else if (rand==2 && a.src.match("images/wayne1.png") && b.src.match("images/wayne2.png") && c.src.match("images/wayne3.png") && d.src.match("images/wayne4.png")) {
		console.log("yay you did");
	} else if (rand==3 && a.src.match("images/wayne1.png") && b.src.match("images/wayne2.png") && c.src.match("images/wayne3.png") && d.src.match("images/wayne4.png")) {
		console.log("yay you did");
	} else if (rand==4 && a.src.match("images/wayne1.png") && b.src.match("images/wayne2.png") && c.src.match("images/wayne3.png") && d.src.match("images/wayne4.png")) {
		console.log("yay you did");
	} 
	
}

