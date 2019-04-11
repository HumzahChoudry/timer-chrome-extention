// let changeColor = document.getElementById('changeColor');
//
// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });
//
// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   });
// };
var countInterval;
document.querySelector("#timer-submit").addEventListener("click", timerSubmit);
document.querySelector("#timer-clear").addEventListener("click", clearTimer);
var display = document.querySelector("#time");

function timerSubmit(event) {
  const minutes = parseInt(document.getElementsByClassName("input")[0].value);
  const seconds = parseInt(document.getElementsByClassName("input")[1].value);
  const reminder = parseInt(document.getElementsByClassName("input")[2].value);
  handleRunTimer(minutes, seconds, reminder);
}

function handleRunTimer(minutes, seconds, reminder) {
  let totalSeconds = minutes * 60;
  totalSeconds += seconds;
  startTimer(totalSeconds, display, reminder);
}

function startTimer(duration, display, reminder) {
  var timer = duration;
  var minutes = 0;
  var seconds = 0;
  countInterval = setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;
    if (timer == reminder) {
      playWarningSound();
    }
    if (--timer < 0) {
      playSound();
      timer = duration;
    }
  }, 1000);
}
function playWarningSound() {
  let audio = new Audio("warning_sound.mp3");
  audio.play();
}
function playSound() {
  let audio = new Audio("wolf6.wav");
  audio.play();
}
function clearTimer() {
  clearInterval(countInterval);
  display.innerText = "0:00";
}

window.onload = function() {
  const minutes = (document.getElementsByClassName("input")[0].value = 3);
  const seconds = (document.getElementsByClassName("input")[1].value = 0);
  const reminder = (document.getElementsByClassName("input")[2].value = 30);
};
