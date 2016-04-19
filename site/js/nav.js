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
    event.preventDefault();
    console.log(this)
    var myClass = this;
    var myClassAttr = myClass.className
        .split(" ")
        .map(function(stringElement) { return stringElement.trim()})[0];

    var screens = $("main > section").get();

    if(!$("li."+myClassAttr).hasClass("active")) {
        // Toggelt Navigations Link Styles
        $("ul.nav > li").removeClass("active");
        $("ul.nav > li."+myClassAttr).addClass("active");

        //console.log($("li."+myClassAttr).hasClass("active"));

        // Toggelt Sektionen
        $("section").removeClass("active");
        $("section").addClass("inactive");
        $("section#"+myClassAttr).removeClass("inactive").addClass("active");
    }
});