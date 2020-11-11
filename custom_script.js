function rules(){
	console.log("Welcome");
}
function pronounce(){
	let speakname = new Audio('myname_audio.ogg');
	speakname.play();
}

//Init
document.onload = rules();