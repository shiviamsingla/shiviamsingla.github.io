let currentImage = 1; // used by certChange
let noCerts = 3; // used by certChange
function rules(){
	console.log("%cWelcome to my portfolio","font-size:30px; color:yellow; background-color: black;");
}
function pronounce(){
	let speakname = new Audio('myname_audio.ogg');
	speakname.play();
}
function certChange(type){
	if (currentImage>3) {currentImage = 3}
	if (currentImage<1) {currentImage = 1}
	let slideTag = document.getElementsByClassName('slide')[0];
	if (type){
		slideTag.scrollTo(((slideTag.scrollWidth/noCerts)*currentImage),0);
		currentImage++;
	}
	else{
		currentImage--;
		slideTag.scrollTo((((slideTag.scrollWidth/noCerts)*currentImage) -(slideTag.scrollWidth/3)),0);
	}
}

//Init
document.onload = rules();