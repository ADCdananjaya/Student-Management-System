const stuButton = document.getElementById("stButton");
const regButton = document.getElementById("regButton");
const opButton = document.getElementById("opButton");

stuButton.addEventListener("click", () => {
    window.location.href = "/build/index.html";
});

regButton.addEventListener("click", () => {
    window.location.href = "/build/register.html";
});

opButton.addEventListener("click", () => {
    window.location.href = "/build/operations.html";
});