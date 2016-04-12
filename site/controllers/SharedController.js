/**
 * Created by Lukas W on 15.03.2016.
 */

/**
 * This controller holds functionality that is shared
 * by all views of the site
 */

$(document).ready(function()
{
    // Load all scripts
    $.getScript("controllers/WhatController.js", function(){});
    $.getScript("controllers/WhereController.js", function(){});
    $.getScript("controllers/WhoController.js", function(){});


});