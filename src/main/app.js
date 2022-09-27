const { Server } = require('socket.io');
const path = require('path');

exports.init = (ipc, getMainWindow) => {
  setInterval(() => {
    const mainWindow = getMainWindow();
    if (mainWindow) {
      console.log('send log');
      mainWindow.webContents.send('log', '1');
    } else {
      console.log('not send log');
    }
  }, 2000);
  console.log('initialized');
};
