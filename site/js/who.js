/**
 * Created by Lukas Willin, Emil Sturzenegger, Irina Terribilini
 *
 * This file will hold functionality that is used
 * and affects the 'who'-aspect of the site
 */

console.log("Attempting to load who.js");

/**
 * Erstellt eine Liste der Orte mit genaueren Angaben zu den einzelnen Resultaten
 * @param markers Ein Array mit Places Objekten
 */
function listMarkers(places) {

    //See walking the dom

    places.forEach( function(marker) {
        var det = marker.getDetails();
        var placeDescription = $("" +
            "<tr>" +
            "   <td>"+det.name+"</td>" +
            "   <td>"+det.formatted_phone_number+"</td>" +
            "   <td>"+det.website+"</td>" +
            "   <td>"+det.rating+"</td>" +
            "</tr>");
        $("#whoTableBody > tr").last().after(placeDescription);
    });
}




console.log("Loaded who.js")