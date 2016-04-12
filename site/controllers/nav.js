/**
 * Created by Emil S on 12.04.2016.
 */

/**
 * This controller will hold functionality that is used
 * and affects the navigation of the site
 */

$("li > a").click(function() {
    var myClass = this;
    var myClassAttr = myClass.className;

    $("main > div").forEach(function(e) {
        if(e.attr("id") === myClassAttr && !e.hasClass("active")) {
            e.addClass("active");
        }
        else {
            e.removeClass("active");
        }

    })
});