const Cm = document.getElementById("Txt_cm")
const Kg = document.getElementById("Txt_kg")
const calcular = document.getElementById("Mostrar")
const Mostrar = document.getElementById("mostrarImc")
function Calcular() {
    if (Cm.value === "" || Kg.value === "") {
        alert("Por favor llenar los campos");
        return;
    }

    // Convertimos cm a metros dividiendo por 100
    let altura = parseFloat(Cm.value) / 100; 
    let peso = parseFloat(Kg.value);
    
    // Cálculo del IMC
    let imc = peso / (altura * altura);
    
    // Mostramos el resultado con 2 decimales
    calcular.innerText = imc.toFixed(2);

    // Lógica de clasificación
    if (imc < 16) {
        Mostrar.innerText = "Desnutrición Severa";
    } else if (imc <= 18.4) {
        Mostrar.innerText = "Desnutrición Moderada";
    } else if (imc <= 22) {
        Mostrar.innerText = "Bajo Peso";
    } else if (imc <= 24.9) {
        Mostrar.innerText = "Peso Normal";
    } else if (imc <= 29.9) {
        Mostrar.innerText = "Sobrepeso";
    } else if (imc <= 34.9) {
        Mostrar.innerText = "Obesidad Tipo 1";
    } else if (imc <= 39.9) {
        Mostrar.innerText = "Obesidad Tipo 2";
    } else {
        Mostrar.innerText = "Obesidad Tipo 3";
    }
}

function borrar() {
    // Limpiamos los inputs
    document.getElementById('Txt_cm').value = "";
    document.getElementById('Txt_kg').value = "";

    // Limpiamos el texto del resultado
    document.getElementById('mostrarImc').innerText = "";
    document.getElementById("Mostrar").innerText = "";
}