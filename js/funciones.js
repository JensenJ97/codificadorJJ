//funcion capturar texto 
function capturarTexto(){
    let input = document.querySelector("#input");
    let texto = input.value.toString() 
    return texto
};

function codificarTexto(texto){
    if(texto.length > 0){
        var textoCodificado = texto.toLowerCase().replace(/e/g,'enter').replace(/i/gm,'imes').replace(/a/g, 'ai').replace(/o/g,'ober').replace(/u/g,'ufat')
        return textoCodificado;
    } else {
        alert("olvido ingresar texto para codificar")   
    }
};

function decodificarTexto(texto){
    if(texto.length > 0){
        var textoDecodificado = texto.toLowerCase().replace(/enter/g,'e').replace(/imes/gm,'i').replace(/ai/g, 'a').replace(/ober/g,'o').replace(/ufat/g,'u')
        return textoDecodificado;
    } else {
        alert("olvido ingresar texto para decodificar")
    }
};



//Funcion boton codificar
var botonCodificar = document.querySelector("#boton-codificar");
botonCodificar.addEventListener("click",function(event){
    event.preventDefault();
    var output = document.querySelector("#output")
    var form = document.querySelector("form")

    var error = document.querySelector("#mensaje")
    var texto = capturarTexto();
    var textoCodificado = codificarTexto(texto);
    if(texto.length > 0) {
        output.innerHTML = textoCodificado
        error.classList.remove("mensaje-error")
        form.reset();
    } else {
       error.classList.add("mensaje-error")
    }   
});

//Funcion boton decodificar 
var botonDecodificar = document.querySelector("#boton-decodificar");
botonDecodificar.addEventListener("click",function(event){
    event.preventDefault();
    var output = document.querySelector("#output")
    var form = document.querySelector("form")
   
    var error = document.querySelector("#mensaje")
    var texto = capturarTexto();
    let textoDecodificado = decodificarTexto(texto);
    if(texto.length > 0) {
        output.innerHTML = textoDecodificado
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