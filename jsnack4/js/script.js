/* 
- Chiedere all'utente 6 volte di inserire un numero 
- Se e' dispari inserire nell'array
*/ 

// Array vuoto  da riempire
const userNumberOdd = [];


// Richiesta numeri all'utente
for( let i = 0; i < 6; i++) {
    const userNumber = parseInt( prompt( 'Scrivi un numero per 6 volte' ) );

    // Se dispari popolare nell'ARRAY userNumberOdd
    if(userNumber % 2 !== 0) {
        userNumberOdd.push(userNumber);
    } 
}




