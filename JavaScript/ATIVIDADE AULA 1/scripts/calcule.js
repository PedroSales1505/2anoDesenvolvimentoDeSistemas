// var NumeroClientes = +NumeroClientes
// var Valor1 = +Valor1
// var Valor2 = +Valor2
// var Valor3 = +Valor3

// console.log(typeof (ValorTotal));
// console.log(typeof (NumeroClientes))

var NumeroClientes= parseInt(prompt ("Quantos clientes estamos atendendo?"))
document.getElementById("NumeroClientes").innerHTML = `<h1> Olá sejam todos bem vindos</h1>`;
var Valor1 = parseInt(prompt ("Qual o primeiro Valor?"))
document.getElementById("Valor1").innerHTML = `<h1> Certo, esse era o primeiro valor ${+Valor1}</h1>`;
var Valor2 = parseInt(prompt ("Qual o segundo Valor?"))
document.getElementById("Valor2").innerHTML = `<h1> Certo, esse era o primeiro valor ${+Valor2}</h1>`;
var Valor3 = parseInt(prompt ("Qual o terceiro Valor?"))
document.getElementById("Valor3").innerHTML = `<h1> Certo, esse era o primeiro valor ${+Valor3}</h1>`;

var ValorTotal = +Valor1+Valor2+Valor3
var ValorSeparado = ValorTotal/NumeroClientes

document.getElementById("ValorTotal").innerHTML = `<h1> ${ValorTotal} </h1>`
document.getElementById("ValorTotal").innerHTML = `<h1> Esse foi o valor total da conta ${+ValorTotal}</h1>`;
document.getElementById("ValorSeparado").innerHTML = `<h1> ${ValorSeparado} </h1>`
document.getElementById("ValorSeparado").innerHTML = `<h1> Certo, agora esse é o valor da conta dividida ${+ValorSeparado}</h1>`;

