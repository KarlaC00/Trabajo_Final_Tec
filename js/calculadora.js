function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
      alert("Por favor, ingrese valores válidos para peso y altura.");
      return;
    }

    var imc = peso / (altura ** 2);
    
    document.getElementById("resultadoIMC").textContent = imc.toFixed(2);
  }