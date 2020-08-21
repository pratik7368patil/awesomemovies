function checkDark() {
	if(document.body.style.background === "rgb(27, 27, 27)") {
		normal();
	} else {
		dark();
	}

}

function dark() {
	document.body.style.background = "#1B1B1B";
	document.body.style.color = "lightgray";
	document.getElementById('bar').style.background = "#1B1B1B";
	let cards = document.getElementsByClassName('card');

	for(let i=0; i<cards.length; i++) {
		cards[i].style.background = "rgba(0,0,0,0.2)";
	}
}

function normal() {
	document.body.style.background = "white";
	document.body.style.color = "black";
	document.getElementById('bar').style.background = "white";
	let cards = document.getElementsByClassName('card');

	for(let i=0; i<cards.length; i++) {
		cards[i].style.background = "white";
	}
}