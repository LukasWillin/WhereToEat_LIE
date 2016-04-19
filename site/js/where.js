/**
 * Created by Lukas Willin, Emil Sturzenegger, Irina Terribilini
 *
 * This file will hold functionality that is used
 * and affects the 'where'-aspect of the site
 */

console.log("Loaded where.js");

/**
 * Initialisiert Map und nimmt die aktuelle Position.
 *
 * @returns {google.maps.Map}
 */
function initialize(markers) {
    var here = new google.maps.LatLng(8, 45);
    //--> Objekt wird als Center Property in den Karten-Optionen gesetzt.

    //Diese beiden Properties sind zwingend nötig
    var mapOptions = {center: here, zoom: 15};

    //Sicherstellen, dass Element mit der ID=where-screen eine Höhe hat
    //Sonst wird die Karte nicht sichtbar.
    var map = new google.maps.Map(document.getElementById('where-screen'), mapOptions);

    setCenter(map);

    // Wenn Markers parameter besteht, sollen diese gesetzt werden.
    if(typeof markers !== 'undefined') {
        // TODO
    }

    return map;
}

/**
 * Setzt das Zentrum einer Map auf den aktuellen Standort.
 *
 * @param map Google Maps Objekt
 */
function setCenter(map) {
    if(navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
            function(position){
                var initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                map.setCenter(initialLocation);
            },function() {
                handleNoGeolocation(true);
            });
    } else {
        handleNoGeolocation(false);
    }

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
 * Sucht Markers gemäss dem erhaltenen Tag und setzt diese auf die Map. Initiert die Erstellung der Listenansicht.
 *
 * @param tag Suchbegriff
 */
function setMarkers(tag) {
    // TODO
    //var markers = [];

    // Suche nach Marker mit einem Tag

    // Zeichne Map neu und gebe Daten an who View
    //initialize(markers);
    //listMarkers(markers);
}

initialize();







