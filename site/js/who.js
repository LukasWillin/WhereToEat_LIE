/**
 * Created by Lukas Willin, Emil Sturzenegger, Irina Terribilini
 *
 * This file will hold functionality that is used
 * and affects the 'who'-aspect of the site
 */

console.log("Attempt to load who.js");

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

    // conservative foreach-loop! Otherwise, the asynchronous callback-method can't answer all the requests.
    for (var i = 0; i < places.length; i++) {
        console.log(places[i]);
        if(places[i]) {
            service = new google.maps.places.PlacesService(map);
            service.getDetails({placeId:places[i].place_id}, displayPlaceDetails);
        }

    }
};

function displayPlaceDetails(placeResult){
    if (placeResult) {

        var noData = '<span class="glyphicon glyphicon-ban-circle"></span>' + ' Äxcüsi';

        // TODO: Use an icon instead of 'Äxcüsi'
        var name = placeResult.name;
        if (name == undefined)
            name = noData;

        var phone_number = placeResult.formatted_phone_number;
        if (phone_number == undefined)
            phone_number = noData;

        var website = placeResult.website;
        if (website == undefined)
            website = noData;

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
            "<tr>" +
            "   <td>" + name + "</td>" +
            "   <td>" + phone_number + "</td>" +
            "   <td>" + website + "</td>" +
            "   <td>" + rating + "  " + stars + "</td>" +
            "</tr>");
        $("#whoTableBody").append(placeDescription);
        console.log("appended");
    }
};

function deletePlacesList() {
    $("#whoTableBody").remove();
    console.log("Table body removed")
};

console.log("Loaded who.js");