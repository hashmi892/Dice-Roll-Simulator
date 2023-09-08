// Get references to DOM elements
let dice = document.querySelector("#dice");
let rollButton = document.querySelector("#roll-button");
let rollHistory = document.querySelector("#roll-history");
let clearBtn = document.querySelector(".clearBtn");

// Hide the clear button initially
clearBtn.style.display = "none";

// Function to update the roll history list
function updateRollHistory() {
  // Clear the existing history
  rollHistory.innerHTML = "";

  // Iterate through the historyList and create list items for each roll
  historyList.forEach((curEle, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${index + 1}: <span>${curEle}</span>`;
    rollHistory.appendChild(listItem);
  });
}

// Initialize an empty history list
let historyList = [];

// Function to simulate rolling the dice
function rollDice() {
  // Define the possible dice faces as HTML entities
  let dicesArr = [
    "&#x2680;",
    "&#x2681;",
    "&#x2682;",
    "&#x2683;",
    "&#x2684;",
    "&#x2685;",
  ];

  // Randomly select a dice face
  let computerPicker = Math.floor(Math.random() * dicesArr.length);

  // Update the dice element with the selected face
  dice.innerHTML = dicesArr[computerPicker];

  // Add the roll result to the history list
  historyList.push(dicesArr[computerPicker]);

  // Update the roll history on the page
  updateRollHistory();
}

// Event listener for the roll button click
rollButton.addEventListener("click", () => {
  // Add a roll animation class to the dice
  dice.classList.add("roll-animation");

  // Set a timeout to remove the roll animation and execute the rollDice function
  setTimeout(() => {
    dice.classList.remove("roll-animation");
    rollDice();

    // Display the clear button and center it
    clearBtn.style.display = "block";
    clearBtn.style.margin = "0px auto";
  }, 1000);
});

// Event listener for the clear button click
clearBtn.addEventListener("click", () => {
  // Clear the roll history and reset the historyList
  rollHistory.innerHTML = "<p>History has been cleared</p>";
  historyList = [];

  // Hide the clear button
  clearBtn.style.display = "none";
});
