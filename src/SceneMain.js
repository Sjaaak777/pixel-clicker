import COLORPALETTE from './ColorPalette.js'
const ColorPalette = new COLORPALETTE()
export default class SceneMain {
  constructor() {
    this.appDimensions = document.body.getBoundingClientRect()
    this.spriteArea = document.createElement('div')
    document.body.appendChild(this.spriteArea)
    document.body.setAttribute('id', 'main')
    this.spriteArea.setAttribute('id', 'spriteArea')
    this.spriteArea.style.position = 'absolute'
    this.spriteArea.style.width = 640 + 'px'
    this.spriteArea.style.height = 640 + 'px'
    this.spriteArea.style.left = this.appDimensions.width / 2 - 320 + 'px'
    this.spriteArea.style.top = 100
    this.spriteArea.style.border = '1px solid white'
    this.grid = []
    this.columns = 16
    this.rows = 16
  }
  createGrid() {
    this.grid = []
    let count = 1
    for (let column = 0; column < this.columns; column++) {
      for (let row = 0; row < this.rows; row++) {
        this.grid.push(this.createSquare(count, '#777'))
        count++
      }
    }
  }
  removeGrid() {
    this.spriteArea.remove()
  }

  createSquare(count) {
    this.backgroundColor = '#777'
    this.square = document.createElement('div')
    this.spriteArea.appendChild(this.square)
    this.square.style.display = 'inline-block'
    this.square.style.width = '38px'
    this.square.style.height = '38px'
    this.square.style.border = '0.1px solid'
    this.square.style.borderColor = '#333'
    this.square.style.top = this.spriteArea.style.top
    this.square.style.backgroundColor = '#333'
    return this.square
  }
  getRandomColorFromBaseColors() {
    let colorArray = [
      'rgb(70, 224, 163)',
      'rgb(170, 24, 163)',
      'rgb(170, 224, 63)',
      'rgb(170, 24, 63)',
    ]
    let rand = Math.floor(Math.random() * colorArray.length)
    console.log('array =', colorArray)
    return colorArray[rand]
  }
}
