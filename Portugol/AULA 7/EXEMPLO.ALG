Algoritmo "exemplo"

Var
nomes: vetor [1..3] de caractere
bimestreN1 : vetor [1..3] de real
bimestreN2 : vetor [1..3] de real
bimestreN3 : vetor [1..3] de real
mediaFinal: vetor [1..3] de real
i : inteiro
Inicio
para i <- 1 ate 3 faca
escreval ("")
     escreval ("Qual é o nome do ",i,"ºaluno?")
     leia (nomes[i])
     escreval ("")
     escreval ("Qual foi a nota no primeiro bimestre?")
     leia (bimestreN1 [i])
     escreval ("")
     escreval ("Qual foi a nota no segundo bimestre?")
     leia (bimestreN2 [i])
     escreval ("")
     escreval ("Qual foi a nota no terceiro bimestre?")
     leia (bimestreN3 [i])
     limpatela
     
     mediaFinal [i] <- (bimestreN1[i]+bimestreN2[i]+bimestreN3[i]/3)
fimPara

para i <- 1 ate 3 faca
se (mediaFinal [i] >=7) entao
   escreval (nomes[i], " aprovado")
   senao
   escreval (nomes [i], " reprovado")
fimSe
fimPara
Fimalgoritmo