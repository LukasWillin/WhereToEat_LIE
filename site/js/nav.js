/**
 * Created by Lukas Willin, Emil Sturzenegger, Irina Terribilini
 *
 * This file will hold functionality that is used
 * and affects the navigation of the site
 */

console.log("Loaded nav.js");

/**
 * Klick Event Listener für Navigationselemente. Verbirgt nicht aktive Elemente mit CSS Visibility oder zeigt sie an.
 */
$("nav ul > li").click(function(event) {
    var myClass = this;
    var myClassAttr = myClass.className;
    var screens = $("main > section").get();

    // Toggelt Navigations Link Styles
    $("ul.nav > li").removeClass("active");
    $("ul.nav > li."+myClassAttr).addClass("active");

    // Toggelt Sektionen
    $("section").removeClass("active");
    $("section").addClass("inactive");
    $("section#"+myClassAttr).removeClass("inactive").addClass("active");
});