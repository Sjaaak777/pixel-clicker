'use strict'
export default class Pixel {
  constructor(left, top, color) {
    this.gameArea = document.body.getBoundingClientRect()
    this.element = document.createElement('div')
    this.element.setAttribute('id', 'pixel')
    this.element.style.width = '20px'
    this.element.style.height = '20px'
    this.element.style.position = 'absolute'
    this.element.style.left = left
    this.element.style.top = top
    this.element.style.backgroundColor = color //'rgb(62, 171, 50)'
    document.body.append(this.element)
  }

  setPixelColor(color) {
    this.element.style.backgroundColor = color
  }
}
