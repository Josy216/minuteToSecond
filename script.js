const minute = document.getElementById("minute");

const display = document.getElementById("demo");

const togle = document.querySelector(".display");
const togle1 = document.querySelector(".error");

const btn = document.querySelector("button");

btn.addEventListener("click", function minuteConvertor() {
if(minute.value < 0){
togle1.style.display = "block";
display.innerHTML ="minute can't be negative";
}
else{
togle.style.display = "block";

let converted = minute.value * 60

display.innerHTML = minute.value + " minute is: " + converted + " seconds";
}

});