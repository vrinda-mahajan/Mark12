var quizForm = document.querySelector(".quiz-form");
var submitButton = document.querySelector(".submit-button");
var output = document.querySelector(".output");

const correctAnswers = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a + b + c",
  "no",
  "45°",
];

function calculateScore() {
  const data = new FormData(quizForm);
  var score = 0,
    index = 0;
  for (var value of data.values()) {
    if (value === correctAnswers[index]) {
      score++;
      index++;
    } else {
      index++;
    }
  }
  output.innerText = "Your score is " + score;
}

submitButton.addEventListener("click", calculateScore);
