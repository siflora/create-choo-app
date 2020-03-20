const html = require ('choo/html')

module.exports = store

function store (state, emitter) {
  state.today = new Date();
  state.time = {}

  setInterval(function () {
        state.today = new Date()
        var h=state.today.getHours();
        var m=state.today.getMinutes();
        var s=state.today.getSeconds();
        console.log(`Now is ( ${h} : ${m} : ${s} )`)
        state.time = {
          h, m, s
        }
        emitter.emit('render')
    }, 1000
    )

  
  
}
