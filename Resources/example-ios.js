'use strict';

import UIAlertController from 'UIKit';
import TiApp from 'Titanium/TiApp';

import { 
	UIAlertControllerStyleAlert, 
	UIAlertControllerStyleActionSheet,
	UIAlertActionStyleDefault,
	UIAlertActionStyleDestructive,
	UIAlertActionStyleCancel
} from 'UIKit';

export default class Example {

  constructor() {
    this.buttonAlert = Ti.UI.createButton({ title: 'Trigger Alert Dialog!', top: 100 });
    this.buttonActionSheet = Ti.UI.createButton({ title: 'Trigger Action Sheet!', top: 200 });
    this.noticeLabel = Ti.UI.createLabel({ top: 300 });
    this.window = Ti.UI.createWindow();
    
    this.buttonAlert.addEventListener('click', (event) => {
    	this.showAlertWithStyle(UIAlertControllerStyleAlert);
    });

    this.buttonActionSheet.addEventListener('click', (event) => {
    	this.showAlertWithStyle(UIAlertControllerStyleActionSheet);
    });
    
    this.window.add(this.buttonAlert);
    this.window.add(this.buttonActionSheet);
    this.window.add(this.noticeLabel);
  }

  showAlertWithStyle(style) {
  	const alertController = UIAlertController.alertControllerWithTitleMessagePreferredStyle('My Title', 'My Message', style);

  	const alertAction = UIAlertAction.actionWithTitleStyleHandler('OK', UIAlertActionStyleDefault, (action) => {
  		this.noticeLabel.setText('Clicked OK!');
  	});
  		
  	const cancelAction = UIAlertAction.actionWithTitleStyleHandler('Cancel', UIAlertActionStyleCancel, (action) => {
  		this.noticeLabel.setText('Clicked Cancel!');
  	});
  	
  	const destructiveAction = UIAlertAction.actionWithTitleStyleHandler('Delete', UIAlertActionStyleDestructive, (action) => {
  		this.noticeLabel.setText('Clicked Delete!');
  	});

  	alertController.addAction(alertAction);
  	alertController.addAction(destructiveAction);
  	alertController.addAction(cancelAction);

  	TiApp.app().showModalController(alertController, true);
  }
  
  open() {
    this.window.open();
  }
}
