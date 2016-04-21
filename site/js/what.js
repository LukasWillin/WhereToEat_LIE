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
<<<<<<< HEAD
<<<<<<< HEAD
//<<<<<<< HEAD
=======
>>>>>>> a39deacc93e31e7e4db50b23a0f7ca5ef0060cb9

=======
>>>>>>> 3090711468d42c16398edd6599be9bd6f548ea9f
    event.preventDefault();

    // Lese Wert
    var tags = $("#SearchTag").val();

    // Bereinige Input
    $("#SearchTag").val("");

    // Übergebe tags an where.js
    setMarkers(tags);
<<<<<<< HEAD
<<<<<<< HEAD
});
<<<<<<< HEAD
/*=======
    // TODO
    //event.preventDefault();
    //var tag = $("#SearchTag").attr('value');

    // Übergebe Tag für andere Funktion
    //setMarkers(tag);
});
>>>>>>> 172e8f64031aa88f5e21e12f5f42f5a2d7d62e30*/
=======
>>>>>>> a39deacc93e31e7e4db50b23a0f7ca5ef0060cb9
=======

    // Wechsle zur where Seite
    pageChange("Where");
});
>>>>>>> 37faf524dee79e717746a53c256d210d59c94f82
=======

    // Wechsle zur where Seite
    pageChange("Where");
});
>>>>>>> 3090711468d42c16398edd6599be9bd6f548ea9f
