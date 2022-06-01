export default class SettingsMenu {
  constructor() {
    this.element = document.createElement('div')
    document.body.appendChild(this.element)
    this.element.style.width = '30%'
    this.element.style.height = '60%'
    this.element.style.backgroundColor = '#555'
    this.element.style.position = 'absolute'
    this.element.style.top = '5%'
    this.element.style.left = '30%'
    this.element.style.zIndex = '5'
    this.element.style.display = 'none'
    this.element.style.borderRadius = '15px'
    this.element.style.userSelect = 'none'
    this.element.style.padding = '150px'
    this.element.style.color = 'orange'
    this.element.style.fontSize = '30px'
    this.element.style.justifyContent = 'center'
    this.element.innerHTML = `
      <img src="close-button.png" style="width: 40px; height: 40px; padding: 10px; "> QUIT <br><br>
      <img  src="settings-button.png" style="width: 40px; height: 40px; padding: 10px; "> SETTINGS<br><br>
      <img  src="restart-button.png" style="width: 40px; height: 40px; padding: 10px; "> RESTART<br><br><br>
      Double clicking removes a pixel<br><br>
      <i>After you placed your 1st pixel, colors can't be changed.<br><br>
      Choose wisely :)</i>`
  }

  toggleDisplaySettingsMenu() {
    document.addEventListener('click', (event) => {
      if (event.target.id === 'settingsButton') {
        if (this.element.style.display === 'block') {
          this.element.style.display = 'none'
        } else {
          this.element.style.display = 'block'
        }
      }
    })
  }
}
