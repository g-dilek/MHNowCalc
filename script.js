// Function to calculate wait time based on health boost
function calculateWaitTime(hitPoints, timePerPoint) {
  let secondsTotal = hitPoints * timePerPoint;
  let minutesTotal = Math.floor(secondsTotal / 60);
  let secondsRemaining = secondsTotal % 60;

  return {
    minutes: minutesTotal,
    seconds: secondsRemaining,
  };
}

// Function to handle calculation and update result
function handleCalculation() {
  let hitPoints = parseInt(document.getElementById("hitPoints").value, 10);
  let healthBoostRadios = document.getElementsByName("healthBoost");
  let timePerPoint;

  // Find the selected health boost
  for (let radio of healthBoostRadios) {
    if (radio.checked) {
      timePerPoint = parseFloat(radio.value);
      break;
    }
  }

  let result = calculateWaitTime(hitPoints, timePerPoint);

  // Show the result section
  let resultSection = document.getElementById("result");
  resultSection.innerText = `You need to wait ${result.minutes} minutes and ${result.seconds} seconds to recover ${hitPoints} HP.`;
  resultSection.style.display = "block"; // Display the result section
}

// Function to enable or disable the Calculate button based on input
function validateInput() {
  let hitPoints = document.getElementById("hitPoints").value;
  let calculateButton = document.getElementById("calculateButton");

  // Enable the button if the input is between 1 and 1000, otherwise disable it
  if (hitPoints >= 1 && hitPoints <= 1000) {
    calculateButton.disabled = false;
  } else {
    calculateButton.disabled = true;
  }
}

// Attach event listeners
document.getElementById("hitPoints").addEventListener("input", validateInput);
document
  .getElementById("calculateButton")
  .addEventListener("click", handleCalculation);
