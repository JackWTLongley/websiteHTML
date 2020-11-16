var myIndex = 0;
switchPics();

function switchPics() {
	var i;
	//Getting the about of slides
	var x = document.getElementsByClassName("continousSlides");
	//Hiding all the images
	for (i = 0; i < x.length; i++) {
	x[i].style.display = "none";  
	}
	myIndex++;
	//If the index is larger than the length it restarts to one
	if (myIndex > x.length) {
		myIndex = 1
	} 
	x[myIndex-1].style.display = "block";  
	//Calls the function recursivly after 2 seconds
	setTimeout(switchPics, 2000);
}	
