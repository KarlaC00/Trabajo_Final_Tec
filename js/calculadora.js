function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    // Verifica que los valores sean válidos
    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
      alert("Por favor, ingrese valores válidos para peso y altura.");
      return;
    }

    // Calcula el IMC
    var imc = peso / (altura ** 2);
    
    // Muestra el resultado en la página
    document.getElementById("resultadoIMC").textContent = imc.toFixed(2);
  }