// function aula() {
//     enquanto () faca...
//     para con ate con2 interable
//     var i = 0;

//     while (i < 10) {
//      console.log(i)
//        i++;
//     }

//     while (true) {
//        var pergunta = confirm("Repete? ");

//        if (pergunta == false) {
//             break;
//         }
//     }
//     for (var i; i < 2000; i++) {
//         document.querySelector('main').innerHTML += `
//         <p> O SENAI É BRITA </p>
//         `;
//     }

//     do {
//         console.log(i);
//         i++
//     } while (i > 10);

function produtos() {
    for (var i = 0; i < 9; i++) {
        document.getElementById("produtos").innerHTML += `
            <div class="produto">
                <img src="https://images.vexels.com/media/users/3/299520/isolated/preview/83e2de1a44bb79f1250c330a18dd79a4-pirulito-de-laranja.png">
                <h1>PIRULITO</h1>
                <p>R$ 20</p>
                <button type="button">COMPRAR</button>
            </div>
        </div>
        `;
    }
}

produtos();