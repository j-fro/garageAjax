console.log('testify');

// Stores all cars in the garage
var garageArray = [];

$(document).ready(function() {
    console.log('jq testify');

    getCarsFromWeb();

    $('#parkCarButton').on('click', function() {
        // Create a new car from user inputs
        var newCar = {
            year: $('#year').val(),
            make: $('#make').val(),
            model: $('#model').val(),
            description: $('#description').val(),
            picURL: $('#picURL').val()
        };
        console.log('Adding car ', newCar);
        garageArray.push(newCar);
        displayCars(garageArray);
    });
});

function createCarHtml(car) {
    /* Returns an HTML string for displaying a car wrapped in a div */
    var html = '<div class="carDisplay">';
    html += '<p><strong>' + car.year + ' ' + car.make + ' ' + car.model + '</strong></p>';
    html += '<p>' + car.description + '</p>';
    html += '<img src="' + car.picURL + '">';
    return html;
}

function displayCars(carArray) {
    /* Puts an array of cars on the DOM */
    // First wipe the existing cars on the DOM
    $('#outputDiv').html('');
    console.log("Displaying cars ", carArray);
    carArray.forEach(function(car) {
        console.log("Displaying car ", car);
        $('#outputDiv').append(createCarHtml(car));
    });
}

function getCarsFromWeb() {
    console.log("Getting cars from somewhere");
    // Make an AJAX call to a url
    $.ajax({
        url: "http://devjana.net/support/cars.json",
        dataType: 'JSON',
        success: function(data) {
            console.log('Successful call, received ', data);
            data.cars.forEach(function(car) {
                garageArray.push(car);
                displayCars(garageArray);
            });
        }
    });
}
