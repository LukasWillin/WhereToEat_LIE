/**
 * Created by Lukas Willin, Emil Sturzenegger, Irina Terribilini
 *
 * This file holds functionality that is shared
 * by all views of the site
 */

console.log("Loaded app.js");

/**
 * Executes the other js files and provides them global variables
 */
$("document").ready(function() {

    // Lade alle Scripts
    $.getScript("js/what.js", function(){});
    $.getScript("js/nav.js", function(){});

    $.getScript("js/where.js", function(){});
    $.getScript("js/who.js", function(){});

});