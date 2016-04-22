/**
 * Created by Lukas Willin, Emil Sturzenegger, Irina Terribilini
 *
 * This file will hold functionality that is used
 * and affects the 'what'-aspect of the site
 */

console.log("Loaded what.js");

/**
 * Klick Event Listener für Such-Button. Sucht nach dem entsprechenden Tag und gibt einen Fehler aus falls keine
 * gefunden worden sind. Ansosten werden die Markers gesetzt.
 */
$("#Search").click(function(event) {
    event.preventDefault();

    // Lese Wert
    var tags = $("#SearchTag").val();

    // Übergebe tags an where.js
    setMarkers(tags);

    // Wechsle zur where Seite
    pageChange("Where");

});


