// Chiedere numero all'utente
const userNumber = prompt('Scrivi 4 cifre');
console.log(userNumber);

// Sommare i numeri dell'utente tra loro

let additionNumber = 0;
for(let i = 0; i < userNumber.length; i++) {
    const singleNumber = parseInt(userNumber[i])

    console.log(singleNumber);
    // Somma dei suoi numeri
    additionNumber += singleNumber;
}
console.log(additionNumber);




