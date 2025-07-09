const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

function formateTime(value) {
      return value.toString().padStart(2,"0");
   }
function updateCountDown (deadline) {
    const currentTime = new Date();
    const diff = deadline - currentTime; //milliseconds
    if (diff <= 0) return;

    // calculate days, hours, mins, secs from timeDifference
    const totalSeconds = Math.floor(diff / 1000);
    const calcSecs = Math.floor(totalSeconds)% 60;
    const calcMins = Math.floor(totalSeconds / 60) % 60;
    const calcHours = Math.floor(totalSeconds / 3600) % 24;
    const calcDays = Math.floor(totalSeconds / 86400);

    
    days.textContent = formateTime(calcDays);
    hours.textContent = formateTime(calcHours);
    mins.textContent = formateTime(calcMins);
    secs.textContent = formateTime(calcSecs);
}

function countDown (targetDate)  {
    updateCountDown(targetDate);
     setInterval(()=>updateCountDown(targetDate),1000);
}

const targetDate = new Date("December 31 2025");
countDown(targetDate);