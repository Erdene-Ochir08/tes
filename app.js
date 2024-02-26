function handleKeyPress(event) {
  if (event.keyCode === 13) {
    var input = document.getElementById("input").value.toLowerCase();
    var response = document.getElementById("response");
    var date = document.getElementById("date");
    var time = document.getElementById("time");
    var warning = document.getElementById("warning");
    warning.style.color="red";

    if (input === "date") {
      response.textContent = "Would you like to go on a date? (Yes/No)";
    } else if (response.textContent === "Would you like to go on a date? (Yes/No)") {
      if (input === "yes") {
        response.textContent = "Great! Please choose a date and time:";
        date.style.display = "inline";
        time.style.display = "inline";
        warning.innerText = "Do not forget to screenshot and send me your choice. :)"
      } else if (input === "no") {
        response.textContent = "Maybe next time!";
      } else {
        response.textContent = "Please enter 'Yes' or 'No'.";
      }
    } else if (response.textContent === "Great! Please choose a date and time/:") {
      // Here you can handle the logic for sending an email with the selected date and time
      response.textContent = "Date and time selected. Confirmation sent!";
      date.style.display = "none";
      time.style.display = "none";
    }
    document.getElementById("input").value = "";
  }
}
