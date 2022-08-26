let score = localStorage.getItem("score")
let finalScore = document.getElementById("score")
finalScore.textContent = "Your final score is " + score + "."
let savedInitials = JSON.parse(localStorage.getItem("initials"))

if (savedInitials === null) {
    savedInitials = []
}

function moveToEndHTML() {
    let initials = document.getElementById("initial").value
    savedInitials.push(initials + " - " + score)
    localStorage.setItem("initials", JSON.stringify(savedInitials))
    location.href = './end.html';
}
