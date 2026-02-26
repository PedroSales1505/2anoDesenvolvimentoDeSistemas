Algoritmo "ATIVIDADEAU7"

Var
mercadorias : vetor[1..3] de caractere
numeros: vetor [1..9] de inteiro
i : inteiro
estoque : vetor[1..3] de inteiro
preco : vetor[1..3] de real

//EXERCICIO 1
Inicio
mercadorias[1] <- "Pão"
mercadorias[2] <- "Queijo"
mercadorias[3] <- "Presunto"
estoque[1] <- 5
estoque[2] <- 5
estoque[3] <- 5
escreval("As mercadorias são ")
para i <- 1 ate 3 faca
escreval(mercadorias[i])
fimPara
para i <- 1 ate 3 faca
escreval("Fale o preço da n",i,"° mercadoria.")
leia(preco[i])
fimPara
para i <- 1 ate 3 faca
escreval("O preço do"," n",i,"°","estoque total é:",preco[i] * estoque[i], ". E a média é ", preco[i] + estoque[i]/3)
fimPara
limpatela
//EXERCICIO 2
para i <- 1 ate 9 faca
escreval ("Digite de 1 até 9")
escreval ("")
leia (numeros[i])
escreval ("")
fimpara
escreval ("Os números em ordem inversa:")
escreval (numeros[9],numeros[8],numeros[7],numeros[6],numeros[5],numeros[4],numeros[3],numeros[2],numeros[1])
Fimalgoritmo