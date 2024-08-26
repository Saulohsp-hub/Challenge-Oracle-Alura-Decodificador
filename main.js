var texto = document.getElementById("texto__digitado");
var textoSaida = document.getElementById('saida').innerHTML;

function encript() {    
    var resultado = texto.value

    resultado = resultado.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, "ai").replace(/o/g, 'ober').replace(/u/g, 'ufat');  
    
    //document.querySelector('.saida').innerHTML = '<textarea readonly id="textSaida">' + resultado + '</textarea>';
    document.getElementById('saida').innerHTML = 
'<textarea readonly id="texto2">' + resultado + '</textarea>' + '<div class="botoes2">' +
'<button class="btncopiar" id="copiar" onclick="copiar()">Copiar</button>' + '<button class="btncopiar" id="copiar" onclick="limpar()">Limpar</button>' + '</div>';
    
    event.preventDefault();
}

function decrip() { 
    var resultado = texto.value; 

    resultado = resultado.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, "a").replace(/ober/g, 'o').replace(/ufat/g, 'u');

    document.getElementById('saida').innerHTML = 
'<textarea readonly id="texto2">' + resultado + '</textarea>' + '<div class="botoes2">' +
'<button class="btncopiar" id="copiar" onclick="copiar()">Copiar</button>' + '<button class="btncopiar" id="copiar" onclick="limpar()">Limpar</button>' + '</div>';

    event.preventDefault();
}

function limpar() {
    document.getElementById('saida').innerHTML = textoSaida;
}
