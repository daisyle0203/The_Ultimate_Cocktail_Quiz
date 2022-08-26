let savedInitials = JSON.parse(localStorage.getItem("initials"))
console.log(savedInitials)
let list = document.querySelector("#list")


function renderList() {
    for (let i =0; i < savedInitials.length; i++) {
        let li = document.createElement("li")
        let savedInitial = savedInitials[i]
        li.textContent = savedInitial
        list.appendChild(li)
    }
}
renderList()

function clearHighScore() {
    list.innerHTML = ""
    localStorage.clear()
}