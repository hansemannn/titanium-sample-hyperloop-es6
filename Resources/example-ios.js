'use strict';

import { UIAlertController, UIAlertAction, UIAlertActionStyle, UIAlertControllerStyle } from 'UIKit';
import TiApp from 'Titanium/TiApp';

export default class Example {

  constructor() {
    this.buttonAlert = Ti.UI.createButton({ title: 'Trigger Alert Dialog!', top: 100 });
    this.buttonActionSheet = Ti.UI.createButton({ title: 'Trigger Action Sheet!', top: 200 });
    this.noticeLabel = Ti.UI.createLabel({ top: 300 });
    this.window = Ti.UI.createWindow();
    
    this.buttonAlert.addEventListener('click', event => {
    	this.showAlertWithStyle(UIAlertControllerStyle.Alert);
    });

    this.buttonActionSheet.addEventListener('click', event => {
    	this.showAlertWithStyle(UIAlertControllerStyle.ActionSheet);
    });
    
    this.window.add(this.buttonAlert);
    this.window.add(this.buttonActionSheet);
    this.window.add(this.noticeLabel);
  }

  showAlertWithStyle(style) {
  	const alertController = UIAlertController.alertControllerWithTitleMessagePreferredStyle('My Title', 'My Message', style);

  	const alertAction = UIAlertAction.actionWithTitleStyleHandler('OK', UIAlertActionStyle.Default, action => {
  		this.noticeLabel.setText('Clicked OK!');
  	});
  		
  	const cancelAction = UIAlertAction.actionWithTitleStyleHandler('Cancel', UIAlertActionStyle.Cancel, action => {
  		this.noticeLabel.setText('Clicked Cancel!');
  	});
  	
  	const destructiveAction = UIAlertAction.actionWithTitleStyleHandler('Delete', UIAlertActionStyle.Destructive, action => {
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
