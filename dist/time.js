"use strict";
const timerElement = document.getElementById("timer");
let timeLeft = 120; // đếm ngược 60 giây
function countdownTimer() {
    const intervalId = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        // định dạng chuỗi phút và giây
        const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;
        // kiểm tra xem phần tử HTML có tồn tại hay không trước khi cập nhật nội dung
        if (timerElement) {
            timerElement.textContent = formattedTime;
        }
        // giảm thời gian đi 1 giây
        timeLeft--;
        // kiểm tra nếu hết thời gian thì dừng đếm ngược
        if (timeLeft < 0) {
            alert("Time up!");
            clearInterval(intervalId);
        }
    }, 1000);
}
