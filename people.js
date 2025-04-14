//Richiamo le funzioni degli altri 2 file tramite require
const hobbies = require("./hobbies");

const name = require("./names");

//Creo una funzione senza parametri che restituisce però un oggetto con 2 proprietà, fullName e hobbies
function person() {
    return {
        fullName: name("Mario","Rossi"),
        hobbies: hobbies("Gaming", "Cinema", "Musica")
    }
}
//Stampa la funzione person per verificarne il funzionamento	
console.log(person());