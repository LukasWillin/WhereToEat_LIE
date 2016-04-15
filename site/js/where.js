/**
 * Created by Lukas Willin, Emil Sturzenegger, Irina Terribilini
 *
 * This file will hold functionality that is used
 * and affects the 'where'-aspect of the site
 */

/**
 * Initialisiert Map und nimmt die aktuelle Position.
 */
function initialize() {
    var here = new google.maps.LatLng(8, 45);
    //--> Objekt wird als Center Property in den Karten-Optionen gesetzt.

    //Diese beiden Properties sind zwingend nötig
    var mapOptions = {center: here, zoom: 15};

    //Sicherstellen, dass Element mit der ID=where-screen eine Höhe hat
    //Sonst wird die Karte nicht sichtbar.
    map = new google.maps.Map(document.getElementById('where-screen'), mapOptions);

    setCenter();
}

/**
 * Setzt das Zentrum einer Map auf den aktuellen Standort.
 */
function setCenter() {
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
 * @param errorFlag true für Service Problem und false für unterstützungs Problem
 */
function handleNoGeolocation(errorFlag) {
    if (errorFlag == true) console.log("Geolocation service failed.");
    else console.log("Your browser doesn't support geolocation.");

    map.setCenter("Brugg");
}

initialize();







