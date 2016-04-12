/**
 * Created by Lukas W on 15.03.2016.
 */

/**
 * This controller holds functionality that is shared
 * by all views of the site
 */

/*
constants
 */
const black = "#111111";
const white = "#FFFFFF";
const red = "#EEAAAA";

/*
 Variables
 */
var challenge = [5, 2, 1, 1];
var code = [0, 0, 0, 0];

var results = 0;


$(document).ready(function()
{
    //.html('index.html'); //.reload()('index.html'); //.open('WhereToEat.html');
    //$('#WhoB').on('click').html('Who.html'); //.open('Who.html');
    //$('#WhatB').on('click').open('What.html');

    /********* OLD SAMPLE CODE FOR BASIC JQUERY AND JAVASCRIPT ****************
     When evaluating button has been clicked

    $('#evaluate').on('click', function (event) {
        var bool = true;
        event.preventDefault(); // Keeps the browser from jumping to the top of the page
        // get values from input fields and save them into array
        var userinput = $('.codein').toArray();
        console.log(userinput);

        // Retrieve the values from the user input array
        // then copy them into code array
        for(var i = 0; i < 4; ++i) {
            if($(userinput[i]).val() != null && $(userinput[i]).val() != ""
                && $(userinput[i]).val() < 7 && $(userinput[i]).val() > 0) {
                code[i] = $(userinput[i]).val();
            } else {
                alert("Wrong input! \n - Allowed numbers     are 1-6 \n - All fields must be set");
                bool = false;
                break;
            }
        }

        if (bool) {
            // Check if values have been copied right
            console.log(code);

            // perform method
            results = evaluateF(code, challenge);

            // Just to check the result
            console.log(results);

            // Fill in the black "perfect" and white "color"
            fillInColors(results[0], results[1]);
        }
    }); */
});


/**
 * Checking for perfect-matches and color-matches
 */ /*
var evaluateF = function(code, challenge) {
    // Array holding black pins
    var perfect_match = 0;
    // Array holding white pins
    var color_match = 0;

    var working_challenge = challenge.slice(0);
    var working_code = code.slice();

    // Do we have a perfect matches?
    working_code.forEach( function(curNum, index) {
        if (working_challenge[index] == curNum) {
            ++perfect_match;

            // delete information -> already evaluated
            working_challenge[index] = 0;
            working_code[index] = 0;
        }
    } );

    // If not check if other matches exist
    working_code.forEach( function(curNum, index) {
        if (curNum != 0) {
            var continueForEach = true;
            working_challenge.forEach( function(curChallNum, challIndex) {

                if (continueForEach && curChallNum == curNum) {
                    ++color_match;

                    // delete information -> already evaluated
                    working_challenge[challIndex] = 0;
                    working_code[index] = 0;

                    // stop evaluating
                    continueForEach = false;
                }
            } );
        }
    } );

    return [perfect_match, color_match];
};

var fillInColors = function(perfectM, colorM) {
    var indicators = $(".match").toArray();

    for (var i = 0; i < 4; ++i) {
        if (perfectM > 0) {
            $(indicators[i]).css("background-color", black);
            --perfectM;
        }
        else {
            if(colorM > 0) {
                $(indicators[i]).css("background-color", white)
                --colorM;
            } else {
                $(indicators[i]).css("background-color", red);
            }
        }

    }

};
*/