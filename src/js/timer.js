function getTimeRemaining(endtime) {
  var t = endtime - new Date().getTime();
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    total: t,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function declensionNum(number, words) {
  if (number > 10 && number < 20) return words[2];
  var n = number % 10;
  if (n === 1) return words[0];
  if (n > 1 && n < 5) return words[1];
  return words[2];
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  var hoursLabel = clock.querySelector('.hours-label');
  var minutesLabel = clock.querySelector('.minutes-label');
  var secondsLabel = clock.querySelector('.seconds-label');

  function updateClock() {
    var t = getTimeRemaining(endtime);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    hoursLabel.innerHTML = declensionNum(t.hours, [
      'година',
      'години',
      'годин',
    ]);
    minutesLabel.innerHTML = declensionNum(t.minutes, [
      'хвилина',
      'хвилини',
      'хвилин',
    ]);
    secondsLabel.innerHTML = declensionNum(t.seconds, [
      'секунда',
      'секунди',
      'секунд',
    ]);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      startNewDay();
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

function getEndOfDay() {
  var now = new Date();
  var endOfDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0,
    0,
    0
  );
  return endOfDay.getTime();
}

function startNewDay() {
  var newDeadline = getEndOfDay();
  initializeClock('countdown-one', newDeadline);
  initializeClock('countdown-two', newDeadline);
}

var deadline = getEndOfDay();
initializeClock('countdown-one', deadline);
initializeClock('countdown-two', deadline);

// function getTimeRemaining(endtime) {
//   var t = endtime - new Date().getTime();
//   var milliseconds = Math.floor((t % 1000) / 10);
//   var seconds = Math.floor((t / 1000) % 60);
//   var minutes = Math.floor((t / 1000 / 60) % 60);
//   return {
//     total: t,
//     minutes: minutes,
//     seconds: seconds,
//     milliseconds: milliseconds,
//   };
// }

// function initializeClock(id, endtime) {
//   var clock = document.getElementById(id);
//   var minutesSpan = clock.querySelector('.minutes');
//   var secondsSpan = clock.querySelector('.seconds');
//   var millisecondsSpan = clock.querySelector('.milliseconds');

//   function updateClock() {
//     var t = getTimeRemaining(endtime);
//     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
//     millisecondsSpan.innerHTML = ('0' + t.milliseconds).slice(-2);

//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//       minutesSpan.innerHTML = '00';
//       secondsSpan.innerHTML = '00';
//       millisecondsSpan.innerHTML = '00';
//     }
//   }

//   updateClock();
//   var timeinterval = setInterval(updateClock, 10);
// }

// var deadline = new Date(Date.parse(new Date()) + 5 * 60 * 1000);
// initializeClock('countdown-one', deadline);
// initializeClock('countdown-two', deadline);
// initializeClock('countdown-three', deadline);
// initializeClock('countdown-four', deadline);
// initializeClock('countdown-five', deadline);
