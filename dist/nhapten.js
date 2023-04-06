"use strict";
const nameButton = document.getElementById('submit');
if (nameButton) {
    nameButton.addEventListener('click', () => {
        const nameInput = document.getElementById('player');
        if (nameInput) {
            const newName = nameInput.value;
            console.log(newName);
            localStorage.setItem('playerName', newName);
            window.location.replace('index.html');
        }
    });
}
