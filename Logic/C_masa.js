const Cm = document.getElementById("Txt_cm")
const Kg = document.getElementById("Txt_kg")
const calcular = document.getElementById("Mostrar")
const Mostrar = document.getElementById("mostrarImc")
function Calcular() {
    if (Cm.value === "" || Kg.value === "") {
        alert("Por favor llenar los campos")
        return;
    }

    let altura = parseFloat(Cm.value)
    let peso = parseFloat(Kg.value)
    let imc = peso / (altura * altura)
    calcular.innerText = imc

    if (imc <= 16) {
        Mostrar.innerText = " Desnutricion Severa"
    }else if(imc <= 18.4){
        Mostrar.innerText = " Desnutricion Moderada"
    }else if(imc <= 22){
        Mostrar.innerText = " Bajo Peso"
    }else if(imc <= 24.9){
        Mostrar.innerText = " Peso Normal"
    }else if(imc <=29.9){
        Mostrar.innerText = " SobrePeso"
    }else if(imc <= 34.9){
        Mostrar.innerText = " Obesidad Tipo: 1"
    }else if(imc <= 39.9){
        Mostrar.innerText = " Obesidad Tipo: 2"
    }else if(imc > 40){
        Mostrar.innerText = " Obesidad Tipo: 3"
    }

}

function borrar() {
    // Limpiamos los inputs
    document.getElementById('Txt_cm').value = "";
    document.getElementById('Txt_kg').value = "";

    // Limpiamos el texto del resultado
    document.getElementById('mostrarImc').innerText = "";
    document.getElementById("Mostar").innerText = "";
}