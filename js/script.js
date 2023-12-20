// ! TEMPLATE LITERAL
const element = document.getElementById('target');

// Dichiariamo due variabili
x = 3;
y = 5;

let listSquare = '<div>';

// Creo un ciclo di numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    // Numero NON divisibile ne per 3 ne per 5
    if (!(i % x == 0) && !(i % y == 0)) {
        console.log(i);
        listSquare += `<div class="square">${i}</div>`;

    } 
        // Numero divisibile sia per 3 che 5
        else if ((i % x == 0) && (i % y == 0)) {
        console.log('FizzBuzz');
        listSquare += '<div class="square">FizzBuzz</div>';

    } 
        // Numero dibisibile per 3
        else if (i % x == 0) {
        console.log('Fizz');
        listSquare += '<div class="square">Fizz</div>';

    } 
        // Numero divisibile per 5
        else if (i % y == 0) {
        console.log('Buzz');
        listSquare += '<div class="square">Buzz</div>';

    }
}

listSquare += '</div>';

console.log(listSquare);

element.innerHTML = listSquare;