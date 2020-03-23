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
       <button >Start tracking your time</button>
      </main>
    </body>
  `
}

// ${state.date.h} : ${state.date.m} : ${state.date.s} 
//onclick=${startTime}

//${timeArea.render(state.date, emit)}