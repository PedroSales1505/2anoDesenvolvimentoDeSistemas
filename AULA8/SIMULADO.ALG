Algoritmo "AULA8"
//ATIVIDADE1
Var
notas : vetor [1..8] de inteiro
i: inteiro
aluno: vetor [1..8] de caractere
MediaTurma: real
Media: vetor [1..8] de real
v: logico
Inicio
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
Fimalgoritmo