// Array a scelta nostra di numeri
const numbers = [2, 4, 6, 8, 10, 1, 3, 5, 7, 9];

// dividere i dispari dai pari, 
for(let i = 0; i < numbers.length; i++) {
    const numberOddEven = numbers[i];

    if(numberOddEven % 2 === 0) {
        document.getElementById('odd').innerHTML += numberOddEven+" ";
    } else {
        document.getElementById('even').innerHTML += numberOddEven+" ";
    }
}




