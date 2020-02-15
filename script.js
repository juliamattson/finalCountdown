function showDate() {
    var dateDiv = document.getElementById("date")
    date = new Date()
    dateDiv.innerHTML = "Dagens datum: " + date.toLocaleDateString() 
}
showDate()

function showTime() {
    var timeDiv = document.getElementsByClassName("clock")[0]
    time = new Date()
    var h = time.getHours() 
    var m = time.getMinutes() 
    var s = time.getSeconds()
    m = checkTime(m);
    s = checkTime(s);
    timeDiv.innerHTML =  h + ":" + m + ":" + s 
    var t = setTimeout(showTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // För att lägga till en 0 innan nummer lägre än 10
    return i;
}

function countDown() {
    var countDownDate = new Date("jan 11, 2020 17:00:00")
    var now = new Date().getTime();
    var skillnad = countDownDate - now

    var d = Math.floor(skillnad / (1000 * 60 * 60 * 24));
    var h = Math.floor((skillnad % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((skillnad % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((skillnad % (1000 * 60)) / 1000);

    document.getElementById("countDiv").innerHTML = d + "dagar " + h + " timmar " + m + "minuter " + s + "sekunder";
    var t = setTimeout(countDown, 500);
    
}
countDown()