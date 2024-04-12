document.getElementById("textForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var textInput = document.getElementById("textInput").value;
    setTimeout(function() {
      alert("You entered: " + textInput);
    }, 3000);
  });
  
  var counter = 0;
  var counterBtn = document.getElementById("counterBtn");
  setInterval(function() {
    counter++;
    counterBtn.textContent = counter;
  }, 1000);
  