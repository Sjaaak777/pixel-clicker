'use strict'

let colorArray = []
export default class ColorPalette {
  constructor() {}

  createColor(left, top) {
    colorArray = []
    this.element = document.createElement('div')
    this.element.setAttribute('id', 'colorPalette')
    document.body.appendChild(this.element)
    this.element.style.position = 'absolute'
    this.element.style.width = '100px'
    this.element.style.height = '100px'
    this.element.style.backgroundColor = this.generateBaseColor()
    this.element.style.userSelect = 'none'
    this.element.style.left = left
    this.element.style.top = top
    colorArray.push(`${this.element.style.backgroundColor}`)
  }

  displayColorArray() {
    return this.filledArray
  }

  generateBaseColor() {
    let maxVal = 0xffffff // 16777215
    let randomNumber = Math.random() * maxVal
    randomNumber = Math.floor(randomNumber)
    randomNumber = randomNumber.toString(16)
    let randColor = randomNumber.padStart(6, 0)
    colorArray.push(randColor)
    return `#${randColor.toUpperCase()}`
  }

  getRandomColorFromBaseColors() {
    let rand = Math.floor(Math.random() * colorArray.length)
    console.log('arr from colorP', colorArray)
    return colorArray[rand]
  }
}
