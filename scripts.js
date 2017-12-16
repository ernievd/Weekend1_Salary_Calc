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

  //Event Listeners
  $('#submitButton').on('click', GetData);
  $('#dataTableBody').on('click', '.deleteButton', RemoveRow);
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
    //Calulate the employees salary right in the constructor
    this.monthlyCost=salary / 12;
  }//end constructor
}//end class

//Create a global array to store all employee data objects
var employeeDataArray = [];
//Create a global to store the total monthly cost
var totalMonthlyCost = 0;

//Create a function to get all input data, store it in the employeeDataArray
//    and clear out all input boxes
function GetData() {
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var idNumber = $('#idNumber').val();
  var jobTitle = $('#jobTitle').val();
  var salary = $('#salary').val();
  //Add it to the array
  employeeDataArray.push(new Employee(firstName,lastName,idNumber,jobTitle,salary));

  console.log(employeeDataArray);

  //Clear out all the input cells for bot text and number type in the input class
  //$('.inputs').val('');
  //$('#firstName').val('');
  $('.inputs input[type="text"], input[type="number"]').val('');

  //Calculate the monthly costs
  totalMonthlyCost += salary / 12;
  //Add the total monthly cost to the DOM
  $("#totalMonthlyCost").text("Total Monthly Cost with all employees: $" + Math.round(totalMonthlyCost));

  //Add employee data to the DOM
  // $('.inputs').append('<button id="playAgain">Play again!</button>');
  var $row = $('<tr>');
  $row.append('<td>' + firstName + '</td>');
  $row.append('<td>' + lastName + '</td>');
  $row.append('<td>' + idNumber + '</td>');
  $row.append('<td>' + jobTitle + '</td>');
  $row.append('<td>' + salary + '</td>');
  $row.append('<td><button class="deleteButton">Delete</button></td>');
  $('#dataTableBody').append($row);
} // END: GetData

//delete row -   $('#cohortTableBody').on('click', '.delete' , deleteCohortRow);
function RemoveRow() {
  console.log('delete click');
} // END: RemoveRow
