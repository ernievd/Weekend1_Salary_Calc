
//Create a global array to store all employee data objects
var employeeDataArray = [];
//Create a global to store the total monthly cost
var totalMonthlyCost = 0;
//Create a global to store the default total monthly message (so we dont have to keep typing it)
var monthlyCostMessage = "Total Monthly Cost of All Current Employees: $";

class Employee {
  constructor(first,last,id,title,salary){
    this.firstName=first;
    this.lastName=last;
    this.idNum=id;
    this.jobTitle=title;
    this.annualSalary=salary;
    //Calulate the employees monthly salary right in the constructor
    this.monthlyCost=salary / 12;
  }//end constructor
}//end class

$(document).ready(function() {
  //console.log('jquery ready');

  //** Some submit button examples below
  //$('#submitButton').on('click', getUserInput, compareNumbers);
  //$('#submitButton').on('click', AddText);

  // $('#submitButton').on('click',function(){
  //   $('#putHere').text('changed!');
  // });

  //$('#submitButton').click(AddText);
  // $('#submitButton').click(function() {
  //   $('#putHere').text("clicked");
  // });

  //Add default monthlyCostMessage
  $('#totalMonthlyCost').text(monthlyCostMessage + totalMonthlyCost)

  //Event Listeners
  //$('#submitButton').on('click', AddData);
  $('#submitButton').on('click', Main);
  $('#dataTableBody').on('click', '.deleteButton', RemoveRow);

}); // End document ready

  //Created Main to use for better code flow control
 function Main() {
   var onTrue = CheckForEmpty();
   if (onTrue === true){
     AddData();
   }
   else{
     alert('All fields are not filled in. Please complete all fields to continue. ');
   }
 } // END: Main

//Check for empty fields
function CheckForEmpty() {
  if ( ($('#firstName').val() != '') &&
   ($('#lastName').val() != '') &&
    ($('#idNumber').val() != '') &&
     ($('#jobTitle').val() != '') &&
      ($('#salary').val() != '')  ){
    //console.log("not empty");
    return true;
  }
  else {
    //console.log("empty cell found!");
    return false;
  }
} // END: CheckForEmpty

//Create a function to get all input data, store it in the employeeDataArray
//    and clear out all input boxes
function AddData() {
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var idNumber = $('#idNumber').val();
  var jobTitle = $('#jobTitle').val();
  var salary = $('#salary').val();
  //$('div').data("")

  //Add data to the array
  employeeDataArray.push(new Employee(firstName,lastName,idNumber,jobTitle,salary));

  //Clear out all the input cells for both text and number type in the input class
  //   Sets the value to blank  - ''
  //$('.inputs').val('');
  //$('#firstName').val('');
  $('.inputs input[type="text"], input[type="number"]').val('');

  //Calculate the monthly costs
  totalMonthlyCost += salary / 12;
  //Add the total monthly cost to the DOM
  $('#totalMonthlyCost').text(monthlyCostMessage + Math.round(totalMonthlyCost));
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

  //This will find the values in all the current rows that are on the same line as the delete button (this)
  // var currentRow=$(this).closest("tr");
  // var col1=currentRow.find("td:eq(0)").text(); // get current row 1st TD value
  // var col2=currentRow.find("td:eq(1)").text(); // get current row 2nd TD
  // var col3=currentRow.find("td:eq(2)").text(); // get current row 3rd TD
  // var col4=currentRow.find("td:eq(3)").text(); // get current row 4rd TD
  // var col5=currentRow.find("td:eq(4)").text(); // get current row 5rd TD
  // var data=col1+"\n"+col2+"\n"+col3+"\n"+col4+"\n"+col5;
  //alert(data);

  //Get the salary value of the to be deleted employee and subtract it from the totalMonthlyCost
  var currentRow=$(this).closest("tr");
  var removedSalary=currentRow.find("td:eq(4)").text(); // get current row 3rd TD
  removedSalary = removedSalary / 12;
  //console.log('removed salary is :' + removedSalary);
  totalMonthlyCost = totalMonthlyCost - removedSalary;
  $('#totalMonthlyCost').text(monthlyCostMessage + Math.round(totalMonthlyCost));
  //Below are examples to stop at the tr tag and then delete everything in it
       // .parents does the same
  //$(this).parent().parent().remove();
  //or
  //$(this).parents('tr').remove();
  //or
  $(this).closest('tr').remove();
} // END: RemoveRow()
