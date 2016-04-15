/**
 * Created by Lukas Willin, Emil Sturzenegger, Irina Terribilini
 *
 * This file holds functionality that is shared
 * by all views of the site
 */

/**
 * Executes the other js files and provides them global variables
 */
$('document').ready(function() {

    // Closure Variabeln und lokale Speichervariabeln Initialisierungen
    var map;
    var markers;

    // Lade alle Scripts
    $.getScript("js/nav.js", function(){});
    $.getScript("js/what.js", function(){});
    $.getScript("js/where.js", function(){});
    $.getScript("js/who.js", function(){});

});