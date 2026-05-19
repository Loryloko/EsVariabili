var tot = 44;
var fila = 6;

var numFila = Math.floor(tot / fila);
console.log(numFila);

var numRimasti = tot % fila;
console.log(numRimasti);

var numMancanti = fila - numRimasti;
console.log(numMancanti);

console.log(`Ci sono ${numFila} file di gatti e ne mancano ${numMancanti} per una nuova fila con un avanzo di ${numRimasti}`);