const electron = require( 'electron' )
    , app = electron.app
    , BrowserWindow = electron.BrowserWindow
    , screenWidth = 800
    , screenHeight = 600
    , http = require('http')
    , crashReporter = require('crash-reporter')
    ;
var mainWindow = null
    , getRandomInt
    , server
  ;

// crashReporter.start({submitURL: 'http://127.0.0.1:9999'});
getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
server = http.createServer(function(req, res) {
  // Handle the uploaded crash report from client here
  // ...
  // Response the crash report id on server to client.
  res.end(getRandomInt(1000, 9999).toString());
});
app.on( 'ready', function () {

    server.listen(9999, '127.0.0.1', function () {
      mainWindow = new BrowserWindow({width: 800, height: 600});
      mainWindow.loadURL('file://' + __dirname + '/crash-report.html');
      mainWindow.webContents.openDevTools();
    });

    mainWindow = new BrowserWindow ({
          width: screenWidth
        , height: screenHeight
        , show: false
        // some additional params
        , 'always-on-top': true
    });

    // for GC
    mainWindow.on('closed', function() {
      mainWindow = null;
    });

    mainWindow.webContents.openDevTools();
    mainWindow.loadURL( 'file://' + __dirname + '/index.html' );
    mainWindow.show();
})
.on('window-all-closed', function() {
  app.quit();
})
;