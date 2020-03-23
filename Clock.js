const Nanocomponent = require ('nanocomponent')
const html = require ('nanohtml')

export default class Clock extends Nanocomponent {
  constructor() {
    super()
    this.date = null
  }

  createElement (date, emit) {
    this.date = date
    return html`
      <p>
        Now is ( ${date.h} : ${date.m} : ${date.s} )
      </p>
    `
  }

  update({ h, m, s }) {
    return (h !== this.date.h || m !== this.date.m || s !== this.date.s)
  }
}
