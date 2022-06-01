export default class SettingsButton {
  constructor() {
    this.element = document.createElement('img')
    this.element.setAttribute('id', 'settings-button')
    this.element.style.position = 'absolute'
    this.element.style.width = '40px'
    this.element.style.height = '40px'
    this.element.style.padding = '10px'
    this.element.style.top = '0px'
    this.element.style.left = '0px'
    this.element.style.userSelect = 'none'
    this.element.style.cursor = 'pointer'
    this.element.style.color = 'orange'
    this.element.setAttribute('src', 'close-button.png')
    console.log(this.element)
  }
  displaySettingsButton() {
    document.body.append(this.element)
    this.element.style.display = 'block'
  }

  toggleDisplaySettingsMenu() {
    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        if (this.element.style.display === 'block') {
          this.element.style.display = 'none'
        } else {
          this.element.style.display = 'block'
        }
      }
    })
  }
}
