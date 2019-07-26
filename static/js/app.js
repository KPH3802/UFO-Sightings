// from data.js 
var filterUFOdata = data;

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

button.on("click", function () {
    // Prevents the page from refreshing
    d3.event.preventDefault();

    console.log('HEY THE BUTTON CLICK HANDLER WORKS!');

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
    var cityInput = inputElement2.property('value');
    console.log('City Input:', cityInput);

    // Select the input element (state)
    var inputElement3 = d3.select("#state");
    console.log('Input Element3:', inputElement3);

    // Convert to lowercase to handle both upper and lower case entries
    // var inputElement3 = inputElement3.toLowerCase();
    

    // Get value
    var stateInput = inputElement3.property('value');
    console.log('State Input:', stateInput);

    // var stateInput2 = stateInpu
    // console.log('Type of State varilable:', typeof stateInput2);

    // Select the input element (country)
    var inputElement4 = d3.select("#country");
    console.log('Input Element:', inputElement4);

    // Get value
    var countryInput = inputElement4.property('value');
    console.log('Country Input:', countryInput);

    // Select the input element (shape)
    var inputElement5 = d3.select("#shape");
    console.log('Input Element:', inputElement5);

    // Get value
    var shapeInput = inputElement5.property('value');
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


    // remove the data from tbody
    tbody.html('');

    // Put the data filtered on dates into the table
    filterUFOdata.forEach((UFOSighting) => {
        var row = tbody.append("tr");
        Object.entries(UFOSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});



