//Create an array of objects

		
		//Phones of 2015
var phone = [{name: "Galaxy Note 5", Screen: "5.7 inch Super Amoled display", InternalMemory:"32GB or 64GB", Ram: "4 GB", Camera: "16 MP", Battery: "3000mAh"},
				  {name: "Galaxy S6 Edge Plus", Screen: "5.7 inch Super Amoled display", InternalMemory:"32GB or 64GB", Ram: "4 GB", Camera: "16 MP", Battery: "3000mAh"},
				  {name: "Iphone 6S Plus", Screen: "5.5 inch Retina HD display with 3D touch", InternalMemory:"16GB or 64GB or 128GB", Ram: "2 GB", Camera: "12 MP", Battery: "2915mAh"},
				  {name: "Nexus 6P", Screen: "5.7 inch Amoled display", InternalMemory:"32GB or 64GB or 128GB", Ram: "3 GB", Camera: "12.3 MP", Battery: "3450mAh"},
				  {name: "Sony Xperia Z5 Compact", Screen: "5.2 inch Triluminos display", InternalMemory:"32GB", Ram: "3 GB", Camera: "23 MP", Battery: "2900mAh"} ];
       
       //Tablets of 2015
var tablet = [{name: "iPad Air 2", Screen: "9.7 inch Retina display", InternalMemory:"16GB 64GB 128GB", Ram: "2 GB", Camera: "8 MP", Battery: "7340mAh"},
       			  {name: "Samsung Galaxy Tab S2", Screen: "8 or 9.7 inch Amoled display", InternalMemory:"32GB or 64GB", Ram: "3 GB", Camera: "8 MP", Battery: "4000 or 5870mAh"},
       			  {name: "iPad mini 4", Screen: "7.9 inch Retina display", InternalMemory:"16GB or 64GB 128GB", Ram: "2 GB", Camera: "8 MP", Battery: "5124mAh"},
       			  {name: "Sony Xperia Z4 Tablet", Screen: "10.1 inch  display", InternalMemory:"32GB", Ram: "3 GB", Camera: "8.1 MP", Battery: "6000mAh"},
       			  {name: "iPad Pro", Screen: "12.9 inch Retina display", InternalMemory:"32GB or 128GB", Ram: "4 GB", Camera: "8 MP", Battery: "10307mAh"}];
		
		//Wearables of 2015
var wearable =[{name: "Samsung Gear S2", Screen: "1.2 inch Super Amoled display", InternalMemory:"4GB", Ram: "512 MB", Camera: "NA", Battery: "300mAh"},
					{name: "Apple Watch", Screen: "1.49 inch Retina display", InternalMemory:"8GB", Ram: "512 MB", Camera: "NA", Battery: "205mAh"},
					{name: "Motorola Moto 360", Screen: "1.57 inch LCD display", InternalMemory:"4GB", Ram: "512 MB", Camera: "NA", Battery: "300mAh"},
					{name: "Sony SmartWatch 3", Screen: "1.6 inch Transflective display", InternalMemory:"4GB", Ram: "512 MB", Camera: "NA", Battery: "420mAh"}, 
					{name: "Huawei Watch", Screen: "1.4 inch display", InternalMemory:"4 GB", Ram: "512 MB", Camera: "NA", Battery: "300mAh"}];
		

//Create Table view for phones
var devices = Ti.UI.createTableView({
	top: titleViewBorder.top + titleViewBorder.height
});

//Setting iPhone style
if(Ti.Platform === "iPhone OS"){
	devices.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
};

	//Function for my event listener
	var specs = function(){ 
		var specWindow = Ti.UI.createWindow({
			backgroundColor: "#333"
			});
		
		//Tite bar view 
		var specTitleBarView = Ti.UI.createView({
			height: 50,
			backgroundColor: "#d9e6f2",
			top: 20
		});
		
		//Title bar text
		var specTitleBarText = Ti.UI.createLabel({
			text: this.title,
			color: "#000",
			style: "bold",
			top: 40
		});
			
		//Border for bottom of the title bar
		var specTitleViewBorder = Ti.UI.createView({
			backgroundColor: "#fff",
			height: 1,
			top: titleBarView.height + titleBarView.top
		});
		
		//Creates view for back button
		var backButton = Ti.UI.createView({
			backgroundColor: "#d9e6f2",
			width: 100,
			height: 40,
			bottom: 10,
			left: 10
		});
		
			//Creates label for back button
			var backButtonLabel = Ti.UI.createLabel({
				text: "Back",
				fontSize: 14,
				fontFamily: "Ariel"
			});
			
		//Creates label for screen size
		var screenSizeLabel = Ti.UI.createLabel({
			text: "Screen Size:",
			left:20
		});
			
			//creates view for screen size label
			var screenSizeLabelView = Ti.UI.createView({
				backgroundColor: "#d9e6f2",
				height:30,
				top: specTitleViewBorder.top + 20,
			});	
				
				//pulls screen size info from array	
				var screenSizeSpec = Ti.UI.createLabel({
					text: this.screenSize,
					color: "white",
					top: screenSizeLabelView.top + screenSizeLabelView.height + 10,
					left:20
				});
			
		//Creates label for ram size	
		var internalMemLabel = Ti.UI.createLabel({
			text: "Internal Memory:",
			left:20
		});
			
			//creates view for ram label
			var internalMemLabelView = Ti.UI.createView({
				backgroundColor: "#d9e6f2",
				height:30,
				top: screenSizeSpec.top + 40,
			});	
			
				//pulls ram info from array	
				var internalMemSpec = Ti.UI.createLabel({
					text: this.internalMem,
					color: "white",
					top: internalMemLabelView.top + internalMemLabelView.height + 10,
					left:20
				});
		
		//Creates label for camera size		
		var ramSpecLabel = Ti.UI.createLabel({
			text: "Ram:",
			left:20
		});
		
			//creates view for camera label
			var ramSpecLabelView = Ti.UI.createView({
				backgroundColor: "#d9e6f2",
				height:30,
				top: internalMemSpec.top + 40,
			});	
				//pulls ram info from array	
				var ramSpec = Ti.UI.createLabel({
					text: this.ram,
					color: "white",
					top: ramSpecLabelView.top + ramSpecLabelView.height + 10,
					left:20
				});
		
		//Creates label for camera size
		var cameraSpecLabel = Ti.UI.createLabel({
			text: "Camera:",
			left:20
		});
			//creates view for camera label
			var cameraSpecView = Ti.UI.createView({
				backgroundColor: "#d9e6f2",
				height:30,
				top: ramSpec.top + 40,
			});	
				
				//pulls camera info from array					
				var cameraSpec = Ti.UI.createLabel({
					text: this.camera,
					color: "white",
					top: cameraSpecView.top + cameraSpecView.height + 10,
					left:20
				});

		//Creates label for battery size
		var batterySpecLabel = Ti.UI.createLabel({
			text: "Battery:",
			left:20
		});
		
			//creates view for battery label
			var batterySpecView = Ti.UI.createView({
				backgroundColor: "#d9e6f2",
				height:30,
				top: cameraSpec.top + 40,
			});	
		
				//pulls battery info from array				
				var batterySpec = Ti.UI.createLabel({
					text: this.battery,
					color: "white",
					top:batterySpecView.top + batterySpecView.height + 10,
					left:20
					});	
				
					var returnHome = function(){
						specWindow.close();
					};
		
		//Adding labels to views and views to windows			
		screenSizeLabelView.add(screenSizeLabel);
		internalMemLabelView.add(internalMemLabel);
		ramSpecLabelView.add(ramSpecLabel);
		cameraSpecView.add(cameraSpecLabel);
		batterySpecView.add(batterySpecLabel);	
		specWindow.add(nameRow);
		backButton.addEventListener("click", returnHome);
		backButton.add(backButtonLabel);
		specTitleBarView.add(specTitleBarText);
		specWindow.add(specTitleBarView, specTitleBarText, specTitleViewBorder, backButton, screenSizeSpec, internalMemSpec, ramSpec, cameraSpec, batterySpec, screenSizeLabelView, internalMemLabelView, ramSpecLabelView, cameraSpecView, batterySpecView);
		specWindow.open();
		

	};


//Create table section views for phones
var phoneSection = Ti.UI.createTableViewSection({
	headerTitle: "Top Phones of 2015",
	footerTitle: "All great devices."
});

//Create table section views for tablets
var tabletSection = Ti.UI.createTableViewSection({
	headerTitle: "Top Tablets of 2015",
	footerTitle: "All great devices."
});

//Create table section views for wareables
var wareableSection = Ti.UI.createTableViewSection({
	headerTitle: "Top Wearables of 2015",
	footerTitle: "All great devices."
});

//Loops to display information from arrays.
for(var i=0, j=phone.length; i<j; i++){
	var nameRow = Ti.UI.createTableViewRow({
		title: phone[i].name,
		screenSize: phone[i].Screen,
		internalMem: phone[i].InternalMemory,
		ram: phone[i].Ram,
		camera: phone[i].Camera,
		battery: phone[i].Battery,
		hasChild: true
	});

	phoneSection.add(nameRow);
	nameRow.addEventListener("click", specs);
};

//Loops through tablet array
for(var i=0, j=tablet.length; i<j; i++){
	var nameRow = Ti.UI.createTableViewRow({
		title: tablet[i].name,
		screenSize: tablet[i].Screen,
		internalMem: tablet[i].InternalMemory,
		ram: tablet[i].Ram,
		camera: tablet[i].Camera,
		battery: tablet[i].Battery,
		hasChild: true
	});
	tabletSection.add(nameRow);
	nameRow.addEventListener("click", specs);
};

//To loop through wearables array
for(var i=0, j=phone.length; i<j; i++){
	var nameRow = Ti.UI.createTableViewRow({
		title: wearable[i].name,
		screenSize: wearable[i].Screen,
		internalMem: wearable[i].InternalMemory,
		ram: wearable[i].Ram,
		camera: wearable[i].Camera,
		battery: wearable[i].Battery,
		hasChild: true
	});
		
	wareableSection.add(nameRow);
	nameRow.addEventListener("click", specs);
};




//Collects all section views
var techSection = [phoneSection, tabletSection, wareableSection];
//Sends section views to table
devices.setData(techSection);

mainWindow.add(devices);
