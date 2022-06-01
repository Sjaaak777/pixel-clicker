'use strict'

import MENU_BUTTONS from './MenuButtons.js'
import SCOREBOARD from './ScoreBoard.js'
import SCENEMAIN from './SceneMain.js'
import COLORPALETTE from './ColorPalette.js'
import SETTINGS from './Settings.js'

const MenuButtons = new MENU_BUTTONS()
const ScoreBoard = new SCOREBOARD()
const ColorPalette = new COLORPALETTE()
const Settings = new SETTINGS()

MenuButtons.displayMenuButtons()

let colorPixel = false
let SceneMain = new SCENEMAIN()

function init() {
  ScoreBoard.createScoreBoard()
  Settings.toggleDisplaySettingsMenu()
  createstartScene()
  ScoreBoard.updateTextColor('orange')
  SceneMain.createGrid()
  createColorPalette()
}

function restartApp() {
  SceneMain.removeGrid()
  SceneMain = new SCENEMAIN()
  SceneMain.createGrid()
  createColorPalette()
  resetScore()
  colorPixel = false
}

function createColorPalette() {
  ColorPalette.createColor('100px', '100px')
  ColorPalette.createColor('200px', '100px')
  ColorPalette.createColor('100px', '200px')
  ColorPalette.createColor('200px', '200px')
}

function createstartScene() {
  document.body.style.backgroundColor = '#333'
}

init()

function resetScore() {
  ScoreBoard.score = 0
}

document.addEventListener('dblclick', function (event) {
  if (
    event.target.id != 'colorPalette' &&
    event.target.id != 'main' &&
    event.target.id != 'settingsButton' &&
    event.target.id != 'restartButton'
  ) {
    event.target.style.backgroundColor = '#333F'
  }
})

document.addEventListener('click', (event) => {
  if (event.target.id == 'restartButton') {
    restartApp()
    resetScore()
  }
})

document.addEventListener('click', (event) => {
  if (event.target.id == 'colorPalette') {
    colorPixel = event.target.style.backgroundColor
  } else {
    if (colorPixel) {
      if (
        event.target.id != 'main' &&
        event.target.id != 'settingsButton' &&
        event.target.id != 'restartButton'
      ) {
        event.target.style.backgroundColor = colorPixel
        ScoreBoard.updateScore(1)
      }
    }
  }

  ScoreBoard.updateScoreText(`Clicks: ${ScoreBoard.score}`)
})
