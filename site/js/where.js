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
 * @param radius ein Integer Wert
 */
function setMarkers(tags, radius) {
    // Erstelle neues Maps Objekt
    var map = initializeMap();
    var here = getCurrentPosition();

    // Deletes entries in the list of places
    deletePlacesList();

    tags.forEach(function(tag) {
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
            location: here,
            radius: radius,
            types: ['restaurant', 'bar', 'bakery', 'cafe', 'meal_delivery', 'meal_takeaway'],
            keyword: tag
        }, function(places, status) {
            if(status === google.maps.places.PlacesServiceStatus.OK
                && status != google.maps.places.PlacesServiceStatus.INVALID_REQUEST) {
                // Setzt Markers auf die Map
                for (var i = 0; i < places.length; i++) {
                    createMarker(places[i], map);
                }
                placesToLocalStorage(places, map);
            } else {
                // TODO: Nichts gefunden
            }
        });
    });

    listPlaces()
}

/**
 * stores an array of places in the local storage
 * the given places are enriched with information during the process
 * @param places array of places
 * @param map google maps object
 */
function placesToLocalStorage(places, map) {
    for (var i = 0; i < places.length; i++) {
        service = new google.maps.places.PlacesService(map);
        service.getDetails({placeId:places[i].place_id}, storeSinglePlaceResult);
    }
}

/**
 * stores a single placeResult
 * the place result is retrieved from the google places api
 * by the place_id
 * @param placeResult
 */
function storeSinglePlaceResult(placeResult) {
    var placesJSON = [];
    if(window.localStorage.getItem('places')) {
        placesJSON = JSON.parse(window.localStorage.getItem('places'));
        window.localStorage.removeItem('places');
    } else {
        //window.localStorage.setItem('places', "");
    }

    placesJSON.push(placeResult);
    //console.log(placesJSON);
    var string = JSON.stringify(placesJSON);
    window.localStorage.setItem('places', string);
}

/**
 * Returns a detailed placeResult from a placeId
 * @param place_id id of the place
 * @returns placeResult google places api place_result object
 */
function getDetailedPlaceResult(place_id) {
    return JSON.parse(window.localStorage.getItem('places'))
        .find(function(placeResult) {
            if (placeResult.place_id == place_id)
                return true;
            else
                return false;
        });
}

function getAllPlaceResults() {
    return JSON.parse(window.localStorage.getItem('places'));
}

/**
 * Erstellt ein einzelnes Marker Objekt.
 *
 * @param place
 * @param map
 */
function createMarker(place, map) {

    place = getDetailedPlaceResult(place.place_id);

    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    var website = place.website;
    if (website == undefined)
        website = '#';

    var contentString = '<div id="content">'+
                        '<h3>'+place.name+'</h3>'+
                        '<div id="bodyContent">'+
                        '<p></p>'+
                        '<p id="infoLink"><a href="'+website+'">Gehe zur Webseite</a></p>'+
                        '</div>'+
                        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}

$('#bodyContent').on('click', function() {
    pageChange('Who');
})

initializeMap();







