// Purpose: creat a custom person object with the following properties: 
//     1. a first name 
//     2. a last name 
//     3. a course 
//     4. a section number 
//     5. a role (you may assume the user will enter "instructor" or "student")
// Add method to your "person" object that will generate the desired output when called. Example:
// (firstName) (lastName) has the role of (role) in (class) section (sectionNumber)

// The properties of your "person" object must hold the values entered in the text boxes by the user.
// You MUST use the innerHTML property to display your ouput on the original Web page as shown in the video above.
// IMPORTANT! You must construct a person object. Completing this assignment without doing that will result in a failing grade.
// IMPORTANT! You must use the " this " keyword to reference your "person" object's properties in your output. Completing this assignment without doing that will result in a failing grade.
// Note: Do NOT use the "onclick" attribute in your input element, add event listeners instead. Doing so will result in a 30 point deduction. 
// Main focus: constructor function & object creation 

//Add eventListener
document.getElementById("show").addEventListener("click", personInput);

function personInput() {
    let person = { //creating person object
        //adding properties to person object 
        firstName: document.getElementById("firstName").value, //property values stem from user input via textboxes
        lastName: document.getElementById("lastName").value,
        course: document.getElementById("course").value,
        section: document.getElementById("section").value,
        role: document.getElementById("role").value,
        
        getInfo: function() { //adding getInfo method to person object
            return this.firstName +" "+ this.lastName + " has the role of " + this.role.toLowerCase() + " in " + this.course.toUpperCase() +" section "+ this.section +".";
        }
    };
//display user input: full name, course, section, and role
document.getElementById("demo").innerHTML = person.getInfo();

}


