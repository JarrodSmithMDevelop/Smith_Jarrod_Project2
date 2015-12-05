//Set background color 
Ti.UI.setBackgroundColor("#999");

//Create main window
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "white"
});

//Tite bar view 
var titleBarView = Ti.UI.createView({
	height: 50,
	backgroundColor: "#d9e6f2",
	top: 20
});

//Title bar text
var titleBarText = Ti.UI.createLabel({
	text: "Mobile Devices of 2015",
	style: "bold",
	top: 20
});

//Border for bottom of the title bar
var titleViewBorder = Ti.UI.createView({
	backgroundColor: "#002699",
	height: 1,
	top: titleBarView.height + titleBarView.top
});

//Requiring other js files 
var tables = require("tables");


//Added text to title bar view
titleBarView.add(titleBarText);

//Added title bar to main window
mainWindow.add(titleBarView, titleViewBorder);

//Open main window 
mainWindow.open();





