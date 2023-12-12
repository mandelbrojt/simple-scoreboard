let homeScore = 0;
let guestScore = 0;

// Update the home scoreboard display
const updateHomeScoreboard = () => {
    document.getElementById("home-count").textContent = homeScore;
};

// Update the guest scoreboard display
const updateGuestScoreboard = () => {
    document.getElementById("guest-count").textContent = guestScore;
};

updateHomeScoreboard();
updateGuestScoreboard();

// Sum functions for home scoreboard
const addPointsHome = (points) => {
    homeScore += points;
    updateHomeScoreboard();
};

// Sum functions for guest scoreboard
const addPointsGuest = (points) => {
    guestScore += points;
    updateGuestScoreboard();
};

// Event listeners for home scoreboard
const plusOneBtnHome = document.getElementById("plus-one-home").addEventListener("click", () => {
    addPointsHome(1);
});
const plusTwoBtnHome = document.getElementById("plus-two-home").addEventListener("click", () => {
    addPointsHome(2);
});
const plusThreeBtnHome = document.getElementById("plus-three-home").addEventListener("click", () => {
    addPointsHome(3);
});

// Event listeners for guest scoreboard
const plusOneBtnGuest = document.getElementById("plus-one-guest").addEventListener("click", () => {
    addPointsGuest(1);
});
const plusTwoBtnGuest = document.getElementById("plus-two-guest").addEventListener("click", () => {
    addPointsGuest(2);
});
const plusThreeBtnGuest = document.getElementById("plus-three-guest").addEventListener("click", () => {
    addPointsGuest(3);
});

// Event listener for reset button
const resetBtn = document.getElementById("reset-btn").addEventListener("click", () => {
    homeScore = 0;
    guestScore = 0;
    updateHomeScoreboard();
    updateGuestScoreboard();
});