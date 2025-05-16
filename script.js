// DOM elements
const animateButton = document.getElementById("animateButton");

// Check if there's a saved preference in localStorage
window.onload = () => {
  const isClicked = localStorage.getItem("buttonClicked");
  if (isClicked === "true") {
    animateButton.classList.add("animate"); // Apply animation if clicked previously
  }
};

// Event listener for button click
animateButton.addEventListener("click", () => {
  // Trigger animation
  animateButton.classList.add("animate");

  // Store the state in localStorage (button clicked)
  localStorage.setItem("buttonClicked", "true");

  // Reset animation after it finishes
  animateButton.addEventListener("animationend", () => {
    animateButton.classList.remove("animate");
  });
});
