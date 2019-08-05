// from data.js 
var filterUFOdata = data;

// Use D3 to create the table body
var tbody = d3.select("tbody");

// Use D3 to set the list
// var datetimeli = d3.select('#datetime');
// var cityli = d3.select('#city');
// var stateli = d3.select('#state');
// var countryli = d3.select('#country');
// var shapeli = d3.select('#shape');
var formcontrol = d3.selectAll('.form-control');



// Populate the table with all the data first 

data.forEach((UFOSighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});


/*            BUTTON HANDLING SECTION             */

// Set the filter button
var button = d3.select("#filter-btn");
console.log('Here is the button:', button);

// Set the reset button
var button2 = d3.select("#reset-btn");
console.log('Here is the button:', button2);

// Filter click 
button.on("click", function () {
    // Prevents the page from refreshing
    d3.event.preventDefault();

    console.log('HEY THE BUTTON CLICK HANDLER WORKS!');

    // from data.js 
    var filterUFOdata = data;



    // Select the input element (date time)
    var inputElement1 = d3.select("#datetime");
    console.log('Input Element1:', inputElement1);

    // Get value
    var dateInput = inputElement1.property('value');
    console.log('Date Input:', dateInput);

    // Select the input element (city)
    var inputElement2 = d3.select("#city");
    console.log('Input Element2:', inputElement2);

    // Get value
    // Convert string to lower case to take in all cases
    var cityInput = inputElement2.property('value').toLowerCase();
    console.log('City Input:', cityInput);

    // Select the input element (state)
    var inputElement3 = d3.select("#state");
    console.log('Input Element3:', inputElement3);

    // Get value
    // Convert string to lower case to take in all cases
    var stateInput = inputElement3.property('value').toLowerCase();
    console.log('State Input:', stateInput);

    // Select the input element (country)
    var inputElement4 = d3.select("#country");
    console.log('Input Element:', inputElement4);

    // Get value 
    // Convert string to lower case to take in all cases
    var countryInput = inputElement4.property('value').toLowerCase();
    console.log('Country Input:', countryInput);

    // Select the input element (shape)
    var inputElement5 = d3.select("#shape");
    console.log('Input Element:', inputElement5);

    // Get value
    // Convert string to lower case to take in all cases
    var shapeInput = inputElement5.property('value').toLowerCase();
    console.log('Shape Input:', shapeInput);


    // Filter by date input
    if (dateInput !== "") {

        filterUFOdata = filterUFOdata.filter(
            function (obj) {
                // return obj['datetime'] === dateInput && obj['state'] == 'ca' // all in one
                return obj['datetime'] === dateInput
            }
        );
    }
    if (cityInput !== "") {

        filterUFOdata = filterUFOdata.filter(
            function (obj) {
                // return obj['datetime'] === dateInput && obj['state'] == 'ca' // all in one
                return obj['city'] === cityInput
            }
        );
    }
    if (stateInput !== "") {

        filterUFOdata = filterUFOdata.filter(
            function (obj) {
                // return obj['datetime'] === dateInput && obj['state'] == 'ca' // all in one
                return obj['state'] === stateInput
            }
        );
    }
    if (countryInput !== "") {

        filterUFOdata = filterUFOdata.filter(
            function (obj) {
                // return obj['datetime'] === dateInput && obj['state'] == 'ca' // all in one
                return obj['country'] === countryInput
            }
        );
    }
    if (shapeInput !== "") {

        filterUFOdata = filterUFOdata.filter(
            function (obj) {
                // return obj['datetime'] === dateInput && obj['state'] == 'ca' // all in one
                return obj['shape'] === shapeInput
            }
        );
    }
    if (dateInput === "" && cityInput === ""
        && stateInput === "" && countryInput === ""
        && shapeInput === "") {
        console.log("The form is blank");
        tbody.html('');
        console.log('Blanking the form');
        data.forEach((UFOSighting) => {
            var row = tbody.append("tr");
            Object.entries(UFOSighting).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });
        console.log('We reached here');

    }
    // remove the data from tbody
    tbody.html('');

    // Put the data filtered on dates into the table
    filterUFOdata.forEach((UFOSighting) => {
        console.log('Test');
        var row = tbody.append("tr");
        Object.entries(UFOSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });




});


// Reset button set 


button2.on("click", function () {
    d3.event.preventDefault();

    // var dateInput = '';
    // var cityInput = '';
    // var stateInput = '';
    // var countryInput = '';
    // var hapeInput = '';
    // var filterUFOdata = '';


    // lists.html('');
    formcontrol.html('');
    tbody.html('');
    data.forEach((UFOSighting) => {
        var row = tbody.append("tr");
        Object.entries(UFOSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

});