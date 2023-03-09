const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const createTimerAnimator = () => {
  return () => {
    const timer = setInterval(() => {
      seconds = timeMinut % 60;
      minutes = (timeMinut / 60) % 60;
      hour = (timeMinut / 60 / 60) % 60;
      if (timeMinut <= 0) {
        clearInterval(timer);
        alert("Время закончилось");
      } else {
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        timerEl.innerHTML = strTimer;
      }
      --timeMinut;
    }, 1000);
  };
};

buttonEl.addEventListener("click", () => {
  timeMinut = +inputEl.value * 60;
  console.log(typeof timeMinut);
  animateTimer(timeMinut);
  inputEl.value = "";
});

const animateTimer = createTimerAnimator();
