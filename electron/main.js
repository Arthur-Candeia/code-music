const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path')
const fs = require('node:fs')

let window
const musicDir = path.join(__dirname, '..', 'public', 'musics')

function createWindow() {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 600,
    minHeight: 400,
    title: 'Code Music',
    menuBar: false,
    icon: path.join(__dirname, '..', 'public', 'favicon.png'),
    webPreferences: {
      devTools: false,
      nodeIntegration: true,
      preload: `${__dirname}/preload.js`
    },
    
  })
  window.menuBarVisible = false
  window.loadURL('http://localhost:3000')
  window.on('closed', () => {window = null})
}

app.on('ready', async () => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (window === null) createWindow()
})

ipcMain.on("music-upload", (event, file) => {
  const filePath = path.join(musicDir, file.name)
  fs.writeFile(filePath, file.data, async (err) => {
    if (err) {
      window.webContents.send('toast:receive', err)
    } else {
      sendUpdatedList()
      window.webContents.send('toast:receive', "Arquivo recebido com sucesso")
    }
  })
})

ipcMain.on('music-get', () => {
  sendUpdatedList()
})

ipcMain.on('music-delete', async (event, file) => {
  const filePath = path.join(musicDir, file)
  fs.unlink(filePath, async (err) => {
    if (err) {
      window.webContents.send('toast:receive', err)
    }
    else {
      sendUpdatedList()
      window.webContents.send('toast:receive', "Arquivo excluído com sucesso")
    }
  })
})

ipcMain.on('music-to-play', (event, file) => {
  window.webContents.send('music-playable', file)
})

async function sendUpdatedList() {
  const files = await fs.promises.readdir(musicDir)
  window.webContents.send('music:list', files)
}