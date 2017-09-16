
function myClicker() {
	x = document.getElementById("Yes").value;
	console.log(x);
	if(x == ("Yes")|| x == ("yes")) {
    document.getElementById("contact-form").style.visibility = 'visible';
	}
	if(x ==("No")|| x == ("no")) {
		window.location = "index.html";
	}
}