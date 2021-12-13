// Define UI Variables
const form = document.querySelector("#guest-form");
const guestList = document.querySelector(".guest-list");
const clearBtn = document.querySelector(".clear-btn");
const filter = document.querySelector("#filter");
const guestInput = document.querySelector("#guest");

// Call Load Event Listeners
loadEventListeners();

// Load event listeners
function loadEventListeners() {
  // Add Task Event
  form.addEventListener("submit", addGuest);
  // Remove Guest Event
  guestList.addEventListener("click", removeGuest);
  // Clear Guest list
  clearBtn.addEventListener("click", clearGuest);
}

// =======================================================================

// Add Guest
function addGuest(e) {
  if (guestInput.value === "") {
    alert("Add a guest");
  } else {
    // Creat li element
    const li = document.createElement("li");
    // Add class
    li.className = "guest";
    // Create p element and text
    const p = document.createElement("p");
    p.innerText = `${guestInput.value}`;
    // Create i element
    const i = document.createElement("i");
    // Add class
    i.className = "fa fa-remove delete-item";
    // Append P el to LI
    li.appendChild(p);
    // Append I el to li
    li.appendChild(i);

    guestList.appendChild(li);

    // Clear input
    guestInput.value = "";
  }

  e.preventDefault();
}

// Remove Guest
function removeGuest(e) {
  if (e.target.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.remove();
    }
  }

  e.preventDefault();
}

// Clear Guest
function clearGuest() {
  while (guestList.firstChild) {
    guestList.removeChild(guestList.firstChild);
  }
}