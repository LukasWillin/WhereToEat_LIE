/**
 * Created by Lukas Willin, Emil Sturzenegger, Irina Terribilini
 *
 * This file will hold functionality that is used
 * and affects the 'where'-aspect of the site
 */

console.log("Loaded where.js");

/**
 * Initialisiert neue Map.
 *
 * @returns {google.maps.Map} Ein Map Objekt
 */
function initializeMap() {
    setCurrentPosition();

    //Diese beiden Properties sind zwingend nötig
    var mapOptions = {center: getCurrentPosition(), zoom: 15};

    //Sicherstellen, dass Element mit der ID=where-screen eine Höhe hat
    //Sonst wird die Karte nicht sichtbar.
    var map = new google.maps.Map(document.getElementById('where-screen'), mapOptions);

    return map;
}

/**
 * Gets the current position and deploys it in the local storage of the browser
 */
function setCurrentPosition() {
    window.navigator.geolocation.getCurrentPosition(
        function(position){
            var pos = JSON.stringify({
                lat:position.coords.latitude,
                lng:position.coords.longitude
            });

            window.localStorage.setItem("currentPosition", pos);
        },function() {
            handleNoGeolocation(true);
        });
}

/**
 * @return JSON object for the current position stored in local storage
 */
function getCurrentPosition() {
    return JSON.parse(window.localStorage.getItem("currentPosition"));
}

/**
 * Handler um Gelocation Probleme abzuhandeln.
 *
 * @param errorFlag True für Service Problem und false für unterstützungs Problem
 */
function handleNoGeolocation(errorFlag) {
    if (errorFlag == true) console.log("Geolocation service failed.");
    else console.log("Your browser doesn't support geolocation.");

    map.setCenter("Brugg");
}

/**
 * Setzt alle Markers auf eine neue Map.
 *
 * @param tags Array von Suchbegriffen als Strings
 */
function setMarkers(tags) {
    // Erstelle neues Maps Objekt
    var map = initializeMap();
    console.log(getCurrentPosition());
    var here = getCurrentPosition();
    var list = [];

    for(var tag in tags) {
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
            location: here,
            radius: 3000,
            types: ['restaurant'],
            keyword: tag
        }, function(places, status) {
            if(status === google.maps.places.PlacesServiceStatus.OK ) {
                // Creates list in Who view
                //list.add(places);
                // Setzt Markers auf die Map
                for (var i = 0; i < places.length; i++) {
                    createMarker(places[i], map);
                }
            } else {
                // TODO: Nichts gefunden
            }
        });
    }

    //listMarkers(list);
}

/**
 * Erstellt ein einzelnes Marker Objekt.
 *
 * @param place
 * @param map
 */
function createMarker(place, map) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}

initializeMap();







