// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del DOM
    const inputTexto = document.querySelector('.cuadro-encriptador');
    const botonEncriptar = document.querySelector('.boton-encriptar');
    const botonDesencriptar = document.querySelector('.boton-desencriptar');
    const botonCopiar = document.querySelector('.link-copiar');
    const resultado = document.querySelector('.resultado');
    const imgZorro = document.querySelector('.img-zorro');
    const textoV1 = document.querySelector('.texto-v1');
    const textoV2 = document.querySelector('.texto-v2');
    const mensaje = document.querySelector('.mensaje');

    // Expresión regular para validar texto en minúsculas y sin acentos
    const regex = /^[a-zñ\s]+$/;

    // Función para encriptar el texto
    function encriptar() {
        let texto = inputTexto.value;
        let textoCifrado = texto
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");

        if (texto.length !== 0 && regex.test(texto)) {
            resultado.value = textoCifrado;
            imgZorro.src = "./asset/Zorro.png"; // Imagen de zorro (encriptado)
            textoV1.textContent = "Texto encriptado con éxito";
            textoV2.textContent = "";
            mensaje.src = "./asset/Pajaro.jpeg"; // Imagen de alerta
        } else {
            alert("El texto debe estar en minúsculas y sin acentos");
            resultado.value = ""; // Limpiar el campo de resultado
            imgZorro.src = "./asset/Zorro.png"; // Imagen por defecto
            textoV1.textContent = "Ningún mensaje fue encontrado";
            textoV2.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            mensaje.src = "./asset/Pajaro.jpeg"; // Imagen de alerta
        }
    }

    // Función para desencriptar el texto
    function desencriptar() {
        let texto = inputTexto.value;
        let textoCifrado = texto
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");

        if (texto.length !== 0 && regex.test(texto)) {
            resultado.value = textoCifrado;
            imgZorro.src = "./asset/Zorro.png"; // Imagen de zorro (desencriptado)
            textoV1.textContent = "Texto desencriptado con éxito";
            textoV2.textContent = "";
            mensaje.src = "./asset/Pajaro.jpeg"; // Imagen de alerta
        } else {
            alert("El texto debe estar en minúsculas y sin acentos");
            resultado.value = ""; // Limpiar el campo de resultado
            imgZorro.src = "./asset/Zorro.png"; // Imagen por defecto
            textoV1.textContent = "Ningún mensaje fue encontrado";
            textoV2.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            mensaje.src = "./asset/Pajaro.jpeg"; // Imagen de alerta
        }
    }

    // Función para copiar el texto al portapapeles
    function copiar() {
        resultado.select();
        document.execCommand('copy');
        alert("Texto copiado al portapapeles");
    }

    // Asignar eventos a los botones
    botonEncriptar.addEventListener('click', encriptar);
    botonDesencriptar.addEventListener('click', desencriptar);
    botonCopiar.addEventListener('click', copiar);
});
