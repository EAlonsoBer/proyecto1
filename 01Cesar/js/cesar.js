const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");


const btcifrar = document.getElementById("btcifrar");
const btdescifrar = document.getElementById("btdescifrar");
const copiar2 = document.getElementById("copiar2")
const copiar = document.getElementById("copiar");
const Nlabeldesplazamiento = document.getElementById("labelDesplazamiento")
const labelDesplazamiento = document.getElementById("desplazamiento");
const labelTextarea = document.getElementById("cifrado");
const cifradoCesarButton = document.querySelector('input[value="Cifrado Cesar"]');
cifradoCesarButton.addEventListener('click', function() {
    Nlabeldesplazamiento.style.display = 'block';
    labelDesplazamiento.style.display = 'block'; // Muestra el label al hacer clic en "Cifrado Cesar"
    labelTextarea.style.display= 'block';
    texto.style.display = 'block';
    txt1.style.display = 'block';
    labelClave.style.display = 'none';
    txtClave.style.display = 'none';
    labelTextarea.style.display= 'block';
    labeltextoCifrar.style.display = 'none';
    txtRes.style.display = 'none';
    txt1.style.display = 'block';
    texto.style.display = 'block';
    txtResVig.style.display = 'none';
    copiar.style.display ='block';
    copiar2.style.display = 'none';
    btcifrar.style.display = 'none';
    btdescifrar.style.display = 'none';
});


const txtResVig = document.getElementById("res");
const txt1 = document.getElementById("txt1")
const txtRes = document.getElementById("txt");
const labeltextoCifrar = document.getElementById("labeltextoCifrar");
const txtClave = document.getElementById("txtClave");
const labelClave = document.getElementById("labelClave");
const cifradoViggenereButton = document.querySelector('input[value="Cifrado Viggenere"]');
cifradoViggenereButton.addEventListener('click', function() {
    labelDesplazamiento.style.display = 'none'; // Oculta el label al hacer clic en "Cifrado Viggenere"
    Nlabeldesplazamiento.style.display= 'none';
    labelClave.style.display = 'block';
    txtClave.style.display = 'block';
    labelTextarea.style.display= 'none';
    labeltextoCifrar.style.display = 'block';
    txtRes.style.display = 'block';
    txt1.style.display = 'none';
    texto.style.display = 'none';
    txtResVig.style.display = 'block';
    copiar.style.display ='none';
    copiar2.style.display = 'block';
    btcifrar.style.display = 'block';
    btdescifrar.style.display = 'block';
});


cifradoViggenereButton.addEv


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


