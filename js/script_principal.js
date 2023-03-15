const ingresarTexto = document.querySelector(".ingresar__texto");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(ingresarTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    ingresarTexto.value = "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.trim().toLowerCase();
    for( let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
        alertEncriptar();   
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
        alertDesencriptar();     
    }
    return stringDesencriptada;
}

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alertCopiar();
}

//Animaciones
const info = document.querySelector(".info");
info.classList.add('animate__animated', 'animate__flash');
info.style.setProperty('--animate-duration', '5s');

const logo = document.querySelector(".header__logo");
logo.classList.add('animate__animated', 'animate__fadeInUp');
logo.style.setProperty('--animate-duration', '2s');

const section1 = document.querySelector(".section__1");
section1.classList.add('animate__animated', 'animate__fadeIn');
section1.style.setProperty('--animate-duration', '3s');

const section2 = document.querySelector(".section__2");
section2.classList.add('animate__animated', 'animate__fadeIn');
section2.style.setProperty('--animate-duration', '3s');

const footer = document.querySelector(".footer");
footer.classList.add('animate__animated', 'animate__slideInRight');
footer.style.setProperty('--animate-duration', '2s');

const botonNightMode = document.querySelector(".boton__night__mode");
botonNightMode.classList.add('animate__animated', 'animate__fadeIn');
botonNightMode.style.setProperty('--animate-duration','3s');

//Night-Mode
function nightMode(){
    const fondo = document.body;
    fondo.classList.toggle("night__mode");
    const ingresarTexto = document.querySelector(".ingresar__texto");
    ingresarTexto.classList.toggle("night__mode__ingresar__texto");
    const cajaMensaje = document.querySelector(".caja__mensaje");
    cajaMensaje.classList.toggle("night__mode__mensaje");
    const footer = document.querySelector(".footer");
    footer.classList.toggle("night__mode__footer");
    const info = document.querySelector(".info");
    info.classList.toggle("night__mode__info");
}
