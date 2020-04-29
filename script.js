document.addEventListener('DOMContentLoaded', () => {

  const checkbox = document.querySelector('input[type="checkbox"]');
  const headings = document.getElementsByClassName("overview-card-heading");
  const cards = document.getElementsByClassName("card");
  const smallCards = document.getElementsByClassName("small-card");
  const numbers = document.getElementsByClassName("number");
  const handles = document.getElementsByClassName("handle");

  checkbox.addEventListener('change', () => {

    document.getElementById("app").classList.toggle("light-mode-bg");
    document.getElementById("header").classList.toggle("light-mode-header");
    document.getElementById("dashboard-heading").classList.toggle("black-text");
    document.getElementById("total-followers").classList.toggle("dark-gray-blue-text");
    document.getElementById("overview").classList.toggle("dark-gray-blue-text");
    document.getElementById("footer").classList.toggle("black-text");

    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.toggle("light-mode");
    }

    for (let i = 0; i < smallCards.length; i++) {
      smallCards[i].classList.toggle("light-mode");
    }

    for (let i = 0; i < numbers.length; i++) {
      numbers[i].classList.toggle("black-text");
    }

    for (let i = 0; i < handles.length; i++) {
      handles[i].classList.toggle("dark-gray-blue-text");
    }

    for (let i = 0; i < headings.length; i++) {
      headings[i].classList.toggle("dark-gray-blue-text");
    }

  });
});
