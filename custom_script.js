function rules(){
	console.log("%cWelcome to my portfolio","font-size:30px; color:yellow; background-color: black;");
}
function pronounce(){
	let speakname = new Audio('myname_audio.ogg');
	speakname.play();
}

//Init
document.onload = rules();
