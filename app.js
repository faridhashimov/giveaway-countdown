const deadline = '2022-05-16 11:30:00 GMT +3';
const day = document.querySelector('.days'),
  hour = document.querySelector('.hours'),
  min = document.querySelector('.mins'),
  sec = document.querySelector('.secs');

function getTime(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date()),
    days = Math.floor(t / (60 * 60 * 24 * 1000)),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24),
    mins = Math.floor((t / (1000 * 60)) % 60),
    secs = Math.floor((t / 1000) % 60);

  return {
    total: t,
    days: days,
    hours: hours,
    mins: mins,
    secs: secs,
  };
}

function addZero(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

const interval = setInterval(updateClock, 1000);

function updateClock() {
  let t = getTime(deadline);

  day.innerHTML = addZero(t.days);
  hour.innerHTML = addZero(t.hours);
  min.innerHTML = addZero(t.mins);
  sec.innerHTML = addZero(t.secs);

  if (t.total <= 0) {
    clearInterval(interval);
  }
}

