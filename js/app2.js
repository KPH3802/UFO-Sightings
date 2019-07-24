// from data.js
var tableData = data;

// Use D3 to create the table body
var tbody = d3.select("tbody");
// var tbl = d3.select("")
// var row = tbody.append("tr");
// date/time, city, state, country, shape, and comment
// row.append("td").text(filteredData[0]);
// row.append("td").text(filteredData[1]);
// row.append("td").text(filteredData[2]);
// row.append("td").text(filteredData[3]);
// row.append("td").text(filteredData[4]);
// row.append("td").text(filteredData[5]);
data.forEach((UFOSighting) => {
   var row = tbody.append("tr");
   Object.entries(UFOSighting).forEach(([key, value]) => {
     var cell = row.append("td");
     cell.text(value);
   });
 });


/*            BUTTON HANDLING SECTION             */

var button = d3.select("#filter-btn");
console.log('Here is the button:', button);

button.on("click", function() {
  // Prevents the page from refreshing
  d3.event.preventDefault();

  console.log('HEY THE BUTTON CLICK HANDLER WORKS!');

   // Select the input element (date time)
   var inputElement = d3.select("#datetime");
   console.log('Input Element:', inputElement);

   // Get value
   var dateInput = inputElement.property('value');
   console.log('Date Input:', dateInput);

  // Filter by date input
  // filter 'iterates' over a list of items, and performs a check on each item
  // example: greater_than_five_list = array.filter(function(value){ return value >= 5 })
  var filtered_dates2 = data.filter(function(obj){ return obj['datetime'] === dateInput });

  var filtered_dates = data.filter(
    function(obj){ 
      // return obj['datetime'] === dateInput && obj['state'] == 'ca' // all in one
      return obj['datetime'] === dateInput
    }
  );

  // Filter by state input
  filtered_states = filtered_dates.filter(
    function(obj){ 
      return obj['state'] == stateInput;
    }
  )
  

  console.log('Filtered Dates:', filtered_dates);

  // remove the data from tbody
  tbody.html('');

  filtered_dates.forEach((UFOSighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

})
