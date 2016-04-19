/**
 * Created by Lukas Willin, Emil Sturzenegger, Irina Terribilini
 */

/**
 * This controller will hold functionality that is used
 * and affects the navigation of the site
 */

/**
 * Click event listener für navigations elemente. Verbirgt nicht aktive elemente mit CSS visibility oder zeigt sie an.
 */
$("nav ul > li").click(function() {
    var myClass = this;
    var myClassAttr = myClass.className;

    console.log("clicked");

    var screens = $("main > section").get();

    $("section").removeClass("active");
    $("section").addClass("inactive");
    $("section#"+myClassAttr).removeClass("inactive").addClass("active");
});