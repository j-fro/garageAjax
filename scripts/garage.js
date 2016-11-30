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
    $('#outputDiv').html('');
    garageArray.forEach(function(car) {
      $('#outputDiv').append(createCarHtml(car));
    });
  });
});

function createCarHtml(car) {
  /* Returns an HTML string for displaying a car wrapped in a div */
  var html = '<div>';
  html += '<p>' + car.year + ' ' + car.make + ' ' + car.model + '</p>';
  html += '<p>' + car.description + '</p>';
  html += '<img src="' + car.picURL + '">';
  return html;
}
