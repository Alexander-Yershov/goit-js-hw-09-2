function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const refs = {
    startChangeColor: document.querySelector('[data-start]'),
    stopChangeColor: document.querySelector('[data-stop]')
};

let intervalId = null;

refs.startChangeColor.addEventListener('click', onStartButtonClick);
refs.stopChangeColor.addEventListener('click', onStopButtonClick);


function onStartButtonClick() {
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor()
    }, 1000);
    refs.startChangeColor.setAttribute('disabled', 'true');
    if (refs.stopChangeColor.hasAttribute('disabled')) {
         refs.stopChangeColor.removeAttribute('disabled')
    }
};

function onStopButtonClick() {
    clearInterval(intervalId);
    refs.stopChangeColor.setAttribute('disabled','true');
    refs.startChangeColor.removeAttribute('disabled');
}
