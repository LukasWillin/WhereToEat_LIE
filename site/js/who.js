/**
 * Created by Lukas Willin, Emil Sturzenegger, Irina Terribilini
 *
 * This file will hold functionality that is used
 * and affects the 'who'-aspect of the site
 */

console.log("Attempting to load who.js");

/**
 * Erstellt eine Liste der Orte mit genaueren Angaben zu den einzelnen Resultaten
 * @param an array of type placeResult
 */
function listMarkers(places) {

    $("#whoTableBody").remove();

    $("#Who table thead").after("" +
        "<tbody id='whoTableBody'></tbody>")

    places.forEach( function(place) {

        var placeDescription = $("" +
            "<tr>" +
            "   <td>"+place.name+"</td>" +
            "   <td>"+place.formatted_phone_number+"</td>" +
            "   <td>"+place.website+"</td>" +
            "   <td>"+place.rating+"</td>" +
            "</tr>");
        $("#whoTableBody").append(placeDescription);
    });
}




console.log("Loaded who.js")