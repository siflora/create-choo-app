var html = require('choo/html')

var TITLE = 'time tracking'

module.exports = view

function view (state, emit) {
  
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
      <body class="code lh-copy">
      <main class="pa3 cf center">
       <p> hi there </p>
       <p>
       now is ${console.log(currentTime())}
       </p>
       <button onclick=${stopTime}>Start tracking your time</button>
      </main>
    </body>
  `
  function currentTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
  function stopTime () {
    
  }
}
