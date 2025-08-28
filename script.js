// 🎯 Part 1: Variables & Conditionals
let currentHour = new Date().getHours();
let timeMessage = currentHour < 12 ? "Good morning!" : currentHour < 18 ? "Good afternoon!" : "Good evening!";
console.log(`Time-based message: ${timeMessage}`);

// ❤️ Part 2: Functions
function createGreeting(name) {
  return `${timeMessage} ${name}, welcome to your JavaScript journey!`;
}

function multiplyValues(a, b) {
  return a * b;
}

// 🔁 Part 3: Loops
function generateCountdown() {
  const list = document.getElementById("countdownList");
  list.innerHTML = "";
  for (let i = 10; i >= 1; i--) {
    const item = document.createElement("li");
    item.textContent = `Countdown: ${i}`;
    list.appendChild(item);
  }
}

// 🌐 Part 4: DOM Interactions
document.getElementById("greetBtn").addEventListener("click", () => {
  const nameInput = document.getElementById("username").value.trim();
  const output = document.getElementById("greetingOutput");
  if (nameInput === "") {
    output.textContent = "Please enter your name.";
  } else {
    output.textContent = createGreeting(nameInput);
  }
});

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("countdownBtn").addEventListener("click", generateCountdown);
