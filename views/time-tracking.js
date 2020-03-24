const html = require('choo/html')

import Clock from '../Clock'
const clock = new Clock()


const TITLE = 'time tracking'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">

      <main class="pa3 cf center">
       ${clock.render(state.date, emit)}

        <div id="stopwatch">
          <button id="sw-start" onclick=${startTime}>
          Start tracking time
          </button>
          <p id="sw-time">00:00:00</p>
          <button id="sw-stop" onclick=${stopTime}>
          Stop tracking
          </button>
       </div>
      </main>
    </body>
  `
}
const sw = {
  etime : null, 
  erst : null, 
  ego : null, 
  timer : null, 
  now : 0, 
}
sw.etime = document.getElementById("sw-time");
sw.erst = document.getElementById("sw-rst");
sw.ego = document.getElementById("sw-go");

const startTime = () => {
    counter 
    setInterval(() => emitter.emit('counter'), 1000)
    
}

const stopTime = () => {

}





          //<input type="button" value="Reset" id="sw-rst" disabled/>
       
          //<input type="button" value="Start" id="sw-go" disabled/>