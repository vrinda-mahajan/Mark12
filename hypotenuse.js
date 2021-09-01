var baseInput = document.querySelector(".base-input");
var sideInput = document.querySelector(".side-input");
var calculateButton = document.querySelector(".calculate-button");
var output = document.querySelector(".output");
function handleClick() {
  var hypotenuse = Math.hypot(baseInput.value, sideInput.value);
  console.log(hypotenuse);
  output.innerText = "The length of hypotenuse is " + hypotenuse;
}
calculateButton.addEventListener("click", handleClick);
