// from data.js
var tableData = data;

// YOUR CODE HERE!


var button = d3.select("#button");

button.on("click", function({
    // Select the input element 
    var inputElement = d3.select("datetime")
})

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

