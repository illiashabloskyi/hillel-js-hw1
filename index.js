let hour = prompt("Enter number of hours:");
let sec = hour * 60 * 60;

if (Number.isNaN(sec)) {
  alert(`${hour} not a number.`);
} else {
  alert(`${sec} seconds in ${hour} hours.`);
}
