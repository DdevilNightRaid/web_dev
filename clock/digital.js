setInterval(displayTime, 1000);
function displayTime(){
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    document.getElementById('clock').innerHTML = hour + " : " + minute + " : " + second;
}
displayTime();