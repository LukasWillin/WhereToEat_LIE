/**
 * Created by Lukas Willin, Emil Sturzenegger, Irina Terribilini
 *
 * This file will hold functionality that is used
 * and affects the 'what'-aspect of the site
 */

console.log("Loaded what.js");

/**
 * Klick Event Listener für Such Button. Sucht nach dem entsprechenden Tag und gibt einen Fehler aus falls keine
 * gefunden worden sind. Ansosten werden die Markers gesetzt.
 */
$("#Search").click(function(event) {

    event.preventDefault();

    // Read value from
    var tags = $("#SearchTag").val();

    // Create array from text
    var tagsArray = tags.split(',').map( function(s) {
        return s.trim();
    })

    console.log(tagsArray);

    // clear values from input
    $("#SearchTag").val("");

    // Hand over tags to the where.js controller
    setMarkers(tags);
});
