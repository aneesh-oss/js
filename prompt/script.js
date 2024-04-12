document.getElementById("addInfoBtn").addEventListener("click", function() {
    var info = prompt("Enter some information:");
    if (info !== null && info !== "") {
      var listItem = document.createElement("li");
      listItem.textContent = info;
      document.getElementById("infoList").appendChild(listItem);
    }
  });
  