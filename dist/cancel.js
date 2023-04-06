"use strict";
const cancelButton = document.getElementById("cancel");
if (cancelButton) {
    cancelButton.addEventListener("click", () => {
        localStorage.removeItem("playerName");
        window.location.replace("NhapTen.html");
    });
}
const resetButton = document.getElementById("reset");
if (resetButton) {
    resetButton.addEventListener("click", () => {
    });
}
