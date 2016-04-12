/**
 * Created by Lukas W on 11.04.2016.
 */

/**
 * This controller will hold functionality that is used
 * and affects the 'where'-aspect of the site
 */

$('document').ready(function() {
    var getPosition = function(position) {
        console.log(position.coords.latitude, position.coords.longitude);

    }
    window.navigator.geolocation.getCurrentPosition(getPosition);

    var here = new google.maps.LatLng(47.3, 45.3);
//--> Objekt wird als Center Property in den Karten-Optionen gesetzt.

//Diese beiden Properties sind zwingend nötig
    var mapOptions = {center: here, zoom: 15};

//Sicherstellen, dass Element mit der ID=where-screen eine Höhe hat
//Sonst wird die Karte nicht sichtbar.
    var map = new google.maps.Map(document.getElementById('where-screen'), mapOptions);
});




