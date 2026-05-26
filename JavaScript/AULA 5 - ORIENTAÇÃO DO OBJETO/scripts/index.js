// var nomePersonagem = "Homem aranha Noir";
// var vidaPersonagem = 3;

// personagens = [
//     ["Homem aranha Noir".3]
// ]

class Personagem {
    nome;
    vida;
    tamanho;
    velocidade;
    habilidade;
    atacar() { };
    abaixar() { };
    pular() { };
}

p1 = new Personagem()
p1.nome = "Homem aranha Noir"
p1.vida = 4;
p1.tamanho = "Médio";
p1.velocidade = "Normal";
p1.habilidade = ["Atlético", "Spider", "Armas"]

class PersonagensEspeciais {
    constructor(nome, vida, tamanho, velocidade, habilidade) {
        this.nome = nome;
        this.vida = vida;
        this.tamanho = tamanho;
        this.velocidade = velocidade;
        this.habilidade = habilidade;
        this.atacar = function () {
            alert("AIAI");
        }
        // todosPersonagens [0].atacar()
    }

}

todosPersonagens = []
todosPersonagens.push(new PersonagensEspeciais("Nick Fury", 3, "Médio", "Normal", ["Armas"])
)






    ..