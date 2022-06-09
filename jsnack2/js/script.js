// Chiedere numero all'utente
const userNumber = prompt('Scrivi 4 cifre');

// Sommare i numeri dell'utente tra loro

let additionNumber = 0;
for(let i = 0; i < userNumber.length; i++) {
    const singleNumber = parseInt(userNumber[i])

    // Somma dei suoi numeri
    additionNumber += singleNumber;
}





