console.log('js sourced');

///////The application should have an input form that collects
///*** employee first name, last name, ID number, job title, annual salary.
//var randomNumber = getRandomNumber();

$(document).ready(function() {
  console.log('jquery ready');
  //$('#submitButton').on('click', getUserInput, compareNumbers);
  //$('#submitButton').on('click', AddText);

  // $('#submitButton').on('click',function(){
  //   $('#putHere').text('changed!');
  // });

  //$('#submitButton').click(AddText);
  $('#submitButton').click(function() {
    $('#putHere').text("clicked");
  });

  // $('.inputs').append('<button id="playAgain">Play again!</button>');


}); // End document ready

function AddText() {
  console.log('AddText clicked');
  $('#putHere').text('changed!!');
} // END: AddText



class Employee {

  constructor(firstName,lastName,idNum,jobTitle,annualSalary){
    this.firstName=firstName;
    this.lastName=lastName;
    this.idNum=idNum;
    this.jobTitle=jobTitle;
    this.annualSalary=annualSalary;
  }//end constructor

}//end class
