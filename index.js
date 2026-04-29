let home = document.getElementById("home-el")
let guest = document.getElementById("guest-el")
let addHome = 0
let addGuest = 0

function add1ButtonHome() {
    addHome += 1
    home.textContent = addHome
}

function add2ButtonHome() {
    addHome += 2
    home.textContent = addHome
}

function add3ButtonHome() {
    addHome += 3
    home.textContent = addHome
}

function add1ButtonGuest() {
    addGuest += 1
    guest.textContent = addGuest
}

function add2ButtonGuest() {
    addGuest += 2
    guest.textContent = addGuest
}

function add3ButtonGuest() {
    addGuest += 3
    guest.textContent = addGuest
}

function newGame() {
    guest.textContent = 0
    home.textContent = 0
    addHome = 0
    addGuest = 0
}

   
