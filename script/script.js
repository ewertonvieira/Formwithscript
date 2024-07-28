"use strict"

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('somaForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Captura de dados do formulario
        let num1 = document.getElementById('num1').value;
        let num2 = document.getElementById('num2').value;

        // Conversao devido ao formulario capturar 'type: text'
        num1 = Number(num1);
        num2 = Number(num2);

        // 
        let soma = num1 + num2

        // Mostra o resultado no html
        document.getElementById('resultado').textContent = 'A soma é: ' + soma;
    });
});