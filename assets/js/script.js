let modal = document.getElementById("modalEncriptadorNormal");
let btn = document.getElementById("botaoModalEncriptadorNormal");
let span = document.getElementsByClassName("fecharModal")[0];
let textoInicial = document.getElementById("textoParaConversao");
let textoFinal = document.getElementById("textoFinal");

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function criptografar (){
  var texto = textoInicial.value;
  
  if (/[A-Z-À-Ú-à-ù-0-9]/.test(texto)) {
    textoFinal.innerHTML = 'Parece que você usou letras minúsculas, acentos ou números, tente corrigir o texto usando só letras minúsculas, sem acento e criptografe novamente!'
  } else if (textoInicial.value === '') {
    textoFinal.innerHTML = 'Parece que você esqueceu de digitar algo, tente novamente!'
  } else {
    var textoEncrip = texto.replace(/e/g, "enter");
    var textoEncrip = textoEncrip.replace(/i/g, "imes");
    var textoEncrip = textoEncrip.replace(/a/g, "ai");
    var textoEncrip = textoEncrip.replace(/o/g, "ober");
    var textoEncrip = textoEncrip.replace(/u/g, "ufat");

    textoFinal.innerHTML = `${textoEncrip}`;
    textoInicial.value = '';
    
  }
}

function descriptografar (){
  var texto = textoInicial.value;
  
  if (/[A-Z-À-Ú-à-ù-0-9]/.test(texto)) {
    textoFinal.innerHTML = 'Parece que você usou letras minúsculas, acentos ou números, tente corrigir o texto usando só letras minúsculas, sem acento e criptografe novamente!'
  } else if (textoInicial.value === '') {
    textoFinal.innerHTML = 'Parece que você esqueceu de digitar algo, tente novamente!'
  } else {
    var textoDescrip = texto.replace(/enter/g, "e");
    var textoDescrip= textoDescrip.replace(/imes/g, "i");
    var textoDescrip= textoDescrip.replace(/ai/g, "a");
    var textoDescrip= textoDescrip.replace(/ober/g, "o");
    var textoDescrip= textoDescrip.replace(/ufat/g, "u");

    textoFinal.innerHTML = `${textoDescrip}`;
    textoInicial.value = '';
  }
}

function copiarTexto(){
  var copiarTexto = document.getElementById("textoFinal");
  copiarTexto.select();
  copiarTexto.setSelectionRange(0, 9999999);

  navigator.clipboard.writeText(copiarTexto.value);
  alert("Texto copiado")
}

function limparTexto(){
  document.getElementById("textoFinal").innerHTML = ''
}


/*
var modal = pegarValorClicado()
var btn = pegarValorClicado()
var span = document.getElementsByClassName("fecharModal")[0];


function pegarValorClicado(valor) {
    console.log(valor)
    return toString(document.getElementById(valor))
  }
  */
