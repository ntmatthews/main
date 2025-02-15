// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Set the target launch date (example: December 31, 2025)
  const launchDate = new Date("December 31, 2025 00:00:00").getTime();

  // Get reference to countdown elements
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  // Update countdown every second
  const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = launchDate - now;

    // If the countdown is finished
    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerHTML = "Launched!";
      return;
    }

    // Calculate time components
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the DOM elements with padded values
    daysEl.textContent = days < 10 ? "0" + days : days;
    hoursEl.textContent = hours < 10 ? "0" + hours : hours;
    minutesEl.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;
  }, 1000);

  // Placeholder subscription form functionality
  const subscribeForm = document.getElementById("subscribe-form");
  subscribeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = subscribeForm.querySelector('input[type="email"]');
    alert(`Thanks for subscribing, ${emailInput.value}!`);
    subscribeForm.reset();
  });
});
