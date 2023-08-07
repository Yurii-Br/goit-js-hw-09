'use strict';
import flatpickr from 'flatpickr';

const myInp = document.getElementById('datetime-picker');
const startBtn = document.querySelector('[data-start]');
const timerValues = document.querySelectorAll('.value');

let countdownInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedUnixTime = Math.floor(selectedDates[0].getTime() / 1000);
    const nowUnixTime = Math.floor(new Date().getTime() / 1000);

    if (nowUnixTime > selectedUnixTime) {
      window.alert('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
      clearInterval(countdownInterval);
    }
  },
};

flatpickr(myInp, options);

function updateTimerDisplay({ days, hours, minutes, seconds }) {
  timerValues[0].textContent = String(days).padStart(2, '0');
  timerValues[1].textContent = String(hours).padStart(2, '0');
  timerValues[2].textContent = String(minutes).padStart(2, '0');
  timerValues[3].textContent = String(seconds).padStart(2, '0');
}

function startCountdown(targetUnixTime) {
  function updateCountdown() {
    const nowUnixTime = Math.floor(new Date().getTime() / 1000);
    const remainingTime = targetUnixTime - nowUnixTime;

    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const timeObject = convertMs(remainingTime * 1000);
      updateTimerDisplay(timeObject);
    }
  }

  countdownInterval = setInterval(updateCountdown, 1000);
}

startBtn.addEventListener('click', () => {
  const selectedUnixTime = Math.floor(myInp._flatpickr.selectedDates[0].getTime() / 1000);
  startCountdown(selectedUnixTime);
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
