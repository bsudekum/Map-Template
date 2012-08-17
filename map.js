function runMap() {

	var map = L.map('map').setView([12, -29], 3);

		L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
		}).addTo(map);

		var fullScreen = new L.Control.FullScreen(); 
		var bingGeocoder = new L.Control.BingGeocoder('Your-API-Key'); //Sign up here: http://www.bingmapsportal.com/
		var hash = new L.Hash();

		map.addControl(fullScreen);
		map.addControl(bingGeocoder);
		hash.init(map);

		var geolocate = document.getElementById('geolocate');

		geolocate.onclick = function() {

		function onLocationFound(e) {

			L.marker(e.latlng).addTo(map)
			.bindPopup("You're right here!").openPopup();
			}

		function onLocationError(e) {
			alert(e.message);
			}

		map.on('locationfound', onLocationFound);
		map.on('locationerror', onLocationError);

		map.locate({setView: true});
	}

}

window.onload = runMap;   