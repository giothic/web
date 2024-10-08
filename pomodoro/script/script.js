let minutesDisplay = document.getElementById('minutos');
let secondsDisplay = document.getElementById('segundos');
let startButton = document.getElementById('começar');
let resetButton = document.getElementById('resetar');

let pomodoroDuration = 25 * 60;
let tempoRestante = pomodoroDuration;
let isRunning = false;
let intervalo;


function startPomodoro() {
    is(isRunning) return;
    isRunning = true;

    intervalo = setIntervalo(() => {
        if (tempoRestante <= 0) {
            clearInterval(intervalo);
            alert('O tempo acabou');
            resetPomodoro();
        } else {
            tempoRestante--;
            updateDisplay();
        }

    }, 1000);
}

function resetPomodoro() {
    clearInterval(intervalo);
    isRunning = false;
    tempoRestante = pomodoroDuration;
    updateDisplay();
}

function updateDisplay() {
    let minutesDisplay = Math.floor(tempoRestante / 60);
    let secondsDisplay = tempoRestante % 60;

    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
}

startButton.addEventListener('click', startPomodoro);
resetButton.addEventListener('click', resetPomodoro)

