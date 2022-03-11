//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.Esegui questo programma in due versioni, con il for e con il while.


//for version start
// let sum = 0;
// for (let i = 0; i < 5; i++){
//     let number = parseInt(prompt(`${i + 1}, inserisci un numero:`));
//     sum += number;
// }

// console.log(`Sum is: ${sum}`);
// for version end



//while version start
let i = 0;
let sum = 0;
while (i < 5) {
    number = parseInt(prompt(`${i + 1}, inserisci un numero:`));
    sum += number;
    i++;
}

console.log(`Sum is: ${sum}`);
//while version end


