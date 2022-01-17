let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

localStorage.setItem("lead", "www.lead.com")
localStorage.getItem("lead")
localStorage.clear()


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
        <a href="http://${myLeads[i]}" target="_blank" rel="noopener noreferrer">${myLeads[i]}</a>
    </li>
    `
}
ulEl.innerHTML += listItems
}