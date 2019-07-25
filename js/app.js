// from data.js 
var tableData = data;

// Use D3 to create the table body
var tbody = d3.select("tbody");

// Populate the table with all the data first 

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

  var filtered_dates = data.filter(
    function(obj){ 
      // return obj['datetime'] === dateInput && obj['state'] == 'ca' // all in one
      return obj['datetime'] === dateInput
    }
  )


  console.log('Filtered Dates:', filtered_dates);

  // remove the data from tbody
  tbody.html('');

// Put the data filtered on dates into the table
  filtered_dates.forEach((UFOSighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});

//   button.on("click", function() {
//     // Prevents the page from refreshing
//     d3.event.preventDefault();

//        // Select the input element (state)
//    var inputElement2 = d3.select("#state");
//    console.log('Input Element:', inputElement2);
  
//    // Get value
//    var stateInput = inputElement2.property('value');
//    console.log('State Input:', stateInput);

//   // Filter by state input
//   var filtered_states = filtered_dates.filter(
//     function(obj){ 
//       return obj['state'] === stateInput;
//     }
//   );
    
//   // tbody.html('');

//   filtered_states.forEach((UFOSighting) => {
//     var row = tbody.append("tr");
//     Object.entries(UFOSighting).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });
// });
