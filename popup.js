function timerSubmit(event) {
  const minutes = parseInt(document.getElementsByClassName('input')[0].value);
  const seconds = parseInt(document.getElementsByClassName('input')[1].value);
  const reminder = parseInt(document.getElementsByClassName('input')[2].value);
  startTimer(convertTime(minutes, seconds), reminder);


function convertTime (minutes, seconds){
  return minutes_to_seconds = minutes * 60 + seconds
}

function startTimer(duration, reminder) {
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
