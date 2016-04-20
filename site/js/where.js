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
function initialize() {
    var here = new google.maps.LatLng(8, 45);
    //--> Objekt wird als Center Property in den Karten-Optionen gesetzt.

    //Diese beiden Properties sind zwingend nötig
    var mapOptions = {center: here, zoom: 15};

    //Sicherstellen, dass Element mit der ID=where-screen eine Höhe hat
    //Sonst wird die Karte nicht sichtbar.
    var map = new google.maps.Map(document.getElementById('where-screen'), mapOptions);

    return map;
}

/**
 * Setzt das Zentrum einer Map auf den aktuellen Standort.
 *
 * @param map Google Maps Objekt
 */
function setCenter(map) {
    var center;
    if(navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
            function(position){
                center = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                map.setCenter(center);
            },function() {
                handleNoGeolocation(true);
            });
    } else {
        center = handleNoGeolocation(false);
    }

    return center;
}

/**
 * Handler um Gelocation Probleme abzuhandeln.
 *
 * @param errorFlag True für Service Problem und false für unterstützungs Problem
 * @returns {string} default Ortschaft
 */
function handleNoGeolocation(errorFlag) {
    if (errorFlag == true) console.log("Geolocation service failed.");
    else console.log("Your browser doesn't support geolocation.");

    map.setCenter("Brugg");

    return "Brugg";
}

/**
 * Setzt alle Markers auf eine neue Map.
 *
 * @param tags Array von Suchbegriffen als Strings
 */
function setMarkers(tags) {
    // Erstelle neues Maps Objekt
    var map = initialize();
    var here = setCenter(map);

    for(var tag in tags) {
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
            location: here,
            radius: 500,
            types: ['restaurant'],
            keyword: tag
        }, function(results, status) {
            if(status === google.maps.places.PlacesServiceStatus.OK ) {
                // Setzt Markers auf die Map
                for (var i = 0; i < results.length; i++) {
                    createMarker(results[i], map);
                }
                listMarkers(places);
            } else {
                // TODO: Nichts gefunden
            }
        });
    }
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

setCenter(initialize());







