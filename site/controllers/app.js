/**
 * Created by Lukas Willin, Emil Sturzenegger, Irina Terribilini
 */

/**
 * This controller holds functionality that is shared
 * by all views of the site
 */

$('document').ready(function() {

    // Definitions (global variables)


    // Load all scripts
    $.getScript("controllers/nav.js", function(){});
    $.getScript("controllers/what.js", function(){});
    $.getScript("controllers/where.js", function(){});
    $.getScript("controllers/who.js", function(){});

});