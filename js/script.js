var palavras = [
    "ABACATE","ABACAXI","ACEROLA","AÇAÍ","ARAÇA","BACABA","BACURI",
    "BANANA","CAJÁ","CAJÚ","CARAMBOLA","CUPUAÇU","GRAVIOLA","GOIABA","JABUTICABA",
    "JENIPAPO","MAÇÃ","MANGABA","MANGA","MARACUJÁ","MURICI","PEQUI","PITANGA",
    "PITAYA","SAPOTI","TANGERINA","UMBU","UVA","UVAIA"];

var palavrasMinusculas = palavras.map(function(palavra) 
{return palavra.toLowerCase();});
var palavraEscolhida = palavrasMinusculas[Math.floor(Math.random() * palavrasMinusculas.length)];
var letrasCorretas = [];

console.log(palavraEscolhida);

var palavraExibida = document.getElementById("palavraExibida");
var tentativasRestantesElement = document.getElementById("tentativasRestantes");
var forcaImagem = document.getElementById("forca-imagem");
var tentativaInput = document.getElementById("tentativaInput");
var mensagem = document.getElementById("mensagem");
var verificar = document.getElementById("verificar");
var reiniciarJogo = document.getElementById("jogar-novamente");
palavraExibida.textContent = "_".repeat(palavraEscolhida.length);
tentativasRestantesElement.textContent = 5;

function verificarTentativa() {
    var tentativa = tentativaInput.value.toLowerCase();
    
    if (tentativa.length != 1) {
        mensagem.textContent = "Informe apenas uma letra.";
        return;
    }

    if (letrasCorretas.includes(tentativa)) {
        mensagem.textContent = "Você já tentou essa letra.";
        return;
    }

    if (palavraEscolhida.includes(tentativa)) {
        letrasCorretas.push(tentativa);

        var novaPalavraExibida = "";
        for (var i = 0; i < palavraEscolhida.length; i++) {
            if (letrasCorretas.includes(palavraEscolhida[i])) {
                novaPalavraExibida += palavraEscolhida[i];
            } else {
                novaPalavraExibida += "_";
            }
        }
        palavraExibida.textContent = novaPalavraExibida;

        if (novaPalavraExibida == palavraEscolhida) {
            mensagem.textContent = "Parabéns, você venceu!";
            tentativaInput.disabled = true;
            reiniciarJogo.style.display = "flex";
            mensagem.style.color = "rgb(0, 217, 0)";
            verificar.disabled = true;
        }
    } 
    else {
        var tentativasRestantes = parseInt(tentativasRestantesElement.textContent) - 1;
        tentativasRestantesElement.textContent = tentativasRestantes;
        
        if (tentativasRestantes == 0) {
            mensagem.textContent = "Você perdeu! A palavra era: " + palavraEscolhida;
            mensagem.style.color = "rgb(255, 98, 98)";
            forcaImagem.src = "img/forca07.png";
            tentativaInput.disabled = true;
            reiniciarJogo.style.display = "flex";
            verificar.disabled = true;
        } 
        else if(tentativasRestantes == 1){
            mensagem.textContent = "Tente novamente.";
            forcaImagem.src = "img/forca06.png";
        }
        else if(tentativasRestantes == 2){
            mensagem.textContent = "Tente novamente.";
            forcaImagem.src = "img/forca05.png";
        }
        else if(tentativasRestantes == 3){
            mensagem.textContent = "Tente novamente.";
            forcaImagem.src = "img/forca04.png";
        }
        else if(tentativasRestantes == 4){
            mensagem.textContent = "Tente novamente.";
            forcaImagem.src = "img/forca02.png";
        }
        else if(tentativasRestantes == 5){
            mensagem.textContent = "Tente novamente.";
            forcaImagem.src = "img/forca01.png";
        }
    }

    tentativaInput.value = "";
}

function reiniciarPagina() {
    location.reload(); 
}