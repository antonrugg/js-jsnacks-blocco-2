//Crea due array che hanno un numero di elementi diversi.Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

const pizzaArray = ['Margherita', 'Marinara', 'Diavola', 'Funghi', 'Salsiccia', 'Amatriciana'];
const clientsArray = ['Antonio', 'Angelo', 'Alessio'];

while (pizzaArray.length > clientsArray.length) {
    clientsArray.push(prompt('Inserisci il nome del cliente'));
}

console.log(pizzaArray); // log bigger array for an easier check
console.log(clientsArray); //log smaller array to check easily if it has same elements at the end

