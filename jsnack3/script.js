console.log('js ok');
//Crea due array che hanno un numero di elementi diversi.Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

const pizzaArray = ['Margherita', 'Marinara', 'Diavola', 'Funghi', 'Salsiccia', 'Amatriciana'];
const clientsArray = ['Antonio', 'Angelo', 'Alessio'];

while (pizzaArray.length > clientsArray.length) {
    clientsArray.push(prompt('Inserisci il nome del cliente'));
}

console.log(pizzaArray);
console.log(clientsArray);