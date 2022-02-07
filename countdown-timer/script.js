const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const newYears = '1 Jan 2022'
/*1 de Janeiro do próximo ano*/ 
function countdown() {
   /*Converte em um obejto de data*/
  const newYearsDate = new Date(newYears)
   /*Data Atual*/
  const currentDate = new Date();
   
  /*1 de Janeiro do próximo ano - data atual dividido por 1000*/
  const totalSeconds = (newYearsDate - currentDate) / 1000
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

daysEl.innerHTML = days; 
hoursEl.innerHTML = formatTime(hours);
minsEl.innerHTML = formatTime(mins);
secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000)

