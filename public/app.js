const input = document.getElementById('input');
const output = document.getElementById('output');

// UNSAFE VERSION
// Vulnerable to XSS
function showUnsafe() {
  output.innerHTML = input.value;
}

// SAFE VERSION
// Prevents XSS
function showSafe() {
  output.textContent = input.value;
}
