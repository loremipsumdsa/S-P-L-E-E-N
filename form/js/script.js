function fnameChecker(boardEffect){

	var fname = document.getElementById("fname");
	var fnameIn = document.getElementById("fnameIn");

	console.log(fnameIn.value);
	test = fnameIn.value != "";
		
	if (boardEffect){
		if (!test){

			/*fname.setCustomValidity("please enter your fist name!");*/
			fname.className = "invalid";
		}
		else{

			/*fname.setCustomValidity("fist name ok!");*/

			fname.className = "invisible";
			document.getElementById("lname").className = "visible";
		}

	}

	return test;
}

function lnameChecker(boardEffect){

	var lname = document.getElementById("lname");
	var lnameIn = document.getElementById("lnameIn");
	console.log(lnameIn.value);
	test = lnameIn.value != "";
		
	if (boardEffect){
		if (!test){

			/*lname.setCustomValidity("please enter your last name!");*/
			lname.className = "invalid";
		}
		else{

			/*lname.setCustomValidity("last name ok!");*/
			lname.className = "invisible";
			document.getElementById("bdate").className = "visible";
		}
		
	}

	return test;
}


function dateChecker(boardEffect){
	var date = document.getElementById("bdate");
	var dateIn = document.getElementById("bdateIn");
	console.log(dateIn.value);
	var test = true;

	if (boardEffect){

		if (!test && !(dateIn.value == "")){
			date.className = "invalid";
			mailIn.setCustomValidity("invalid date !");
		}

		else {

			date.className = "invisible";
			document.getElementById("mail").className = "visible";
			
		}
	}

	return (test || date.value == "");
}


function mailChecker(boardEffect){
	
	var mail = document.getElementById("mail");
	var mailIn = document.getElementById("mailIn");
	console.log(mailIn.value);
	var test = /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/.test(mailIn.value);
	console.log(test);
	
	if (boardEffect){
		mail.className = test ? "valid" : "invalid";
		
		if (!test){
			/*mail.setCustomValidity("please enter a valid email adress !");*/
		}
		else{
			/*mail.setCustomValidity("valid email adress !");*/

			mail.className = "invisible";
			document.getElementById("uname").className = "visible";
		}
	
	}

	return test;

}


function unameChecker(boardEffect){

	var uname = document.getElementById("uname");
	var unameIn = document.getElementById("unameIn");
	console.log(unameIn.value);
	test = unameIn.value != "";
		
	if (boardEffect){

		if (!test){

			unameIn.setCustomValidity("please enter an user name!");
			uname.className = "invalid";
		}
		else{

			uname.className = "invisible";
			document.getElementById("password").className = "visible";
		}

	}

	return test;
}

function passwordChecker(boardEffect){
	var password = document.getElementById("password");
	var passwordIn = document.getElementById("passwordIn");
	var test = true;

	if (boardEffect){
		
		if (!test){

		}

		else{
			password.className = "invisible";
			document.getElementById("button").className = "visible";
		}
	}

	return test
}


function caca(){
	console.log("hellllllo");
}

var currInput = 'fname';
function goo(){
	//print();
	console.log(currInput);
	if (currInput == "fname"){
		fnameChecker(true);
	}
}

function checkAll1(){
	var test = fnameChecker(true) && lnameChecker(true) && dateChecker(true) && mailChecker(true) && unameChecker(true) && passwordChecker();
}

function sendData() {
  var XHR = new XMLHttpRequest();
  var FD  = new FormData();

  FD.append("lastname", document.getElementById("lnameIn").value);
  FD.append("fastname", document.getElementById("fnameIn").value);
  FD.append("birthdate", document.getElementById("bdateIn").value);
  FD.append("username", document.getElementById("unameIn").value);
  FD.append("userpwd", document.getElementById("passwordIn").value);
  FD.append("useremail", document.getElementById("mailIn").value);

  // Définissez ce qui se passe si la soumission s'est opérée avec succès
  XHR.addEventListener('load', function(event) {
    alert('Now we got you, you got us');
    window.location.href="index1.html"
  });

  // Definissez ce qui se passe en cas d'erreur
  XHR.addEventListener('error', function(event) {
    alert('Oups! Quelque chose s\'est mal passé.');
  });

  // Configurez la requête
  XHR.open('POST', 'htbin/register.py');

  // Expédiez l'objet FormData ; les en-têtes HTTP sont automatiquement définies
  XHR.send(FD);
}