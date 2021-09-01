var inputAngle = document.querySelectorAll(".angle-input");
var isTriangleButton = document.querySelector(".is-triangle");
var output = document.querySelector(".output");

console.log(inputAngle);
function handleClick() {
  var sum =
    Number(inputAngle[0].value) +
    Number(inputAngle[1].value) +
    Number(inputAngle[2].value);
  console.log(sum);
  if (sum == 180) {
    output.innerText = "Yes it will form a triangle";
  } else {
    output.innerText = "Oh no! it will not form a triangle";
  }
}
isTriangleButton.addEventListener("click", handleClick);
