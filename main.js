const {app, BrowserWindow} = require('electron');

const url = require('url');
const path  = require('path');

function createWindow() {
    const win = new BrowserWindow({
        title: 'Electron',
        height: 600,
        width: 1000
    });

    const startUrl = url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'fil'
    });

    win.loadURL(startUrl);
}

app.whenReady().then(createWindow);