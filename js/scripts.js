function validate(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var message = document.getElementById("message").value;
	var error_message = document.getElementById("error_message");

	error_message.style.padding = "10px";

	var text;

	if(name.length <5){
		text="Please Enter Valid Full Name";
		error_message.innerHTML = text;
		return false;
	}

	if(email.indexOf("@") == -1 || email.length < 6){
		text = "Please Enter Valid Email Address";
		error_message.innerHTML = text;
		return false;
	}

	if(isNaN(phone) || phone.length != 10){
			text = "Please Enter Valid Phone Number";
			error_message.innerHTML = text;
			return false;
	}

	if(message.length <= 140){
		text = "Please Enter More Than 140 Characters";
		error_message.innerHTML = text;
		return false;
	}
	alert("Form Submitted Successfully!");
	return true;

}