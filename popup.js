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

function timerSubmit(event) {
  console.log('clicked')
  const minutes = parseInt(document.getElementsByClassName('input')[0].value);
  const seconds = parseInt(document.getElementsByClassName('input')[1].value);
  const reminder = parseInt(document.getElementsByClassName('input')[2].value);
  startTimer(handleRunTimer(minutes, seconds, reminder));
}

function handleRunTimer (minutes, seconds, reminder){
  return minutes_to_seconds = minutes * 60 + seconds
}

function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        var display = document.querySelector('#time');
        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) { 
            timer = duration;
        }
    }, 1000);
}
