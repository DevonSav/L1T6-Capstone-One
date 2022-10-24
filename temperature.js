// Declare variables
let inputTempType = "none"
let outputTempType = "none"
let inputTemperature = 0
let outputTemperature = 0

// Ask for starting metric and only continue when valid by ending the loop
let validInputType = false
while (!validInputType) {
    inputTempType = prompt(`In which metric is the temperature you are converting?
C - Celsius
F - Fahrenheit
K - Kelvin`).toLowerCase(); // Using lowercase we can accept both lower and uppercase characters

    switch (inputTempType) {
        // Only if the input matches one of these is it valid
        case "c":case "f":case "k":
            validInputType = true;
            break;

        default:
            // Tell the user it's invalid and ask again
            console.log("ERROR: Input type is invalid!");
            break;
    }
}

// Ask for input temperature, check that it is a number and only continue when valid
let validTemp = false
while (!validTemp) {
    inputTemperature = prompt("Input a temperature value: ");

    // Input is rounded(only during this check) to be able to use '.isInteger' on it as other number checking methods seem a bit messy
    if (Number.isInteger(Math.round(Number(inputTemperature)))) {
        validTemp = true;
        break;
    } else {
        console.log("ERROR: Input is invalid!");
    }
}

// Ask for output metric and only continue when valid
let validOutputType = false
while (!validOutputType) {
    outputTempType = prompt(`To which metric would you like to convert the temperature?
C - Celsius
F - Fahrenheit
K - Kelvin`).toLowerCase();

    switch (outputTempType) {
        // Like before; Only if the input matches one of these is it valid
        case "c":case "f":case "k":
            validOutputType = true;
            break;

        default:
            console.log("ERROR: Output type is invalid!");
            break;
    }
}


// Combine input and output metric characters to form a "conversion code" for use below
let tempCode = inputTempType + outputTempType

/* Note: the output temperature is rounded to look nice, however the input is not.
 * This is so the user knows that their input was taken/calculated accurately).
 * This might be unnecessary but seemed better for clarity
 */
switch (tempCode) {
    case "cf": // Celsius to Fahrenheit
        // Apply relevant calculations (this is done the same for all cases below just with different math)
        outputTemperature = Number(inputTemperature) * 9 / 5 + 32;
        /* Returns the values in a nice log message.
         * Note: '\u00B0' is the code for the degrees symbol; using the symbol directly means it doesn't display correctly.
         */
        console.log(inputTemperature + "\u00B0C is " + outputTemperature.toFixed(3) + "\u00B0F.")
        break;

    case "ck": // Celsius to Kelvin
        outputTemperature = Number(inputTemperature) + 273.15
        console.log(inputTemperature + "\u00B0C is " + outputTemperature.toFixed(3) + "K.")
        break;

    case "fc": // Fahrenheit to Celsius
        outputTemperature = (Number(inputTemperature) - 32) * 5 / 9
        console.log(inputTemperature + "\u00B0F is " + outputTemperature.toFixed(3) + "\u00B0C.")
        break;

    case "fk": // Fahrenheit to Kelvin
        outputTemperature = (Number(inputTemperature) + 459.67) * 5 / 9
        console.log(inputTemperature + "\u00B0F is " + outputTemperature.toFixed(3) + "K.")
        break;

    case "kc": // Kelvin to Celsius
        outputTemperature = Number(inputTemperature) - 273.15
        console.log(inputTemperature + "K is " + outputTemperature.toFixed(3) + "\u00B0C.")
        break;

    case "kf": // Kelvin to Fahrenheit
        outputTemperature = Number(inputTemperature) * 9 / 5 - 459.67
        console.log(inputTemperature + "K is " + outputTemperature.toFixed(3) + "\u00B0F.")
        break;

    default: // Should this somehow be reached print an error message
        console.log("ERROR: Something went terribly wrong when converting!");
        break;
}


/* REFERENCES
 * 1. Use of '\u00B0' to correctly display degree symbol: http://gdichicago.com/courses/gdi-featured-js-intro/homework.html#:~:text=Unicode%20Characters%3A%20To%20print%20the,character%20for%20the%20degress%20symbol.
 * 2. For rounding values: https://www.w3schools.com/js/js_number_methods.asp
 * 3. How to shorten switch statements: https://www.codegrepper.com/code-examples/javascript/javascript+switch+statement+multiple+cases
 */