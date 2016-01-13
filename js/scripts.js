$(document).ready(function() {
  var choice = prompt("Would you like to learn about dogs or cats?");

  if (choice === 'dogs') {
    $('#dogs').show();
  } else {
    $('#cats').show();
  }
});
