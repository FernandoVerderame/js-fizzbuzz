// ! TEMPLATE LITERAL
const element = document.getElementById('target');

// Dichiariamo due variabili
x = 3;
y = 5;

let listSquare = '<div>';

// Creo un ciclo di numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    // Numero NON divisibile ne per 3 ne per 5
    if (!(i % x === 0) && !(i % y === 0)) {
        console.log(i);
        listSquare += `<div class="bg-primary square">${i}</div>`;

    } 
        // Numero divisibile sia per 3 che 5
        else if ((i % x === 0) && (i % y === 0)) {
        console.log('FizzBuzz');
        listSquare += '<div class="bg-danger square">FizzBuzz</div>';

    } 
        // Numero dibisibile per 3
        else if (i % x === 0) {
        console.log('Fizz');
        listSquare += '<div class="bg-success square">Fizz</div>';

    } 
        // Numero divisibile per 5
        else if (i % y === 0) {
        console.log('Buzz');
        listSquare += '<div class="bg-warning square">Buzz</div>';

    }
}

listSquare += '</div>';

console.log(listSquare);

element.innerHTML = listSquare;




/*
// ! MANIPOLAZIONE DEL DOM

// Dichiariamo due variabili
x = 3;
y = 5;

const list = document.createElement('div');

// Creo un ciclo di numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    // Numero NON divisibile ne per 3 ne per 5
    if (!(i % x === 0) && !(i % y === 0)) {
        console.log(i);
        const listSquare = document.createElement('div');
        listSquare.append(i);
        list.appendChild(listSquare);

    } 
        // Numero divisibile sia per 3 che 5
        else if ((i % x === 0) && (i % y === 0)) {
        console.log('FizzBuzz');        
        const listSquare = document.createElement('div');
        listSquare.append('FizzBuzz');
        list.appendChild(listSquare);

    } 
        // Numero dibisibile per 3
        else if (i % x === 0) {
        console.log('Fizz');
        const listSquare = document.createElement('div');
        listSquare.append('Fizz');
        list.appendChild(listSquare);

    } 
        // Numero divisibile per 5
        else if (i % y === 0) {
        console.log('Buzz');
        const listSquare = document.createElement('div');
        listSquare.append('Buzz');
        list.appendChild(listSquare);

    }
}


element.appendChild(list);
*/