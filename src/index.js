import './css/styles.scss'
class CountdownTimer {
  constructor({selector, targetDate}) {
    this.selector = document.querySelector(selector);
    this.targetDate = new Date(targetDate).getTime();
  }
  #makeMarkup(days, hours, mins, secs) {
    this.selector.innerHTML = `<div class="field">
            <span class="value" data-value="days">${days}</span>
            <span class="label">Days</span>
        </div>
    
        <div class="field">
            <span class="value" data-value="hours">${hours}</span>
            <span class="label">Hours</span>
        </div>
    
        <div class="field">
            <span class="value" data-value="mins">${mins}</span>
            <span class="label">Minutes</span>
        </div>
    
        <div class="field">
            <span class="value" data-value="secs">${secs}</span>
            <span class="label">Seconds</span>
        </div>`
  }
  counterDownTime() {
    setInterval(()=>{
    let time = this.targetDate - Date.now()
    if (time < 0) {time = 0}
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return this.#makeMarkup(days, hours, mins, secs)}, 1000)
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: 'April 12, 2021',
});
timer.counterDownTime()