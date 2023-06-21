function validateInput(input) {
    input.value = input.value.replace(/[^0-9.-]/g, ''); // Hanya memperbolehkan angka, tanda minus, dan titik desimal
}

function convertToCelsius() {
    var fahrenheit = parseFloat(document.getElementById("inputFahrenheit").value);
    if (isNaN(fahrenheit)) {
        alert("Harap isi nilai input dengan angka");
        return;
    }
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("outputCelsius").value = celsius;

    var calculation = "Celsius = (Fahrenheit (°F) - 32) * 5/9\n";
    calculation += "Celsius = (" + fahrenheit + " - 32) * 5/9\n";
    calculation += "Celsius = " + celsius + "°C";
    document.getElementById("calculation").value = calculation;
}

function reset() {
    document.getElementById("inputFahrenheit").value = "";
    document.getElementById("outputCelsius").value = "";
    document.getElementById("calculation").value = "";
}

function reverse() {
    window.location.href = "CelsiusToFahrenheit.html";
}