let button = document.getElementById("click")

button.addEventListener("click",function(){
    button.textContent = "Clicked"
})
// Check if jQuery is working by changing the button text
$(document).ready(function() {
    $("#myButton").text("jQuery is working!");
  });
  