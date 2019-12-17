'use strict';

const path = require('path');
const { BrowserWindow } = require('electron');
const electronLocalShortcut = require('electron-localshortcut');

// const AppConfig = require('../../configuration');

const Common = require('../../common');

class SettingsWindow {
  constructor() {
    this.settingsWindow = null;
    this.createSettingsWindow();
  }

  createSettingsWindow() {
    this.settingsWindow = new BrowserWindow({
      title: Common.ELECTRONIC_SETINGS,
      width: Common.WINDOW_SIZE_SETTINGS.width,
      height: Common.WINDOW_SIZE_SETTINGS.height * 0.9,
      resizable: false,
      fullscreenable: false,
      show: false,
      frame: true,
      alwaysOnTop: true,
      icon: 'assets/icon.png',
      titleBarStyle: 'hidden',
      webPreferences: {
        javascript: true,
        plugins: true,
        nodeIntegration: true,
        webSecurity: false,
        devTools: true,
      },
    });

    this.initWindowEvents();
    this.initSettingsWindowShortcut();

    this.settingsWindow.loadURL(`file://${path.join(__dirname, '/../views/settings.html')}`);
    if (Common.DEBUG_MODE) {
      this.settingsWindow.webContents.openDevTools();
    }
  }

  initWindowEvents() {
    this.settingsWindow.on('close', () => {
      this.unregisterLocalShortCut();
      this.settingsWindow = null;
      this.isShown = false;
    });
  }

  show() {
    if (!this.settingsWindow) {
      this.createSettingsWindow();
    }
    this.settingsWindow.show();
    this.isShown = true;
  }

  hide() {
    this.settingsWindow.hide();
    this.isShown = false;
  }

  registerLocalShortcut() {
    electronLocalShortcut.register(this.settingsWindow, 'Esc', () => {
      this.settingsWindow.close();
    });
  }

  unregisterLocalShortCut() {
    electronLocalShortcut.unregisterAll(this.settingsWindow);
  }

  initSettingsWindowShortcut() {
    this.registerLocalShortcut();
  }
}

module.exports = SettingsWindow;
