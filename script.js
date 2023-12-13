"use strict";

const dayClock = document.querySelector(".day");
const timeClock = document.querySelector(".time");
const dateClock = document.querySelector(".date");

setInterval(() => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const time = new Date();
  let hour = `${time.getHours()}`.padStart(2, 0);
  let min = `${time.getMinutes()}`.padStart(2, 0);
  let sec = `${time.getSeconds()}`.padStart(2, 0);

  let date = `${time.getDate()}`.padStart(2, 0);
  let month = months[time.getMonth()];
  let year = time.getFullYear();
  let day = days[time.getDay()];

  let session = "";

  if (hour <= 12) {
    session = "AM";
  } else if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }
  dayClock.innerHTML = `${day}`;
  timeClock.innerHTML = `${hour}:${min}:${sec} ${session}`;
  dateClock.innerHTML = `${date}  ${month}  ${year}`;
}, 1000);
