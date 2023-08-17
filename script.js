const targetDate = new Date("2023-08-27T13:30:00");  // 예: 2023년 12월 31일 23시 59분 59초를 목표로 설정

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const updateCountdown = () => {
    const currentDate = new Date();
    const totalSeconds = (targetDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

    if (totalSeconds <= 0) {
        clearInterval(interval);
    }
};

const interval = setInterval(updateCountdown, 1000);  // 1초마다 updateCountdown 함수를 호출
