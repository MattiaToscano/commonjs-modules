//Definizione funzione con parametri firstName e lastName
function name(firstName, lastName) {
  //Restituisce il nome completo concatenando firstName e lastName
  return `${firstName} ${lastName}`;
}
console.log(name); //Stampa la funzione name per verificarne il funzionamento

module.exports = name; //Esporta la funzione name per renderla disponibile in altri file
