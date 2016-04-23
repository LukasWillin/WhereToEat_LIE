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

    // read value
    var tags = $("#SearchTag").val();
    var radius = $('#Radius').slider('getValue');

    // Handover tags and radius to where.js
    setMarkers(tags, radius);

    // Switch to where-side
    pageChange("Where");

});

/**
 * Erstellt aus einem Text Input eine Radius Slider Instanz.
 *
 * @param id die ID des Elementes
 */
function createSlider(id) {
    $('#'+id).slider();
}

createSlider("Radius");