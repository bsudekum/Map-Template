$(function () {

	var map = L.map('map').setView([51.505, -0.09], 13);

		L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
		}).addTo(map);

		var fullScreen = new L.Control.FullScreen(); 
		var bingGeocoder = new L.Control.BingGeocoder('AmFJ03ozVugKu0Y_uijzwvFEKfKY5VCesm1eiBqGhchxQ3uKFUQMYsKJLNdfHsIR');

		map.addControl(fullScreen);
		map.addControl(bingGeocoder);

});  