const html = require('choo/html')

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`


  `
}


const startTime = () => {


}

const stopTime = () => {

}