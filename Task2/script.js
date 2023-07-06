function convertTemperature() {
    var input = document.getElementById("temperatureInput").value;
    var scale = document.getElementById("scaleInput").value;
    var resultElement = document.getElementById("result");
  
    if (scale === "celsius") {
      var convertedTemperature = (input * 9/5) + 32;
      resultElement.textContent = input + " °C = " + convertedTemperature + " °F";
    } else if (scale === "fahrenheit") {
      var convertedTemperature = (input - 32) * 5/9;
      resultElement.textContent = input + " °F = " + convertedTemperature + " °C";
    }
  }
  