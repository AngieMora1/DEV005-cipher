import cipher from "./cipher.js";
//Elementos del DOM 
const resultadoMensaje = document.getElementById("resultado-mensaje");
const btnCifrar = document.getElementById("btn-cifrar");
const btnDescifrar = document.getElementById("btn-descifrar");

// Hasta aqui solo se ha declarado y asignado la variable
//Funciones que interactuan con el DOM
function mostrarCifrado() {
  const mensajeUsuario = document.getElementById("mensaje-usuario").value;
  const desplazamiento = document.getElementById("desplazamiento-usuario").value;

  resultadoMensaje.value = cipher.encode(desplazamiento, mensajeUsuario);
}
function mostrarDescifrado() {
  const mensajeUsuario = document.getElementById("mensaje-usuario").value;
  const desplazamiento = document.getElementById(
    "desplazamiento-usuario"
  ).value;

  resultadoMensaje.value = cipher.decode(desplazamiento, mensajeUsuario);
}
//Eventos del DOM(EJ.CLICK)
btnCifrar.addEventListener("click", mostrarCifrado);
btnDescifrar.addEventListener("click", mostrarDescifrado);

