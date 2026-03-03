Algoritmo "Simulado Aula 8"
Var

v1,v2 : vetor[1..15] de inteiro
opcao, numero,numero2 , i : inteiro
num1, num2, resultado: Real
operacao, nome: Caractere
nomes : vetor[1..10] de caractere
notas : vetor [1..8] de inteiro
aluno: vetor [1..8] de caractere
MediaTurma: real
Media: vetor [1..8] de real
v: logico

Inicio
// Exercicio 1

v <- verdadeiro
Enquanto v faca
para i <- 1 ate 8 faca
Escreval ("Insira o nome do aluno")
Leia (aluno[i])
fimpara
Limpatela
para i <- 1 ate 8 faca
Escreval ("insira a nota dos alunos")
Leia (notas [i])
fimpara
MediaTurma<- (notas [i]/3)
Escreval ("Esta é a média da sala:",MediaTurma)
Escreval ("")
Escreval ("Agora vamos ver as médias de cada aluno")
Escreval ("")
para i <- 1 ate 8 faca
Escreval ("Esta é a média de:",aluno[i])
Media[i]<- (notas [i]/3)
Escreval ("A média dele:",Media[i] )
fimPara
para i <- 1 ate 8 faca
se (Media [i] >=7) entao
escreval (aluno[i], " aprovado")
 senao
escreval (aluno[i], " reprovado")
fimSe
fimPara
v <- falso
FimEnquanto

// Exercicio 2

escreval("Mande 15 numeros."
para i <- 1 ate 15 faca
)
leia(v1[i])


fimPara
escreval("Mande mais 15 numeros.")
para i <- 1 ate 15 faca
leia(v2[i])

fimPara

para i <- 1 ate 15 faca
se(v1[i] = v2[i]) entao
 escreval("Os numeros iguais são ", v1[i],"e",v2[i])

fimSe
fimPara

// Exercicio 3

para i <- 1 ate 10 faca
escreval("Mande 10 nomes")
leia(nomes[i])

fimpara
escreval("coloque mais outro nome")
leia(nome)
para i <- 1 ate 10 faca
se(nomes[i] = nome )entao
escreval("achei")
fimse
fimpara

// Exercicio 4

 Escreval("Digite o primeiro número: ")
   Leia(num1)

   Escreval("Digite a operação (+, -, *, /): ")
   Leia(operacao)

   Escreval("Digite o segundo número: ")
   Leia(num2)

   Escolha operacao
      Caso "+"
         resultado <- num1 + num2
         Escreval("Resultado: ", resultado)

      Caso "-"
         resultado <- num1 - num2
         Escreval("Resultado: ", resultado)

      Caso "*"
         resultado <- num1 * num2
         Escreval("Resultado: ", resultado)

      Caso "/"
         Se num2 <> 0 Então
            resultado <- num1 / num2
            Escreval("Resultado: ", resultado)
         Senão
            Escreval("Erro: divisão por zero não é permitida.")
         FimSe

      OutroCaso
         Escreval("Operação inválida.")
   FimEscolha
Fimalgoritmo