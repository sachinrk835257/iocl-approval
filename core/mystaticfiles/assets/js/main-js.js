console.log('script is running 54')

function convertToUppercase(input) {
    input.value = input.value.toUpperCase();
}

var dateTime = document.getElementById('dateTime');
// console.log(dateTime)

function getTime() {
    // console.log('in GetTime')
// Create a new Date object
var currentDate = new Date();

// Extract individual components of the date and time
var date = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Months are zero-based
var year = currentDate.getFullYear();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
   
// Format the date and time
var formattedDate = year + '-' + month + '-' + date;
var formattedTime = hours + ':' + minutes + ':' + seconds;
dateTime.value = formattedDate + "  " + formattedTime

}
getTime()
setInterval(getTime, 1000);

window.addEventListener('unload', function(event) {
    console.log("234567")
    // Send an asynchronous request to the server to indicate tab closure
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/logout_page/', true); // Adjust URL as needed
    xhr.send();
});

function checkConnection() {
    if (!navigator.onLine) {
        alert("Network connection not available. Please check your internet connection.");
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}