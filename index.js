let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")


function addToHome(increment) {
    homeScore += increment
    homeScoreEl.textContent = homeScore    
}

function addToGuest(increment) {
    guestScore += increment
    guestScoreEl.textContent = guestScore    
}


function reset() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore 
    guestScoreEl.textContent = guestScore  
}

