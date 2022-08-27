// Get the score by the key "score" in the browser storage
let score = localStorage.getItem("score")
// Select the id="score" and store it in finalScore element
let finalScore = document.getElementById("score")
// Set the text content of finalScore element
finalScore.textContent = "Your final score is " + score + "."
// Get the stored initials from browser storage (convert string into object to get)
let savedInitials = JSON.parse(localStorage.getItem("initials"))

// If users fail to put initial then set the initial to an empty array
if (savedInitials === null) {
    savedInitials = []
}

// This function is called when users click "submit" button
function moveToEndHTML() {
    // Select initials that users submitted only and store it in initials element
    let initials = document.getElementById("initial").value
    // Set the saved initials together with scores
    savedInitials.push(initials + " - " + score)
    // Store initials in browser storage (convert object into string to store)
    localStorage.setItem("initials", JSON.stringify(savedInitials))
    // Go to the high score page
    location.href = './end.html';
}
