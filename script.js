const minute = document.getElementById("minute");

const display = document.getElementById("demo");

const togle = document.querySelector(".display");

const btn = document.querySelector("button");

btn.addEventListener("click", function minuteConvertor() {
if(minute.value <0){
minute.value="";
}
togle.style.display = "block";

let converted = minute.value * 60

display.innerHTML = minute.value + " minute is: " + converted + " seconds";

});