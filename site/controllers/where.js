/**
 * Created by Lukas Willin, Emil Sturzenegger, Irina Terribilini
 */

/**
 * This controller will hold functionality that is used
 * and affects the 'where'-aspect of the site
 */

function initialize() {
    var here = new google.maps.LatLng(8, 45);
    //--> Objekt wird als Center Property in den Karten-Optionen gesetzt.

    //Diese beiden Properties sind zwingend nötig
    var mapOptions = {center: here, zoom: 15};

    //Sicherstellen, dass Element mit der ID=where-screen eine Höhe hat
    //Sonst wird die Karte nicht sichtbar.
    var map = new google.maps.Map(document.getElementById('where-screen'), mapOptions);

    var getPosition = function (position) {
        console.log(position.coords.latitude, position.coords.longitude);
        map.setCenter({lat: position.coords.latitude, lng: position.coords.longitude});
    }
    window.navigator.geolocation.getCurrentPosition(getPosition);
}

initialize();







