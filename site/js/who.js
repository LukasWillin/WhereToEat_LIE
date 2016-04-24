/**
 * Created by Lukas Willin, Emil Sturzenegger, Irina Terribilini
 *
 * This file will hold functionality that is used
 * and affects the 'who'-aspect of the site
 */

/**
 * Erstellt eine Liste der Orte mit genaueren Angaben zu den einzelnen Resultaten
 * @param an array of type placeResult
 */
function listPlaces(places, map) {

    if (document.getElementById("whoTableBody") == null) {
        $("#Who table thead").after("" +
            "<tbody id='whoTableBody'></tbody>")
        console.log("Table body created");
    } else {
        console.log("Table body already exists");
    }
    var service = service = new google.maps.places.PlacesService(map);

    // conservative foreach-loop! Otherwise, the asynchronous callback-method can't answer all the requests.
    for (var i = 0; i < places.length; i++) {
        if(places[i]) {
            displayPlaceDetails(places[i]);
        }
    }
};

/**
 * Erstellt eine Liste der gefundenen Orte
 *
 * @param placeResult
 */
function displayPlaceDetails(placeResult){
    var exists = $("#"+placeResult.place_id);
    console.log(exists);
    if (placeResult) {

        var noData = '<span class="glyphicon glyphicon-ban-circle"></span>';

        var name = placeResult.name;
        if (name == undefined)
            name = noData;

        // Not included in normal result object returned by nearby search
        /*var phone_number = placeResult.formatted_phone_number;
        if (phone_number == undefined)
            phone_number = noData;

        var website = placeResult.website;
        if (website == undefined)
            website = noData;*/

        var rating = placeResult.rating;
        var stars = "";
        if (rating == undefined) {
            rating = noData;
        } else {
            stars += '<div class="rating">';
            for (var i = 0; i < rating - 1; i++) {
                stars += '<i class="glyphicon glyphicon-star"></i>';
            }
            var half = rating % 1;
            if (half > 0.48) {
                stars += '<i class="glyphicon glyphicon-star half"></i>';
            }
            stars += '</div>';
        }

        var placeDescription = $("" +
            "<tr id='"+placeResult.place_id+"'>" +
            "   <td>" + name + "</td>" +
            //"   <td>" + phone_number + "</td>" +
            //"   <td>" + website + "</td>" +
            "   <td>" + rating + "  " + stars + "</td>" +
            "</tr>");

        $("#whoTableBody").append(placeDescription);
    }
};

/**
 * Löscht alle vorhergehenden Daten in der Liste
 */
function deletePlacesList() {
    $("#whoTableBody").remove();
    console.log("Table body removed")
};

console.log("Loaded who.js");