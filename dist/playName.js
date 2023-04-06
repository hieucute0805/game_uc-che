"use strict";
const playerName = localStorage.getItem("playerName");
const greetingElement = document.getElementById("greeting");
if (greetingElement) {
    if (playerName && playerName.trim().length > 1 && /^[a-zA-Z0-9]+$/.test(playerName)) {
        greetingElement.textContent = `Chào mừng ${playerName} đến với trò chơi!`;
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
