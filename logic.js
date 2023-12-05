console.log("hello")
// Create a code quiz that contains the following requirements:
// * A start button that when clicked a timer starts and the first question appears.
//  create start function
//  add timer variable
//  event handler for start button
//   Questions contain buttons for each answer.
//   display questions
//   create buttons for each answer
//   link the correct answer to score
//   * When answer is clicked, the next question appears
//   function for next question
// function to move to next question
// if statement to check if its the last question, if so end the quiz and show highscore
//   * If the answer clicked was incorrect then subtract time from the clock
//  function to check answer
//  if statement to check if answer is correct and if incorrect to decrease time
// * The quiz should end when all questions are answered or the timer reaches 0.
//  function to end quiz
//  display final score
//  stop the timer
//   * When the game ends, it should display their score and give the user the ability to save their initials and their score
//   function to display highscore
//   function to save the highscore
//  prompt for intials
//   function to display intial input

document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("start");
  const timeDisplay = document.getElementById("time");
  const questionTitle = document.getElementById("question-title");
  const choicesContainer = document.getElementById("choices");
  const initialsInput = document.getElementById("initials");
  const submitBtn = document.getElementById("submit");

  let currentQuestionIndex = 0;
  let score = 0;
  let timer;
  let timerDuration = 60; // seconds

  startBtn.addEventListener("click", startQuiz);
  submitBtn.addEventListener("click", endQuiz);

  function startQuiz() {
    startBtn.parentNode.classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
    timer = setInterval(updateTimer, 1000);
    displayQuestion();
  }

  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.question;
    choicesContainer.innerHTML = "";

    for (let i = 0; i < currentQuestion.answers.length; i++) {
      const answerBtn = document.createElement("button");
      answerBtn.textContent = currentQuestion.answers[i];
      answerBtn.addEventListener("click", function () {
        checkAnswer(currentQuestion.answers[i]);
      });
      choicesContainer.appendChild(answerBtn);
    }
  }

  function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.correctAnswer) {
      score++;
    } else {
      // Subtract time for incorrect answer
      timerDuration -= 5;
    }
    nextQuestion();
  }

  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }

  function updateTimer() {
    if (timerDuration <= 0) {
      endQuiz();
    } else {
      timerDuration--;
      timeDisplay.textContent = timerDuration;
    }
  }
  function saveHighscore(initials, score) {
    // Implement your logic to save the highscore, e.g., using local storage
    // This example assumes that highscores are stored as an array of objects
    const highscores = JSON.parse(localStorage.getItem("score")) || [];
    highscores.push({ initials: initials, score: score });
    localStorage.setItem("highscores", JSON.stringify(highscores));
  }

  // The rest of your existing code...

  function endQuiz() {
    clearInterval(timer);
    document.getElementById("questions").classList.add("hide");
    document.getElementById("end-screen").classList.remove("hide");
    document.getElementById("final-score").textContent = score;
    const initials = initialsInput.value;
    submitBtn.addEventListener("click", function () {
      localStorage.setItem("score", score);
      localStorage.setItem("initials", initials);
      saveHighscore(initials, score);
    });
  }
});
