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
  // DOM load event
  document.addEventListener("DOMContentLoaded", getGuests);
  // Add Task Event
  form.addEventListener("submit", addGuest);
  // Remove Guest Event
  guestList.addEventListener("click", removeGuest);
  // Clear Guest list
  clearBtn.addEventListener("click", clearGuest);
  // Filter Guest list
  filter.addEventListener("keyup", filterGuest);
}

// =======================================================================

// Get Guest from LS
function getGuests() {
  let guests;
  if (localStorage.getItem("guests") === null) {
    guests = [];
  } else {
    guests = JSON.parse(localStorage.getItem("guests"));
  }

  guests.forEach(function (guest) {
    // Creat li element
    const li = document.createElement("li");
    // Add class
    li.className = "guest";
    // Create p element and text
    const p = document.createElement("p");
    p.innerText = `${guest}`;
    // Create i element
    const i = document.createElement("i");
    // Add class
    i.className = "fa fa-remove delete-item";
    // Append P el to LI
    li.appendChild(p);
    // Append I el to li
    li.appendChild(i);

    guestList.appendChild(li);
  });
}

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

    // Store in LS
    storeGuestInLocalStorage(guestInput.value);

    // Clear input
    guestInput.value = "";
  }

  e.preventDefault();
}

// Store Guest
function storeGuestInLocalStorage(guest) {
  let guests;
  if (localStorage.getItem("guests") === null) {
    guests = [];
  } else {
    guests = JSON.parse(localStorage.getItem("guests"));
  }

  guests.push(guest);

  localStorage.setItem("guests", JSON.stringify(guests));
}

// Remove Guest
function removeGuest(e) {
  if (e.target.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.remove();

      // Remove from LS
      removeGuestFromLocalStorage(e.target.parentElement);
    }
  }

  e.preventDefault();
}

// Remove Guest from LS
function removeGuestFromLocalStorage(guestItem) {
  let guests;
  if (localStorage.getItem("guests") === null) {
    guests = [];
  } else {
    guests = JSON.parse(localStorage.getItem("guests"));
  }

  guests.forEach(function (guest, index) {
    if (guestItem.textContent === guest) {
      guests.splice(index, 1);
    }
  });

  localStorage.setItem("guests", JSON.stringify(guests));
}

// Clear Guest
function clearGuest() {
  while (guestList.firstChild) {
    guestList.removeChild(guestList.firstChild);
  }

  // Clear Guests from LS
  clearGuestFromLocalStorage();
}

// Clear from LS
function clearGuestFromLocalStorage() {
  localStorage.clear();
}

// Filter Guest
function filterGuest(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".guest").forEach(function (guest) {
    const item = guest.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      guest.style.display = "flex";
    } else {
      guest.style.display = "none";
    }
  });
}
