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
const questions = [
  {
    question:
      "What is a logical data type that can have only the values true or false?",
    answers: ["Boolean", "String", "Number", "Function"],
    correctAnswer: "Boolean",
  },
  {
    question: "Which programming language is this quiz written in?",
    answers: ["JavaScript", "Python", "Java", "C++"],
    correctAnswer: "JavaScript",
  },
  // Add more questions as needed
];