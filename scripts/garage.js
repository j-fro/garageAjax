console.log('testify');

// Stores all cars in the garage
var garageArray = [];

$(document).ready(function() {
  console.log('jq testify');

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
  carArray.forEach(function(car) {
    $('#outputDiv').append(createCarHtml(car));
  });
}
