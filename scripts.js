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
  // $('#submitButton').click(function() {
  //   $('#putHere').text("clicked");
  // });

  $('#submitButton').on('click', GetData);


  // $('.inputs').append('<button id="playAgain">Play again!</button>');


}); // End document ready

function AddText() {
  console.log('AddText clicked');
  $('#putHere').text('changed!!');
} // END: AddText

class Employee {
  constructor(first,last,id,title,salary){
    this.firstName=first;
    this.lastName=last;
    this.idNum=id;
    this.jobTitle=title;
    this.annualSalary=salary;
  }//end constructor
}//end class

//create a global array to store all employee data objects
var employeeDataArray = [];
function GetData() {
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var idNumber = $('#idNumber').val();
  var jobTitle = $('#jobTitle').val();
  var salary = $('#salary').val();
  // add it to the array
  employeeDataArray.push(new Employee(firstName,lastName,idNumber,jobTitle,salary));

  //  var firstName = $('#firstName').val;
  console.log(employeeDataArray);

  //clear out all the input cells
  //$('.inputs').val(''); //clearing out all the input field
  $('.inputs input[type="text"]').val('');
  //$('#firstName').val('');

} // END: GetData
