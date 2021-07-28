document.querySelector(".bannerClose").addEventListener("click", closeBanner); //click x icon @ top, right-hand side to permanently close banner 
document.getElementById("genResumeButton").addEventListener("click", getWorkHistory); 
document.getElementById("genResumeButton").addEventListener("click", getskillsInformation); 
document.getElementById("genResumeButton").addEventListener("click", getTechSkillsInformation); 
document.getElementById("genResumeButton").addEventListener("click", getEdu); 
document.getElementById("genResumeButton").addEventListener("click", getCertificationInformation); 
document.getElementById("genResumeButton").addEventListener("click", cityStateZip); 
document.getElementById("genResumeButton").addEventListener("click", generateResume); 

/* starts with document.querySelector(".bannerClose") 
then doubles back and looks for first element with class of banner to toggle display to none when close button is clicked *///////////////////////////////////////////////////
function closeBanner () {
  this.closest(".banner").style.display = "none"; 
}

function getWorkHistory(){
  //get job input information and output onto resume template
  document.getElementById("job").innerHTML = document.getElementById("jobTitleField").value; 
  document.getElementById("job2").innerHTML = document.getElementById("jobTitleField2").value; 
  document.getElementById("job3").innerHTML = document.getElementById("jobTitleField3").value;
  
  //get employer input & format employer output onto resume template 
  document.getElementById("employer").innerHTML = document.getElementById("employerField").value; 
  document.getElementById("employer2").innerHTML = document.getElementById("employerField2").value;
  document.getElementById("employer3").innerHTML = document.getElementById("employerField3").value;

  //retrieve job description input information then format job description output info onto resume template 
  document.getElementById("jobDescription").innerHTML = document.getElementById("jobDescriptionField").value;
  document.getElementById("jobDescription2").innerHTML = document.getElementById("jobDescriptionField2").value;
  document.getElementById("jobDescription3").innerHTML = document.getElementById("jobDescriptionField3").value;

  workStart1 = document.getElementById("workStartField").value;
  workEnd1 = document.getElementById("workEndField").value;
  workTimeSpan1 = (workStart1 + " to " + workEnd1); 
  document.getElementById("workDates").innerHTML = workTimeSpan1; 

  workStart2 = document.getElementById("workStartField2").value;
  workEnd2 = document.getElementById("workEndField2").value;
  workTimeSpan2 = (workStart2 + " to " + workEnd2);
  document.getElementById("workDates2").innerHTML = workTimeSpan2;

  let workStart3 = document.getElementById("workStartField3").value;
  let workEnd3 = document.getElementById("workEndField3").value;
  workTimeSpan3 = (workStart3 + " to " + workEnd3); 
  document.getElementById("workDates3").innerHTML = workTimeSpan3; 
}

//Add additional empty skills fields ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addNewSkillsField(){
  let newNode = document.createElement('textarea'); 
  newNode.classList.add('form-control');
  newNode.classList.add('skillsField');
  newNode.classList.add('mt-2');
  newNode.setAttribute("rows", 1 );
  newNode.setAttribute("placeholder", "Enter here");

  let skillsOb = document.getElementById('skills');
  let skillsAddButtonOb = document.getElementById("skillsAddButton"); 

  skillsOb.insertBefore(newNode, skillsAddButtonOb); 
}

//function: get information from skills field /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getskillsInformation(){

  let skillList = document.getElementsByClassName("skillsField"); 
  let strSkill = ""; 
  
  for(let e of skillList) {
    strSkill = strSkill + `<li> ${e.value} </li>`; 
  }
  
  document.getElementById("skillTemplate").innerHTML = strSkill;    
  }

//Add additional empty tech skills fields ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addNewTechSkillsField(){
  let newNodeTech = document.createElement('textarea'); 
  newNodeTech.classList.add('form-control');
  newNodeTech.classList.add('techSkillsField');
  newNodeTech.classList.add('mt-2');
  newNodeTech.setAttribute("rows", 1);
  newNodeTech.setAttribute("placeholder", "Enter here");

  let techSkillsOb = document.getElementById('tech');
  let techSkillsAddButtonOb = document.getElementById("techSkillsAddButton"); 

  techSkillsOb.insertBefore(newNodeTech, techSkillsAddButtonOb); 
}

//function: get information from tech skills field  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getTechSkillsInformation(){

  let techSkillList = document.getElementsByClassName("techSkillsField");   
  let strTech = "";  
  
  for(let e of techSkillList) {
    strTech = strTech + `<li> ${e.value} </li>`; 
  }
  
  document.getElementById("techSkillTemplate").innerHTML = strTech; 
    
  }

//function: get input from education field + start and end dates ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getEdu(){
  document.getElementById("eduNameField").innerHTML = document.getElementById("eduName").value; 
  document.getElementById("eduDegreeHeld").innerHTML = document.getElementById("degree").value;
  document.getElementById("educationTemplate").innerHTML = document.getElementById("descriptionField").value; 

  eduStart = document.getElementById("eduStartField").value; 
  eduEnd = document.getElementById("eduEndField").value; 
  eduTimeSpan = eduStart + " to " + eduEnd; 
  document.getElementById("eduDates").innerHTML = eduTimeSpan;  
}

//Adding additional certification fields ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addNewCertField(){
  let newNode = document.createElement('textarea'); 
  newNode.classList.add('form-control');
  newNode.classList.add('certField');
  newNode.classList.add('mt-2');
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Input any and all relevant certifications here...");

  let certOb = document.getElementById('cert');
  let certAddButtonOb = document.getElementById("certificationAddButton"); 

  certOb.insertBefore(newNode, certAddButtonOb); 
}

//function: get input from education field + start and end dates ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getCertificationInformation(){
    let certList = document.getElementsByClassName("certField"); 
	
    let certTemplateList = ""; 

    for (let e of certList) {
        certTemplateList += `<li> ${e.value} </li>`; 
    }	

    //Display certifications on resume template
  document.getElementById("certTemplate").innerHTML = certTemplateList;  

}

function cityStateZip(){
  let city = document.getElementById("cityField").value;
  let state = document.getElementById("stateField").value;
  let zipCode = document.getElementById("zipField").value;

  let address = (city + ", " + state + " " + zipCode);
    document.getElementById("addressTemplate").innerHTML = address; 
}


function generateResume(){

  // let x = document.getElementById("resume-template");
  // let y = document.getElementById("resume-form");

  // if (x.style.display === "none") {
  //   x.style.display = "block";
  //   y.style.display = "none";
  // } else {
  //   x.style.display = "none";
  //   y.style.display = "block";
  // } 
  
    //Contact Information
    let first = document.getElementById('firstNameField').value;
    let last =document.getElementById('lastNameField').value;	
    fullName=(first)+(" ")+last; 
    document.getElementById("nameTemplate").innerHTML = fullName; 

    document.getElementById("professionTemplate").innerHTML=document.getElementById('professionField').value;

	
    document.getElementById("phoneTemplate").innerHTML=document.getElementById("phoneField").value; 
    document.getElementById("emailTemplate").innerHTML=document.getElementById("emailField").value; 
	
    document.getElementById("linkedInTemplate").innerHTML=document.getElementById("linkedIn").value;
    document.getElementById("gitHubTemplate").innerHTML=document.getElementById("gitHub").value; 

	document.getElementById("resume-form").style.display="none";
	document.getElementById("resume-template").style.display = "block";	
  
}

	function printResume() 
	{
		window.print();
	}