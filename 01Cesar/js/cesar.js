const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");

const labelDesplazamiento = document.getElementById("desplazamiento");
const labelTextarea = document.getElementById("cifrado");
const cifradoCesarButton = document.querySelector('input[value="Cifrado Cesar"]');
cifradoCesarButton.addEventListener('click', function() {
    labelDesplazamiento.style.display = 'block'; // Muestra el label al hacer clic en "Cifrado Cesar"
    labelTextarea.style.display= 'block';
});

const cifradoViggenereButton = document.querySelector('input[value="Cifrado Viggenere"]');
cifradoViggenereButton.addEventListener('click', function() {
    labelDesplazamiento.style.display = 'none'; // Oculta el label al hacer clic en "Cifrado Viggenere"
});

// Resto de tu código para el cifrado Cesar y manejo de eventos...

function cifradoCesar(textoIngresado, valorDesplazamiento, cifrar = true) {
    return textoIngresado.split('').map(c => {
        let mayus = (c === c.toUpperCase()) ? true : false;
        let valorEntero = c.toLowerCase().charCodeAt(0);

        // Cifrado
        if (valorEntero >= 97 && valorEntero <= 122) {
            if (valorEntero + valorDesplazamiento > 122) {
                 valorEntero = 97 + (valorEntero - 122) + valorDesplazamiento - 1;
            } else {
                valorEntero = valorEntero + valorDesplazamiento;
            }
        }
            // Cifrar números
        else if(valorEntero >= 48 && valorEntero <= 57) {
            valorEntero = (valorEntero - 48 + valorDesplazamiento) % 10 + 48;
        }
        let resultado = String.fromCharCode(valorEntero);
        return mayus ? resultado.toUpperCase() : resultado;
    }).join('');
}

function DescifradoCesar(textoIngresado, valorDesplazamiento, cifrar = true){
    return textoIngresado.split('').map(c => {
        let mayus = (c === c.toUpperCase()) ? true : false;
        let valorEntero = c.toLowerCase().charCodeAt(0);
        // Descifrado
        if (valorEntero >= 97 && valorEntero <= 122) {
            if (valorEntero - valorDesplazamiento < 97) {
                valorEntero = 122 - (97 - (valorEntero - valorDesplazamiento)) + 1;
            } else {
                        valorEntero = valorEntero - valorDesplazamiento;
            }
        }
        // Descifrar números
        else if (valorEntero >= 48 && valorEntero <= 57) {
                valorEntero = (valorEntero - 48 - valorDesplazamiento + 10) % 10 + 48;
        }
        let resultado = String.fromCharCode(valorEntero);
        return mayus ? resultado.toUpperCase() : resultado;
    }).join('');
}

function cifrar() {
    const textoIngresado = texto.value;
    const valorDesplazamiento = parseInt(desplazamiento.value);
    const textoCifradoResultado = cifradoCesar(textoIngresado, valorDesplazamiento);
    textoCifrado.value = textoCifradoResultado;
}

function descifrar() {
    const textoCifradoIngresado = textoCifrado.value;
    const valorDesplazamiento = parseInt(desplazamiento.value);
    const textoDescifradoResultado = DescifradoCesar(textoCifradoIngresado, valorDesplazamiento, false);
    textoCifrado.value = textoDescifradoResultado;
}

texto.addEventListener("input", cifrar);
desplazamiento.addEventListener("input", cifrar);


