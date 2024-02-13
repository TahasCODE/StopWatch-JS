

const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused= true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
let milisecs = 0;


startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(Updatetime, 1000);
    }
});

pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});



resetBtn.addEventListener("click",() => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0
    secs = 0;
    milisecs = 0;
    timeDisplay.textContent = "00:00:00:00";
});

function Updatetime(){
elapsedTime = Date.now() - startTime;

hrs = Math.floor(elapsedTime / (1000 * 60 * 60));
mins = Math.floor(elapsedTime / (1000 * 60) % 60);
secs = Math.floor(elapsedTime / 1000 % 60);
milisecs = Math.floor(elapsedTime % 1000 / 10);

secs = pad(secs);
mins = pad(mins);
hrs = pad(hrs);
milisecs = pad(milisecs);


function pad(unit){
    return (("0") + unit).length > 2 ? unit: "0" + unit;
}

timeDisplay.textContent = `${hrs}:${mins}:${secs}:${milisecs}`;

}