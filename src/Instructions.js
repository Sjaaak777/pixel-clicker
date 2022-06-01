export default class Instructions {
  constructor() {
    this.element = document.createElement('div')
    this.element.style.width = '360px'
    this.element.style.height = '300px'
    this.element.style.position = 'absolute'
    this.element.style.left = '100px'
    this.element.style.top = '340px'
    this.element.style.backgroundColor = 'orange'
    this.element.style.padding = '50px'

    this.element.innerHTML = 'Generate something. <br> Create a screenshot.'
  }

  displayInstructions() {
    document.body.append(this.element)
  }

  hideInstructions() {
    this.element.style.display = 'none'
  }
}
