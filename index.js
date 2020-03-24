var css = require('sheetify')
var choo = require('choo')

css('tachyons')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}
app.use((state, emitter) => {
  emitter.on('updateTime', () => setGlobalTime(state, emitter))

  emitter.emit('updateTime')
  setInterval(() => emitter.emit('updateTime'), 1000)
  })

const setGlobalTime = (state, emitter) => {
  const currentDate = new Date()
  state.date = {
    h: currentDate.getHours(),
    m: currentDate.getMinutes(),
    s: currentDate.getSeconds()
  }
  emitter.emit('render')
}


app.route('/', require('./views/time-tracking'))
app.route('/*', require('./views/404'))

module.exports = app.mount('body')
