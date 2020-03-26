const html = require('choo/html')

import Clock from '../Clock'
import { EventEmitter } from 'events'
const clock = new Clock()


const TITLE = 'time tracking'

module.exports = view

const state = {
  etime : null, 
  erst : null, 
  ego : null, 
  timer : null, 
  now : 0, 
}
state.etime = document.getElementById("sw-time");
state.erst = document.getElementById("sw-rst");
state.ego = document.getElementById("sw-go");

const sw = {
  hours: null,
  mins: null,
  secs: null
}

const tick = () => {
  state.now ++;
  var remain = state.now;
  var hours = Math.floor(remain/3600);
  var mins = Math.floor(remain/60);
  remain -= mins * 60;
  var secs = remain;

  if (hours<10) {hours = '0' + hours;}
  if (mins<10) {mins = '0' + mins;}
  if (secs<10) {secs = '0' + secs;}
  }

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
          <p id="sw-time">${state.hours}:${state.mins}:${state.secs}</p>
          <button id="sw-stop" onclick=${stopTime}>
          Stop tracking
          </button>
       </div>
      </main>
    </body>
  `
}



const startTime = (state, emitter) => {
    // emitter from above  
  const emitter2 = (emitter)
    emitter.emit = function () {
      asdfasdf
    }
    emitter = emitter2
    // emitter new!

    emitter.emit('tick', '')
    setInterval(emitter.emit(tick()), 1000)
    
}

const stopTime = () => {

}

const loadPage = (state, emitter) => 
{emitter.emit ('render')}




          //<input type="button" value="Reset" id="sw-rst" disabled/>
       
          //<input type="button" value="Start" id="sw-go" disabled/>