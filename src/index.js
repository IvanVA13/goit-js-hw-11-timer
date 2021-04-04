import './css/styles.scss'
class CountdownTimer {
  constructor({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = new Date(targetDate).getTime();
  }
  counterDownTime() {
  let time = this.targetDate - Date.now()
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  return {days, hours, mins, secs}
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: 'April 12, 2021',
});

const timerMarkup = document.querySelector(timer.selector).querySelectorAll('[data-value]')
setInterval(()=>timerMarkup.forEach(addMarkupTimer), 1000)

function addMarkupTimer(el) {
let key = el.dataset.value
  el.textContent = timer.counterDownTime()[key]
}