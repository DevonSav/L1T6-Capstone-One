/*
    THIS IS A VERSION WITH ALL DEBUGGING LOGS
    JUST FOR TESTING
*/


// Declare variables
let inputTempType = "none"
let outputTempType = "none"
let inputTemperature = 0
let outputTemperature = 0

// Ask for starting metric and only continue when valid
let validInputType = false
while (!validInputType)
{
    inputTempType = prompt(`In which metric is the temperature you are converting?
C - Celsius
F - Fahrenheit
K - Kelvin`).toLowerCase(); // By converting the input to lowercase we can accept both lower and uppercase values

    switch (inputTempType) {
        case "c":
            console.log("Input type: Celsius");
            validInputType = true;
            break;

        case "f":
            console.log("Input type: Fahrenheit");
            validInputType = true;
            break;

        case "k":
            console.log("Input type: Kelvin");
            validInputType = true;
            break;

        default:
            console.log("ERROR: Input type is invalid!");
            break;
    }
}

// Ask for input temperature and check that it is a number
let validTemp = false
while (!validTemp)
{
    inputTemperature = prompt("Input temperature value: ");
    if (Number.isInteger(Math.round(Number(inputTemperature)))){
        console.log(`Input temperature: ${inputTemperature}`);
        validTemp = true;
    }
}

// Ask for output metric and only continue when valid
let validOutputType = false
while (!validOutputType)
{
    outputTempType = prompt(`To which metric would you like to convert the temperature?
C - Celsius
F - Fahrenheit
K - Kelvin`).toLowerCase();

    switch (outputTempType) {
        case "c":
            console.log("Output type: Celsius");
            validOutputType = true;
            break;

        case "f":
            console.log("Output type: Fahrenheit");
            validOutputType = true;
            break;

        case "k":
            console.log("Output type: Kelvin");
            validOutputType = true;
            break;

        default:
            console.log("ERROR: Output type is invalid!");
            break;
    }
}


// Combine input and output types to form a conversion code
let tempCode = inputTempType + outputTempType
console.log(`TempCode: ${tempCode}`)

switch (tempCode){
    case "cf":  // Celsius to Fahrenheit
        outputTemperature = Number(inputTemperature) * 9/5 + 32;
        console.log(inputTemperature + "\u00B0C is " + outputTemperature.toFixed(3) + "\u00B0F")
        break;

    case "ck":  // Celsius to Kelvin
        outputTemperature = Number(inputTemperature) + 273.15
        console.log(inputTemperature + "\u00B0C is " + outputTemperature.toFixed(3) + "K")
        break;

    case "fc":  // Fahrenheit to Celsius
        outputTemperature = (Number(inputTemperature) - 32) * 5/9
        console.log(inputTemperature + "\u00B0F is " + outputTemperature.toFixed(3) + "\u00B0C")
        break;

    case "fk":  // Fahrenheit to Kelvin
        outputTemperature = (Number(inputTemperature) + 459.67) * 5/9
        console.log(inputTemperature + "\u00B0F is " + outputTemperature.toFixed(3) + "K")
        break;

    case "kc":  // Kelvin to Celsius
        outputTemperature = Number(inputTemperature) - 273.15
        console.log(inputTemperature + "K is " + outputTemperature.toFixed(3) + "\u00B0C")
        break;

    case "kf":  // Kelvin to Fahrenheit
        outputTemperature = Number(inputTemperature) * 9/5 - 459.67
        console.log(inputTemperature + "K is " + outputTemperature.toFixed(3) + "\u00B0F")
        break;

    default:
        console.log("ERROR: Something went terribly wrong when converting!");
        break;
}


// References
// Use of '\u00B0' to correctly display degree symbol: http://gdichicago.com/courses/gdi-featured-js-intro/homework.html#:~:text=Unicode%20Characters%3A%20To%20print%20the,character%20for%20the%20degress%20symbol.
// For rounding values: https://www.w3schools.com/js/js_number_methods.asp