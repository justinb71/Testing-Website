

function submit() {
//--This Function Validates The Users Inputs And Outputs The Grade--//


	//Boolean variables that check if the users inputs are valid
	let nameValid = false;
	let subjectValid = false;
	let examNumbervalid = false;
	let examMarkValid = false;
	
	//Defines the values of the users inputs
	let studentName = document.getElementById("studentNameField").value;
	let studentSubject = document.getElementById("subjectField").value;
	let examNumber = document.getElementById("examinationNumberField").value;
	let examMark = document.getElementById("examMarkField").value;
	
	//Presence Check
	if (studentName.length === 0){
	
		//If the entry box is empty it changes error text to "Please Enter Name" and changes the color of the label to red
		
		document.getElementById("nameError").innerHTML = "Please Enter Name";
		document.getElementById("nameLabel").style.color = "#e02f1e";
		
	} else{
		
		//If the entry box contains text change the color of the label to normal and change make the error text disappear
		
		document.getElementById("nameLabel").style.color = "#d7d8db";
		document.getElementById("nameError").innerHTML = "";
		
		nameValid = true;
		
	}
	
	//Presence Check
	if (studentSubject.length === 0){
	
		//If the entry box is empty it changes error text to "Please Enter Name" and changes the color of the label to red
	
		document.getElementById("subjectError").innerHTML = "Please Enter Subject";
		document.getElementById("subjectLabel").style.color = "#e02f1e";
		
	} else{
	
		//If the entry box contains text change the color of the label to normal and change make the error text disappear
		
		document.getElementById("subjectLabel").style.color = "#d7d8db";
		document.getElementById("subjectError").innerHTML = "";
		
		subjectValid = true;
	}
	
	//Presence Check
	if (examNumber.length ===0){
	
		document.getElementById("numberError").innerHTML = "Please Enter Exam Number";
		document.getElementById("examinationNumberLabel").style.color = "#e02f1e";
		
	} else{
	
		//Type Check
		if (isNaN(examNumber)){
		
			//If the input is not a number change the error text to "Please Enter A Number" and change the color of the label to red
			document.getElementById("numberError").innerHTML = "Please Enter A Number";
			document.getElementById("examinationNumberLabel").style.color = "#e02f1e";
			
		} else{
		
			//Length Check
			if (examNumber.length != 4) {
				
				//If the number is not 4 digits long change the error text to "Please Enter A 4 Digit Number" and change the color of the label to red
				document.getElementById("numberError").innerHTML = "Please Enter A 4 Digit Number";
				document.getElementById("examinationNumberLabel").style.color = "#e02f1e";
			} else{
				
				//If the input is valid change the color of the label to normal and change make the error text disappear
				document.getElementById("examinationNumberLabel").style.color = "#d7d8db";
				document.getElementById("numberError").innerHTML = "";
				
				examNumbervalid = true;

			}	
		}	
	}
	
	//Presence Check
	if (examMark.length === 0){
	
		document.getElementById("markError").innerHTML = "Please Enter Student's Mark";
		document.getElementById("examMarkLabel").style.color = "#e02f1e";
		
	}else{
	
		//Type Check
		if (!isNaN(examMark)){
		
			//Range Check
			if (examMark < 0 || examMark > 100)   {
			
				document.getElementById("examMarkLabel").style.color = "#e02f1e"
				document.getElementById("markError").innerHTML = "Please Enter Number (0-100)";
				
			} else{
			
				document.getElementById("examMarkLabel").style.color = "#d7d8db"
				document.getElementById("markError").innerHTML = "";
				
				examMarkValid = true;
			}
		} else{
		
			document.getElementById("markError").innerHTML = "Please Enter A Number";
			document.getElementById("examMarkLabel").style.color = "#e02f1e"
			
		}
	}
	
	//If everything is valid output the grade 
	if (nameValid === true && subjectValid == true && examNumbervalid == true && examMarkValid == true) {
		document.getElementById("gradeOutput").innerHTML = "Grade: "+ gradeGenerator(examMark);
		console.log(gradeGenerator(examMark))
	
	}
	
}


function reset() {

//--This Function Removes All The Inputs From The Boxes And Changes The Colors Of all The text To Normal--//

	document.getElementById("nameError").innerHTML = "";
	document.getElementById("nameLabel").style.color = "#d7d8db";
	document.getElementById("studentNameField").value = "";
	
	document.getElementById("subjectError").innerHTML = "";
	document.getElementById("subjectLabel").style.color = "#d7d8db";
	document.getElementById("subjectField").value = "";
	
	document.getElementById("numberError").innerHTML = "";
	document.getElementById("examinationNumberLabel").style.color = "#d7d8db";
	document.getElementById("examinationNumberField").value = "";
	
	document.getElementById("markError").innerHTML = "";
	document.getElementById("examMarkLabel").style.color = "#d7d8db";
	document.getElementById("examMarkField").value = "";

	document.getElementById("gradeOutput").innerHTML = "Grade: ";



}




function gradeGenerator(mark) {
	//--This Function Generates The Grade For the Given Mark--//
	
	let subject = document.getElementById("subjectField").value;
	let UMark = 30;

	if (subject === "Mathematics"){
		UMark = 40;
	} else if (subject === "English"){
		UMark = 30;
	}else if (subject === "Physics"){
		UMark = 40;
	}else if (subject === "Chemistry"){
		UMark = 32;
	}else if (subject === "Biology"){
		UMark = 27;
	}
		
		
	if (mark === 0 || mark <UMark) {
			return "U"
	} 
	
	else if (mark === UMark || mark <UMark+10){
		return "E"
	}
	
	else if (mark === UMark+10 || mark <UMark+20){
		return "D"
	}
	
	else if (mark === UMark+20 || mark <UMark+30){
		return "C"
	}
	
	else if (mark === UMark+30 || mark <UMark+40){
		return "B"
	}
	
	else if (mark === UMark+40 || mark <=UMark+50){
		return "A"
	}
	else if (mark === UMark+50 || mark <=UMark+60){
		return "A*"
	}
	else if (mark === UMark+60 || mark <=UMark+70){
		return "A"
	}
	

}


//When enter is pressed it runs the submit function
document.addEventListener("keypress", function(event) {
	if (event.keyCode == 13) {
		submit();
	}
});



