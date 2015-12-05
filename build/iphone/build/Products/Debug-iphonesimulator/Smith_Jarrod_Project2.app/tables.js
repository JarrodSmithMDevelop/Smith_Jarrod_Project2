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
	var phoneNameRow = Ti.UI.createTableViewRow({
		title: phone[i].name,
		hasChild: true
	});
	phoneSection.add(phoneNameRow);
};

for(var i=0, j=tablet.length; i<j; i++){
	var tabletNameRow = Ti.UI.createTableViewRow({
		title: tablet[i].name,
		hasChild: true
	});
	tabletSection.add(tabletNameRow);
};

for(var i=0, j=wearable.length; i<j; i++){
	var wearableNameRow = Ti.UI.createTableViewRow({
		title: wearable[i].name,
		hasChild: true
	});
	wareableSection.add(wearableNameRow);
};
var techSection = [phoneSection, tabletSection, wareableSection];

devices.setData(techSection);

mainWindow.add(devices);
