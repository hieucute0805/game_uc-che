"use strict";
let pokemons = [
    { id: 1, name: "Ditto", image: "1" },
    { id: 2, name: "Pikachu", image: "2" },
    { id: 3, name: "Bullbasaur", image: "3" },
    { id: 4, name: "Snorlax", image: "4" },
    { id: 5, name: "Charmander", image: "5" },
    { id: 6, name: "Meowth", image: "6" },
    { id: 7, name: "Eevee", image: "7" },
    { id: 8, name: "Jigglypuff", image: "8" },
    { id: 9, name: "Psyduck", image: "9" },
    { id: 10, name: "Squirtle ", image: "10" },
    { id: 11, name: "Dratini", image: "11" },
    { id: 12, name: "Zubat", image: "12" },
    { id: 1, name: "Ditto", image: "1" },
    { id: 2, name: "Pikachu", image: "2" },
    { id: 3, name: "Bullbasaur", image: "3" },
    { id: 4, name: "Snorlax", image: "4" },
    { id: 5, name: "Charmander", image: "5" },
    { id: 6, name: "Meowth", image: "6" },
    { id: 7, name: "Eevee", image: "7" },
    { id: 8, name: "Jigglypuff", image: "8" },
    { id: 9, name: "Psyduck", image: "9" },
    { id: 10, name: "Squirtle ", image: "10" },
    { id: 11, name: "Dratini", image: "11" },
    { id: 12, name: "Zubat", image: "12" },
];
function shuffle() {
    for (let i = 0; i < pokemons.length; i++) {
        let j = Math.round(Math.random() * pokemons.length);
        let temp = pokemons[i];
        pokemons[i] = pokemons[j];
        pokemons[j] = temp;
    }
}
function template(pokeItem) {
    return `
      <div class="card" data-id="${pokeItem.id}" style="order: 5;" data-image="${pokeItem.image}" onclick="flipCard(event)">
          <div >${pokeItem.name}</div>
          <img src="src/img/${pokeItem.image}.png" class="front"">
          </div> 

          `;
}
async function fetchData(root) {
    for (let i = 0; i < pokemons.length; i++) {
        let poke = {
            id: pokemons[i].id,
            name: pokemons[i].name,
            image: `${pokemons[i].image}`
        };
        pokemons[i] = poke;
    }
    shuffle();
    pokemons.forEach((element) => {
        root.innerHTML += template(element);
    });
}
let isFlipped = false;
let firstCard;
let secondCard;
let children1;
let children2;
function flipCard(event) {
    let target = event.target;
    if (firstCard != null && secondCard != null) {
        if (firstCard)
            firstCard.classList.remove("flip");
        if (secondCard)
            secondCard.classList.remove("flip");
    }
    else {
        if (!isFlipped) {
            isFlipped = true;
            firstCard = target;
            firstCard.classList.add("flip");
        }
        else if (target !== firstCard) { // Thêm điều kiện kiểm tra target khác firstCard
            secondCard = target;
            secondCard.classList.add("flip");
            checkMatch();
        }
    }
}
let score = 0;
function checkMatch() {
    if (firstCard && secondCard && firstCard.dataset.id === secondCard.dataset.id) {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        const children1 = firstCard.querySelectorAll(".front")[0];
        const children2 = secondCard.querySelectorAll(".front")[0];
        children1.classList.add("yes-card");
        children2.classList.add("yes-card");
        score++; // Tăng điểm khi người chơi tìm được cặp thẻ giống nhau
        updateScore();
        console.log(score);
        reset();
    }
    else {
        const children1 = firstCard.querySelectorAll(".front")[0];
        children1.classList.add("no-card");
        const children2 = secondCard.querySelectorAll(".front")[0];
        children2.classList.add("no-card");
        setTimeout(() => {
            if (firstCard)
                firstCard.classList.remove("flip");
            children1.classList.remove("no-card");
            if (secondCard)
                secondCard.classList.remove("flip");
            children2.classList.remove("no-card");
            reset();
        }, 1000);
    }
}
function updateScore() {
    const scoreElement = document.getElementById("score");
    if (scoreElement) {
        scoreElement.textContent = `${score}`;
    }
}
function reset() {
    isFlipped = false;
    firstCard = null;
    secondCard = null;
}
const playerName = localStorage.getItem("playerName");
const greetingElement = document.getElementById("greeting");
if (greetingElement) {
    if (playerName && playerName.trim().length > 1 && /^[a-zA-Z0-9]+$/.test(playerName)) {
        greetingElement.textContent = `${playerName}`;
    }
    else if (playerName != null) {
        alert("không được trống, không dùng ký tự đặc biệt, không được dùng 1 ký tự");
        window.location.replace("NhapTen.html");
    }
    else {
        alert('Bạn nhập tên!');
        window.location.replace("NhapTen.html");
    }
}
let root = document.getElementById("app");
if (root) {
    fetchData(root);
}
