const ingresarTexto = document.querySelector(".ingresar-texto");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(ingresarTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    ingresarTexto.value = "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for( let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }         
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(ingresarTexto.value);
    mensaje.value = textoEncriptado;
    ingresarTexto.value = ""
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i","imes"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for( let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }         
    }
    return stringDesencriptada;
}

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Copiaste el texto :)");
}

//Animaciones
const info = document.querySelector(".info");
info.classList.add('animate__animated', 'animate__flash');
info.style.setProperty('--animate-duration', '5s');

const logo = document.querySelector(".logo-alura");
logo.classList.add('animate__animated', 'animate__fadeInUp');
logo.style.setProperty('--animate-duration', '2s');

const section1 = document.querySelector(".section-1");
section1.classList.add('animate__animated', 'animate__fadeIn');
section1.style.setProperty('--animate-duration', '3s');

const section2 = document.querySelector(".section-2");
section2.classList.add('animate__animated', 'animate__fadeIn');
section2.style.setProperty('--animate-duration', '3s');

const footer = document.querySelector(".footer");
footer.classList.add('animate__animated', 'animate__slideInRight');
footer.style.setProperty('--animate-duration', '2s');

const botonNightMode = document.querySelector(".boton-night-mode");
botonNightMode.classList.add('animate__animated', 'animate__fadeIn');
botonNightMode.style.setProperty('--animate-duration','3s');

//Night-Mode
function nightMode(){
    const fondo = document.body;
    fondo.classList.toggle("night-mode");
    const ingresarTexto = document.querySelector(".ingresar-texto");
    ingresarTexto.classList.toggle("night-mode-ingresar-texto");
    const cajaMensaje = document.querySelector(".caja-mensaje");
    cajaMensaje.classList.toggle("night-mode-mensaje");
    const footer = document.querySelector(".footer");
    footer.classList.toggle("night-mode-footer");
    const info = document.querySelector(".info");
    info.classList.toggle("night-mode-info");
}
