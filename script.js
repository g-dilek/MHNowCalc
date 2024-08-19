// Function to calculate wait time based on health boost
function calculateWaitTime(hitPoints, timePerPoint) {
  let secondsTotal = hitPoints * timePerPoint;
  let minutesTotal = Math.floor(secondsTotal / 60);
  let secondsRemaining = Math.round(secondsTotal % 60); // Round to nearest whole number

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

  // Only perform calculation if hitPoints and timePerPoint are valid
  if (!isNaN(hitPoints) && timePerPoint) {
    let result = calculateWaitTime(hitPoints, timePerPoint);

    // Show the result section
    let resultSection = document.getElementById("result");
    resultSection.innerText = `You need to wait ${result.minutes} minutes and ${result.seconds} seconds to recover ${hitPoints} HP.`;
    resultSection.style.display = "block"; // Display the result section
  } else {
    // Hide the result section if input is invalid
    document.getElementById("result").style.display = "none";
  }
}

// Function to handle input and update result
function updateResult() {
  handleCalculation();
}

// Attach event listeners
document.getElementById("hitPoints").addEventListener("input", updateResult);

document.querySelectorAll("input[name='healthBoost']").forEach((radio) => {
  radio.addEventListener("change", updateResult);
});
