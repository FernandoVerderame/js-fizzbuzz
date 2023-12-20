// Dichiariamo due variabili
x = 3;
y = 5;

// Creo un ciclo di numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    // Numero NON divisibile ne per 3 ne per 5
    if (!(i % x == 0) && !(i % y == 0)) {
        console.log(i);

    } 
        //Numero divisibile sia per 3 che 5
        else if ((i % x == 0) && (i % y == 0)) {
        console.log('FizzBuzz');

    } 
}