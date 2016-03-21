const remote = require('remote')
    , Menu = remote.require('menu');
var template = [
  {
    label: 'Electron Tute',
    submenu: [
      {
        label: 'About Electron Tute',
        selector: 'orderFrontStandardAboutPanel:'
      },
      {
        type: 'separator'
      },
      {
        label: 'Quit',
        accelerator: 'CmdOrCtrl+Q',
        selector: 'terminate:'
      },
    ]
  },
  {
    label: 'Help',
    submenu: []
  },
  {
    label: 'Menu Item',
    submenu: [
      {
        label: 'Sub Menu Item',
        accelerator: 'CmdOrCtrl+B',
        selector: 'orderFrontStandardAboutPanel:'
      },
    ]
  }
];

menu = Menu.buildFromTemplate(template);

Menu.setApplicationMenu(menu);