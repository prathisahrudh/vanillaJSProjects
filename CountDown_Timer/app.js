let countDownDate = new Date("Sep 20 , 2021 00:00:00").getTime();

var x = setInterval(() => {
  var now = new Date().getTime();
  var t = countDownDate - now;

  //1 day = 24hr
  //1hr = 60min
  //1min = 60sec
  //1 sec = 1000 millisecond

  //one day = 24*60*60*1000
  //1hr = 60*60*1000
  //1min = 60*1000

  var days = Math.floor(t / (1000 * 60 * 60 * 24)); //i.e t/one Day
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //t % oneday is done to get the remaining hours b/w give time and current time
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);

  document.getElementById("theTimer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance <= 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "It is your birthday!";
  }
}, 1000);
