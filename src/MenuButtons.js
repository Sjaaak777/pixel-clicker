'use strict'
const { ipcRenderer } = require('electron')

export default class MenuButtons {
  constructor() {
    this.createMenuBar()
    this.createCloseButton()
    this.createSettingsButton()
    this.createRestartButton()
    this.quitApplication()
  }

  createMenuBar() {
    this.MenuBar = document.createElement('div')
    this.MenuBar.setAttribute('id', 'menuBar')
    this.MenuBar.style.position = 'absolute'
    this.MenuBar.style.width = '300px'
    this.MenuBar.style.height = '60px'
  }

  createCloseButton() {
    this.closeButton = document.createElement('img')
    this.closeButton.style.width = '40px'
    this.closeButton.style.height = '40px'
    this.closeButton.style.padding = '10px'
    this.closeButton.setAttribute('id', 'closeButton')
    this.closeButton.setAttribute('src', 'close-button.png')
    this.closeButton.style.cursor = 'pointer'
    this.closeButton.style.userSelect = 'none'
    this.MenuBar.appendChild(this.closeButton)
  }

  createSettingsButton() {
    this.settingsButton = document.createElement('img')
    this.settingsButton.style.width = '40px'
    this.settingsButton.style.height = '40px'
    this.settingsButton.style.padding = '10px'
    this.settingsButton.setAttribute('id', 'settingsButton')
    this.settingsButton.setAttribute('src', 'settings-button.png')
    this.settingsButton.style.cursor = 'pointer'
    this.settingsButton.style.userSelect = 'none'
    this.MenuBar.appendChild(this.settingsButton)
  }

  createRestartButton() {
    this.restartButton = document.createElement('img')
    this.restartButton.style.width = '40px'
    this.restartButton.style.height = '40px'
    this.restartButton.style.padding = '10px'
    this.restartButton.setAttribute('id', 'restartButton')
    this.restartButton.setAttribute('src', 'restart-button.png')
    this.restartButton.style.cursor = 'pointer'
    this.restartButton.style.userSelect = 'none'
    this.MenuBar.appendChild(this.restartButton)
  }

  displayMenuButtons() {
    document.body.append(this.MenuBar)
  }

  quitApplication() {
    this.closeButton.addEventListener('click', () => {
      ipcRenderer.send('menu-options', 'quit')
    })
  }
}
