//          <div class="produto">
//              <img src="https://images.vexels.com/media/users/3/299520/isolated/preview/83e2de1a44bb79f1250c330a18dd79a4-pirulito-de-laranja.png">
//              <h1>PIRULITO</h1>
//              <p>R$ 20</p>
//      <button type="button">COMPRAR</button>
//  </div>
function aula() {
    //variavel <- vetor de [1..3] de caractere
    var filmes = [
        "Interestelar",
        "Meninas Malvadas",
        "Diabo veste prada 2"
    ]

    console.log(filmes)
    console.log(filmes[1])
    console.log("Um filme que é muito bom é", filmes[0])
    // push adciona no primeiro
    filmes.push("As branquelas");
    console.log(filmes)
    // shift adiciona no primeiro
    filmes.unshift("Homem Aranha");
    console.log(filmes)
    // pop deleta o ultimo
    filmes.pop();
    console.log(filmes)
    // shift deleta o primeiro
    filmes.shift();
    console.log(filme)
    // splice (indice, quantos quer sobrescrever, dados)
    filmes.splice(1, 1)
    console.log(filme)
    filmes.splice(1, 1, "Diabo veste prada 1")
    console.log(filme)
    filmes.splice(1, 0, "Kill Bill vol 1 E 2")
    console.log(filme)
    var filmesCopia = filmes.slice(filmes)
    console.log(filmesCopia)
    for (var i = 0; i < filmes.length; i++)
        console.log(filmes[i]);
}


// filmes.map(cadaFilme => {
//     console.log(cadaFilme);
// })

var doces = [
    ['PIRULITO', 'https://images.tcdn.com.br/img/img_prod/1106817/pirulito_coresmel_twister_lollipop_600g_com_25_unidades_20845_1_57fb8db3209215351a86b8f32243dfcd.jpg', 4.00],

    ['SONHO DE VALSA', 'https://drogal.vtexassets.com/arquivos/ids/211979/90777.png?v=638463754536930000', 2.5],

    ['BOLO DE POTE', 'https://static.clickembalagens.com.br/product_images/1280x1280/o/002/170729-26-02-2025-anuncio-20pote-20redondo-20250ml-201-48013.png', 6.00],

    ['PUDIM NO POTE', 'https://cdn.awsli.com.br/2500x2500/2640/2640978/produto/240423791/imagem7896343084998_1-e9wgfbcywx.jpg', 5.50]
];

doces.map(cadaDoce => {
    document.getElementById("produtos").innerHTML += `
            <div class="produto">
            <img src="${cadaDoce[1]}" alt=Pirulito>
             <h1>${cadaDoce[0]}</h1>
             <p>${cadaDoce[2]}</p>
     <button type="button">COMPRAR</button>
 </div>
 `
});


