document.querySelector(".container--home-content--title").textContent = "barnsley - hello"

let umbraco_button = document.createElement("a")
let my_header = document.querySelector(".masthead")
let my_other_header = document.querySelector(".masthead__wrapper animated")

umbraco_button.classList.add("umbraco-button")
umbraco_button.textContent = "go to umbraco"
// umbraco_button.attributes.add("href = www.google.com")

// my_header.appendChild(umbraco_button)
my_other_header.appendChild(umbraco_button)