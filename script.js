const targetDate = new Date("2023-08-27T13:30:00"); // target day

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

const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;

document.querySelector('.prev').addEventListener('click', function() {
    images[currentIndex].classList.remove('active');
    currentIndex--;
    if (currentIndex < 0) currentIndex = images.length - 1;
    images[currentIndex].classList.add('active');
});

document.querySelector('.next').addEventListener('click', function() {
    images[currentIndex].classList.remove('active');
    currentIndex++;
    if (currentIndex > images.length - 1) currentIndex = 0;
    images[currentIndex].classList.add('active');
});

const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
const options = { // 지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(37.330296, 127.185194), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
};

const map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴


// 마커가 표시될 위치입니다. 실제 돌잔치 장소의 좌표로 변경하세요.
const markerPosition  = new kakao.maps.LatLng(37.330296, 127.184850); 

// 마커를 생성합니다.
const marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다.
marker.setMap(map);
