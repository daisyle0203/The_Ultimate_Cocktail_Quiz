// Create 5 different variables that store questions, choices and answers
let problem1 = {
    question: "1. What gives a whiskey sour its frothy top?",
    choices: ["Marshmallow", "Lemon juice", "Egg white", "Cream"],
    answer: "Egg white",
}
let problem2 = {
    question:
        "2. Which destination shares its name with a cocktail containing whiskey and sweet vermouth?",
    choices: ["Moscow Mule", "Cuba Libre", "Manhattan", "Panama"],
    answer: "Manhattan",
}
let problem3 = {
    question: "3. What transforms a Classic Martini to a Dirty Martini?",
    choices: ["Tomato juice", "Lemon juice", "Lime juice", "Olive juice"],
    answer: "Olive juice",
}
let problem4 = {
    question: "4. If you mix Guinness and Champagne, what cocktail do you get?",
    choices: ["Black Jack", "Black Russian", "Black Velvet", "Black Widow"],
    answer: "Black Velvet",
}
let problem5 = {
    question:
        "5. Which classic cocktail includes vodka, triple sec, cranberry juice, and lime juice?",
    choices: ["Old Fashioned", "Mojito", "Margarita", "Cosmopolitan"],
    answer: "Cosmopolitan",
}

let problems = [problem1, problem2, problem3, problem4, problem5]
let counter = 0
let currentProblem = problems[counter]
let score = 0

// The following function renders questions and choices
function problemGenerator(problem) {
    // Select id="question" in html and store it in variable questionEl
    let questionEl = document.querySelector("#question")
    // Select all class="choice" in html and store it in array choicesEl
    let choicesEl = Array.from(document.querySelectorAll(".choice"))
    // Set text content of id="question" to the value of problem.question
    questionEl.textContent = problem.question
    // Select the choices from the array 
    for (let i = 0; i < problem.choices.length; i++) {
        choicesEl[i].textContent = i + 1 + ". " + problem.choices[i]
    }
}
problemGenerator(currentProblem)

// Select class="container" in html and store it in variable containerEl
let containerEl = document.querySelector(".container")
// Add click event to containerEl element
containerEl.addEventListener("click", function (event) {
    // Limit click event to only class="choice"
    let element = event.target
    if (element.matches(".choice")) {
        // Set the answer to only choice name
        let selection = element.textContent.substring(3)
        // Select the class="result" in html and store in it variable result
        let result = document.querySelector(".result")
        // If the answer is wrong
        if (selection !== currentProblem.answer) {
            // Reduce the timer by 10 sec and show the text "Wrong!" in the variable result
            result.textContent = "Wrong!"
            timer -= 10
        } else {
            // Otherwise, show "Correct!"
            result.textContent = "Correct!"
        }
        // Set the function to where it only renders 5 questions
        if (counter < problems.length - 1) {
            counter++
            currentProblem = problems[counter]
            problemGenerator(currentProblem)
        } else {
            // Score equals timer and it is saved in the browser storage
            score = timer
            localStorage.setItem("score", score)
            // The game stops when the timer ends and it goes to the result page
            location.href = './result.html';
        }
    }
})

// Set the timer to 75 seconds
let timer = 75
// Store id="time" in html in timerEl element
let timerEl = document.getElementById("time")
// Set the text content of timerEl
timerEl.textContent = "Time: " + timer
// Set the timer countdown to every second
let interval = setInterval(countDown, 1000)
function countDown() {
    timer--
    timerEl.textContent = "Time: " + timer
    // The game stops when timer equal 0, score is saved in the browser storage 
    if (timer === 0) {
        localStorage.setItem("score", score)
        // Stop the timer and go to the result page
        clearInterval(interval)
        location.href = './result.html';
    }
}