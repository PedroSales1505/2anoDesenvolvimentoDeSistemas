// Exemplo 1: Declarando e inicializando uma array vazio
console.log('\n--Exemplo 1: Array Vazio');
let meuArrayVazio = []
console.log(meuArrayVazio)

// Exemplo 2: Declarando arrays com elementos
console.log('\n-Exemplo 2: Arrays com Elementos');
let frutas = ['Maçã', 'Banana', 'Laranja', 'Uva'];
let numeros = [10, 20, 30, 40, 50];
let misto = ['Texto', 123, true, null];
console.log('Frutas', frutas);
console.log('Números', numeros)
console.log('Misto', misto);

// Exemplo 3: Acessando elemtnos de um Array
console.log('\n- Exemplo 3: Acessando elementos por Índice');
console.log('Primeira fruta:', frutas[0]);
console.log('Segunda fruta:', frutas[1]);
console.log('Terceira fruta:', frutas[2]);
console.log('Quarta fruta:', frutas[3]);
console.log('Primeiro:', numeros[0])
console.log('Segundo:', numeros[1])
console.log('Terceiro:', numeros[2]);
console.log('Quarto:', numeros[3]);
console.log('Quinto:', numeros[4]);

// Exemplo 4: Modificando elementos de um Array
console.log('\n - Exemplo 4: Modificando elementos');
frutas[1] = 'Pera';
console.log('Frutas modificadas:', frutas);
numeros[4] = 51 
numeros[3] = 41 
numeros[2] = 31 
numeros[1] = 21 
numeros[0] = 11 
console.log('Números modificados:', numeros);

// Exemplo 5: Tamanho do Array
console.log('\n-Exemplo 5: Tamanho dos Arrays');
console.log('Tamanho do Array de frutas:', frutas.length);
console.log('Tamanho do Array de numeros', numeros.length);

// Exemplo 6: Adicionando elementos ao final (Push)
console.log('\n Exemplo 6: Adicionando elementos com push');
frutas.push('Manga');
console.log('Frutas após o push:', frutas);