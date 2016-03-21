const electron = require( 'electron' )
    , app = electron.app
    , BrowserWindow = electron.BrowserWindow
    , screenWidth = 800
    , screenHeight = 600
    ;
var mainWindow = null;
  ;
app.on( 'ready', function () {
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