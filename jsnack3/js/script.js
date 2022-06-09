/* 
- Chiedere all'utente 10 volte un numero
- Stampare la somma di tutti i numeri inseriti
*/

// Chiedere il numero 10 volte
const userNumber = [];
for( let i = 0; i < 10; i++) {
    userNumber.push(prompt('Scrivi un numero per 10 volte'));
}

// Calcolo risultato dei numeri dell'utente
let sum = 0;
for(let i = 0; i < userNumber.length; i++) {
    const singleNumber = parseInt(userNumber[i]);

    sum += singleNumber
}

// Messaggio per utente 
const userMessage = `<span> ${sum} </span>`;
const finalResult = document.getElementById('total-number').innerHTML = userMessage;

