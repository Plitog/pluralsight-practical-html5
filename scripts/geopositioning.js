function createDrivingDirectionsMap() {
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(OnSuccess, OnError, {
            enableHighAccuracy: true,
            maximumAge: 1000,
            timeout: 500
        });
    }
    else {
        document.getElementById(map).innerHTML = "No support for geolocation...";
    }
}

function OnSuccess(position) {
    var mapDiv = document.getElementById("map");
	mapDiv.innerHTML = position.coords.latitude + " " + position.coords.longitude;
}

function OnError(error) {
    var mapDiv = document.getElementById("map");
    mapDiv.innerHTML = error;
}



