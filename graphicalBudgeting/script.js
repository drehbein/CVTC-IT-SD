document.addEventListener('DOMContentLoaded', function () {

  //populates date field based on current time
  date = new Date();
  month = date.toLocaleDateString('en-US', {month: 'long'});
  year = date.getFullYear();
  document.getElementById('date').textContent = month + " " + year;

});

// On navigation, switches between pages

function display (contentId, buttonID) {
  graph = document.getElementById("graph");
  breakdown = document.getElementById("breakdown");
  options = document.getElementById("options");
  graphButton = document.getElementById("graphButton");
  breakdownButton = document.getElementById("breakdownButton");
  optionsButton = document.getElementById("optionsButton");

  graph.style.display = "none";
  breakdown.style.display = "none";
  options.style.display = "none";
  graphButton.style.backgroundColor = "#702632"
  breakdownButton.style.backgroundColor = "#702632"
  optionsButton.style.backgroundColor = "#702632"

  content = document.getElementById(contentId);
  button = document.getElementById(buttonID);

  content.style.display = "block";
  button.style.backgroundColor = "#912F40";
}