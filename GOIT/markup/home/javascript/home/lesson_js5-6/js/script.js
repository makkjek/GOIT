var timerId;
var hours = 0;
var minutes = 0;
var seconds = 0;
function clockStart() {
    timerId = setInterval(update, 1000);
}
function clockStop() {
    clearInterval(timerId);
}
function clockClear() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById('hour').innerHTML = "0";
    document.getElementById('min').innerHTML = "0";
    document.getElementById('sec').innerHTML = "0";
    clearInterval(timerId);
}
function update() {
    if (seconds < 60) { seconds = seconds + 1; document.getElementById('sec').innerHTML = seconds; }  else {
        seconds = 0;
        document.getElementById('sec').innerHTML = seconds;
        if (minutes < 60) { minutes = minutes + 1; document.getElementById('min').innerHTML = minutes; } else {
            minutes = 0;
            document.getElementById('min').innerHTML = minutes;
            hours = hours + 1;
            document.getElementById('hour').innerHTML = hours;
        }
    }
}