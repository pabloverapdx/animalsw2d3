$(document).ready(function() {
  var choice = prompt("Would you like to learn about dogs, cats, or birds?");

  if (choice === 'dogs') {
    $('#dogs').show();
  }
  if (choice === 'cats') {
    $('#cats').show();
  }
  if (choice === 'birds') {
    $('#birds').show();
      }
  else {
    alert("check your spelling")
  }
});
