
//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.

const numIntArray = [2, 5, 8, 10, 25, 35];
let sumOdds = 0;

for (let i = 0; i < numIntArray.length; i++){
    if (i % 2 !== 0) {
        sumOdds += numIntArray[i];
    }
}

console.log(numIntArray); // log array to check easily

console.log(sumOdds); //sum of 5 + 10 + 35 = 50 (index 1, 3, 5)