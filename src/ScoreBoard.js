export default class ScoreBoard {
  constructor() {
    this.element = document.createElement('div')
    this.element.style.position = 'absolute'
    this.element.style.userSelect = 'none'
    this.element.style.top = '10px'
    this.element.style.padding = '5px'
    this.element.style.right = '10px'
    this.element.style.fontSize = '35px'
    this.element.setAttribute('id', 'scores')
    this.element.innerHTML = 'Clicks: 0'
    this.score = 0
  }
  createScoreBoard() {
    document.body.append(this.element)
  }
  updateScoreText(text) {
    this.element.innerHTML = `Clicks: ${this.score}`
  }
  updateTextColor(color) {
    this.element.style.color = color
  }
  updateScore(score) {
    this.score += score
  }

  getScore() {
    return this.score
  }
}
