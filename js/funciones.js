//funcion capturar texto 
function capturarTexto(){
    let input = document.querySelector("#input");
    let texto = input.value.toString() 
    return texto
};

function encriptarTexto(texto){
    if(texto.length > 0){
        var textoEncriptado = texto.toLowerCase().replace(/e/g,'enter').replace(/i/gm,'imes').replace(/a/g, 'ai').replace(/o/g,'ober').replace(/u/g,'ufat')
        return textoEncriptado;
    } else {
        alert("olvido ingresar texto para encriptar")   
    }
};

function desencriptarTexto(texto){
    if(texto.length > 0){
        var textoDesencriptado = texto.toLowerCase().replace(/enter/g,'e').replace(/imes/gm,'i').replace(/ai/g, 'a').replace(/ober/g,'o').replace(/ufat/g,'u')
        return textoDesencriptado;
    } else {
        alert("olvido ingresar texto para desencriptar")
    }
};



//Funcion boton encriptar
var botonEncriptar = document.querySelector("#boton-encriptar");
botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var output = document.querySelector("#output")
    var form = document.querySelector("form")

    var error = document.querySelector("#mensaje")
    var texto = capturarTexto();
    var textoEncriptado = encriptarTexto(texto);
    if(texto.length > 0) {
        output.innerHTML = textoEncriptado
        error.classList.remove("mensaje-error")
        form.reset();
    } else {
       error.classList.add("mensaje-error")
    }   
});

//Funcion boton desencriptar
var botonDesencriptar = document.querySelector("#boton-desencriptar");
botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var output = document.querySelector("#output")
    var form = document.querySelector("form")
   
    var error = document.querySelector("#mensaje")
    var texto = capturarTexto();
    let textoDesencriptado = desencriptarTexto(texto);
    if(texto.length > 0) {
        output.innerHTML = textoDesencriptado
        error.classList.remove("mensaje-error")
        form.reset();            
    } else {
       error.classList.add("mensaje-error")
    } 
});


//funcion boton copiar
var botonCopiar = document.querySelector("#boton-copiar");
botonCopiar.addEventListener("click",function(event){
    var output = document.querySelector("#output");
    var textoCopiado = document.getElementById("output");
    textoCopiado.select();
    document.execCommand("copy");
    alert ("mensaje copiado")
    output.textContent=""
   
});