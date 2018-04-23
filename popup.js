function checkErrors(minutes,seconds,reminder){
  //check for blanks
  if ( isNaN(minutes) || isNaN(seconds) || isNaN(reminder) ){
    alert('Minutes, Seconds, and Reminder at fields must be numbers.');
    console.error('Minutes, seconds, and reminder must all be numbers. Use zeroes if you have to.s');
  }
}

function timerSubmit(event) {
  const minutes = parseInt(document.getElementsByClassName('input')[0].value, 10);
  const seconds = parseInt(document.getElementsByClassName('input')[1].value, 10);
  const reminder = parseInt(document.getElementsByClassName('input')[2].value, 10);
  checkErrors(minutes,seconds,reminder)
  console.log(minutes,seconds,reminder)
  startTimer(convertTime(minutes, seconds), reminder);
}

function convertTime (minutes = 0, seconds = 0){
  // converts time value in seconds for
  return minutes * 60 + seconds
}

function startTimer(duration, reminder = 60) {
    // stop timer callback to end the timer
    function stopTimer(){
      clearInterval(myInterval)
    }

    function checkPlayReminder(minutes,seconds,reminder, audioElement) {
      if ( convertTime(minutes,seconds) == reminder){
        audioElement.play()
      }
    }

    //shorthand for declaring a bunch of variables
    var timer = duration, minutes, seconds;
    var audio = new Audio('sound.mp3')

    var myInterval = setInterval(function() {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        var display = document.querySelector('#time');
        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration
            stopTimer()
        }

        checkPlayReminder(minutes,seconds,reminder, audio)
        // if (seconds == reminder){
        //   audio.play()
        // }

    }, 1000);
}
