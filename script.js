const hourEle = document.querySelector('.hour');
const minEle = document.querySelector('.minute');
const secEle = document.querySelector('.second');
const timeEle = document.querySelector('.time');
const dateEle = document.querySelector('.date');
const toggleEle = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggleEle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        html.classList.add('light');
        e.target.innerHtml = 'Dark mode';

    } else {
        html.classList.remove('light');
        html.classList.add('dark');
        e.target.innerHtml = 'Light mode';
    }
})

function setTime() {
    const time = new Date();
    const date = time.getDate();
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours();
    const hourforClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12? 'PM' : 'AM';

    hourEle.style.transform = `translate(-50%,-100%) rotate(${scale(hourforClock, 0, 11, 0, 360)}deg)`;
    minEle.style.transform = `translate(-50%,-100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secEle.style.transform = `translate(-50%,-100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;


    timeEle.innerHTML = `${hourforClock}:${minutes<10? `0${minutes}`: minutes} ${ampm}`;
    dateEle.innerHTML = `${days[day]} , <span class = "circle">${date}</span> ${months[month]}`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min);
}

setTime(); 
setInterval(setTime,1000);