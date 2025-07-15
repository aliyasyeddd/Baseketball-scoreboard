const homeScoreBtnOne = document.getElementById("home-score-btn-1")
const homeStoreEl =document.getElementById("home-score")
const homeScoreBtnTwo = document.getElementById("home-score-btn-2")
const homeScoreBtnThree = document.getElementById("home-score-btn-3")

let homeScore = 0
let guestScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}


function increaseHomeScoreTwo ()  {
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreThree ()  {
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

homeScoreBtnOne.addEventListener("click", increaseHomeScoreOne)
homeScoreBtnTwo.addEventListener("click", increaseHomeScoreTwo)
homeScoreBtnThree.addEventListener("click", increaseHomeScoreThree)

const guestScoreBtnOne = document.getElementById("guest-score-btn-1")
const guestStoreEl = document.getElementById("guest-score")
const guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
const guestScoreBtnThree = document.getElementById("guest-score-btn-3")

function increaseGuestScoreOne ()  {
    guestScore += 1
    guestStoreEl.textContent = guestScore
}

function increaseGuestScoreTwo ()  {
    guestScore += 2
    guestStoreEl.textContent = guestScore
}

function increaseGuestScoreThree ()  {
    guestScore += 3
    guestStoreEl.textContent = guestScore
}

guestScoreBtnOne.addEventListener("click", increaseGuestScoreOne)
guestScoreBtnTwo.addEventListener("click", increaseGuestScoreTwo)
guestScoreBtnThree.addEventListener("click", increaseGuestScoreThree)


function resetGame() {
    homeScore = 0
    guestScore = 0
    homeStoreEl.textContent = homeScore
    guestStoreEl.textContent = guestScore
}