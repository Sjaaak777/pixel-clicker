'use strict'

const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    icon: path.join(__dirname, 'icon.ico'),
    width: 800,
    height: 600,
    fullscreen: true,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  win.menuBarVisible = false
  win.loadFile('src/index.html')
}

app.whenReady().then(() => {
  createWindow()
})

ipcMain.on('menu-options', (events, args) => {
  if (args === 'quit') {
    console.log('quit?', args)
    app.quit()
  }
  if (args === 'restart') {
    console.log('restart?', args)
    restartApp()
  }
})

ipcMain.on('menu-relaunch', (events, args) => {
  console.log(args)
})
