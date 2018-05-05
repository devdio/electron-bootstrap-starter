const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

class Main {

    constructor() {
        app.on('ready', this.createWindow)
        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit()
            }
        })
        app.on('activate', () => {
            if (this.browserWindow === null) {
                this.createWindow()
            }
        })
    }

    createWindow() {
        this.browserWindow = new BrowserWindow({width: 800, height: 600, minWidth: 300})
        this.browserWindow.loadURL(url.format({
            pathname: path.join(__dirname, './index.html'),
            protocol: 'file:',
            slashes: true
        }))
        this.browserWindow.on('closed', () => {
            this.browserWindow = null
        })
    }
}

const main = new Main()