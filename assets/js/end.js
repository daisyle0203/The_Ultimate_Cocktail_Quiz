// Get the store initials in the browser storage by the key "initials"
let savedInitials = JSON.parse(localStorage.getItem("initials"))
// Select id="list" in html and store it in variable list
let list = document.querySelector("#list")

// This function is to render the stored initial with scores
function renderList() {
    for (let savedInitial of savedInitials) {
        // Create li tag in the html
        let li = document.createElement("li")
        // Set the li text to the saved initials that users submitted
        li.textContent = savedInitial
        list.appendChild(li)
    }
}
renderList()

// This function is called when users click "Clear high score" button
function clearHighScore() {
    list.innerHTML = ""
    localStorage.clear()
}