const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  SendToElectron: (channel, data) => ipcRenderer.send(channel, data),
  ReceiveFromElectron: (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(event, ...args))
})