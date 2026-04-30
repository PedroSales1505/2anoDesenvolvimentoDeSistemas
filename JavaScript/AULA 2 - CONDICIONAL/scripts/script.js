var nome = "Goku";
var vida = 5;
var moeda = 0;
var dano = 1.35;
var icon = "images/GOKUBASEANIME.gif"

function mostrarPersonagem() {
    document.getElementById("ficha").innerHTML = `
    <img src='${icon}' id='icone' alt=''>
    <h1>🌟 ${nome} </h1>
    <p>💖 ${vida} </p>
    <p>🪙 ${moeda} </p>
    <p>⚔️ ${dano} </p>
    <p>🔝 TRANSFORMAR</p>
`;
}

document.getElementById("vida").addEventListener("click", addVida)
function addVida() {
    vida++
    mostrarPersonagem();
}
document.getElementById("moeda").addEventListener("click", addMoeda)
function addMoeda() {
    var quantoMoedas = confirm("deseja adicionar 1 ou  personalizado (cancelar)?");
    if (quantoMoedas) {
        moeda++;
    } else {
        moeda = Number(prompt("Qual a quantidade de  moedas?"))
    }
    mostrarPersonagem();
}

document.getElementById("dano").addEventListener("click", addDano)
function addDano() {
    var arma = prompt(`Qual arma o ${nome} está segurando? (MAISC)`).toUpperCase();
    //escolha(var)
    switch (arma) {
        case "KAMEHAMEHA":
            alert("Você selecionou KAMEHAMEHA! 12 de dano")
            dano = 5;
            break;
        case "ARCO E FLECHA":
            alert("Você selecionou rajada de energia! 2 de dano");
            dano = 5;
            break
        default:
            alert("Arma não encontrada! Tente novamente!")
    }
    mostrarPersonagem();
}

document.getElementById("transformar").addEventListener("click", addTransformar1)
function addTransformar1() {
    icon = "images/GOKUSSJ1.gif";
    dano= dano*2
    mostrarPersonagem();
}

mostrarPersonagem();