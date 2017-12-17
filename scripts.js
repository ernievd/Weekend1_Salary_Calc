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
  $('#submitButton').on('click', AddData);
  $('#dataTableBody').on('click', '.deleteButton', RemoveRow);
}); // End document ready

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
  //   Sets there value to blank  - ''
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

  //This will find the values in all the current rows that are on the same line as the delete button (this)
  // var currentRow=$(this).closest("tr");
  // var col1=currentRow.find("td:eq(0)").text(); // get current row 1st TD value
  // var col2=currentRow.find("td:eq(1)").text(); // get current row 2nd TD
  // var col3=currentRow.find("td:eq(2)").text(); // get current row 3rd TD
  // var col4=currentRow.find("td:eq(3)").text(); // get current row 4rd TD
  // var col5=currentRow.find("td:eq(4)").text(); // get current row 5rd TD
  // var data=col1+"\n"+col2+"\n"+col3+"\n"+col4+"\n"+col5;
  //alert(data);

  //Get the value of the about to be delted employee and subtract it from the totalMonthlyCost
  var currentRow=$(this).closest("tr");
  var removedSalary=currentRow.find("td:eq(4)").text(); // get current row 3rd TD
  removedSalary = removedSalary / 12;
  console.log('removed salary is :' + removedSalary);
  totalMonthlyCost = totalMonthlyCost - removedSalary;
  $("#totalMonthlyCost").text("Total Monthly Cost with all employees: $" + Math.round(totalMonthlyCost));

  //Below are examples to stop at the tr tag and then delete everything in it
       // parents does the same
  //$(this).parent().parent().remove();
  //or
  //$(this).parents('tr').remove();
  //or
  $(this).closest('tr').remove();
} // END: RemoveRow()
