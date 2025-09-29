function display (contentId) {
  graph = document.getElementById("graph");
  breakdown = document.getElementById("breakdown");

  graph.style.display = "none";
  breakdown.style.display = "none";

  content = document.getElementById(contentId);
  
  content.style.display = "block";
}