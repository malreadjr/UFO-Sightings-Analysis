// from data.js
var tableData = data;

var button = d3.select("#filter-btn");

var form = d3.select("#my-form");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
    var sel = document.getElementById('datetime');
    let inputValue = sel.value
    let newData = tableData.filter(item => item.datetime === inputValue)
    alert(newData.length)
    var elmtTable = document.getElementById('infotodisplay');
    var tableRows = elmtTable.getElementsByTagName('tr');
    var rowCount = tableRows.length;

for (var x=rowCount-1; x>=0; x--) {
   elmtTable.removeChild(tableRows[x]);
}
    

    var insert = document.getElementById("infotodisplay");  
    var new_row = "";   
    for (var t=0; t<newData.length; t++){
    new_row = insert.insertRow( t );
    new_row.insertCell(0).innerHTML = newData[t].datetime;
    new_row.insertCell(1).innerHTML = newData[t].city;
    new_row.insertCell(2).innerHTML = newData[t].state;
    new_row.insertCell(3).innerHTML = newData[t].country;
    new_row.insertCell(4).innerHTML = newData[t].shape;
    new_row.insertCell(5).innerHTML = newData[t].durationMinutes;
    new_row.insertCell(6).innerHTML = newData[t].comments;
    }
  

}