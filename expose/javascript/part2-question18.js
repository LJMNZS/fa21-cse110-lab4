function logEverySecond() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

var logTime = setInterval(logEverySecond, 1000)