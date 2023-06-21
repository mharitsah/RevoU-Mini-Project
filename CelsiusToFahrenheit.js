function validateInput(input) {
    input.value = input.value.replace(/[^0-9.-]/g, ''); // Hanya memperbolehkan angka, tanda minus, dan titik desimal
}

function convertToCelsius() {
    var celsius = parseFloat(document.getElementById("inputCelsius").value);
    if (isNaN(celsius)) {
        alert("Harap isi nilai input dengan angka");
        return;
    }
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("outputFahrenheit").value = fahrenheit;

    var calculation = "Fahrenheit = (Celsius (°C) * 9/5) + 32\n"
    calculation += "Fahrenheit = (" + celsius + " * 9/5) + 32\n"
    calculation += "Fahrenheit = " + fahrenheit + "°F";
    document.getElementById("calculation").value = calculation;
}

function reset() {
    document.getElementById("inputCelsius").value = "";
    document.getElementById("outputFahrenheit").value = "";
    document.getElementById("calculation").value = "";
}

function reverse() {
    window.location.href = "FahrenheitToCelcius.html";
}