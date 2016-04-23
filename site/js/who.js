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
function listPlaces() {

    if (document.getElementById("whoTableBody") == null) {
        $("#Who table thead").after("" +
            "<tbody id='whoTableBody'></tbody>")
        console.log("Table body created");
    } else {
        console.log("Table body already exists");
    }

    placeResults = getAllPlaceResults();
    console.log(placeResults);
    // Konservative foreach schleife! Ansonsten kann die asynchrone callback methode nicht alle anfragen beantworten
    for (var i = 0; i < placeResults.length; i++) {
        //console.log(placesResults[i]);
        if(placeResults[i]) {
            displayPlaceDetails(placeResults[i]);
        }

    }
};

/**
 * Erstellt eine Liste der gefundenen Orte
 *
 * @param placeResult
 */
function displayPlaceDetails(placeResult){
    if (placeResult) {

        var noData = '<span class="glyphicon glyphicon-ban-circle"></span>';

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

/**
 * Löscht alle vorhergehenden Daten in der Liste
 */
function deletePlacesList() {
    $("#whoTableBody").remove();
    console.log("Table body removed")
};

console.log("Loaded who.js");