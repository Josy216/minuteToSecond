const minute = document.getElementById("minute");
const display = document.getElementById("demo");
const togle = document.querySelector(".display");
const btn = document.querySelector("button");

btn.addEventListener("click", function minuteConvertor() {
  let inputValue = minute.value;

  // Remove previous error state
  minute.classList.remove("error");
  display.classList.remove("error");

  if (inputValue < 0) {
    display.innerHTML = "Minute cannot be negative!";
    display.classList.add("error");
    minute.classList.add("error");
    togle.style.display = "block"; // Show the message
    return;
  }

  let converted = inputValue * 60;
  display.innerHTML = `${inputValue} minute is: ${converted} seconds`;
  togle.style.display = "block";
});