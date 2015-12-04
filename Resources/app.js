//Set background color 
//Ti.UI.setBackgroundColor("#999");

//Create main window
var mainWindow = Ti.UI.createWindow();

//Tite bar view 
var titleBarView = Ti.UI.createView({
	height: 20,
	background: "#d9e6f2",
	top: 20
});

//Title bar text
var titleBarText = Ti.UI.createLabel({
	text: "Samsung Devices",
	style: "bold",
	top: 20
});

//Open main window 
mainWindow.open();

//Added text to title bar view
titleBarView.add(titleBarText);

//Added title bar to main window
mainWindow.add(titleBarView);


