var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.value = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
}