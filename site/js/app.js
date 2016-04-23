/**
 * Created by Lukas Willin, Emil Sturzenegger, Irina Terribilini
 *
 * This file holds functionality that is shared
 * by all views of the site
 */

console.log("Loaded app.js");

/**
 * Führt alle js Dateien aus, sobald der DOM geladen ist und setzt Storage Variabeln
 */
$("document").ready(function() {

    // load all scripts
    $.getScript("js/what.js", function(){});
    $.getScript("js/nav.js", function(){});
    $.getScript("js/where.js", function(){});
    $.getScript("js/who.js", function(){});

});