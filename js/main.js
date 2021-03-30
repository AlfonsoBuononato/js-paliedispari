//ESERCIZIO 1.
/*PALIDROMA
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

//1. CHIEDERE ALL UTENTE DI INSERIRE UNA PAROLA.

/*var parola = prompt("inserire una parola.");
console.log(parola);


var parolaDaControllare = palindroma(parola);
console.log(parolaDaControllare);*/

//2. CREO UNA FUNZIONE PER CAPIRE SE è UNA PAROLA PALINDROMA.
/*function palindroma (parola1){
    
    var parolaInversa = "";
    
        for( i = parola1.length - 1; i >= 0; i--){
        
            parolaInversa += parola1[i];
        }

        if(parola1 === parolaInversa){
            console.log(parola + ": è una parola palindroma");
        }else{
            console.log("non è una parola palindroma");
        }

    return parolaInversa;
}*/



// ESERCIZIO 2.
/*Pari e Dispari
1.L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
2.Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
3.Sommiamo i due numeri
4.Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
5.Dichiariamo chi ha vinto.*/

//1. SCEGLIERE UN NUMERO PARI O DISPARI E INSERIRE UN NUMERO DA 1 A 5;

var inserisciPariDispari = prompt("inserisci pari o dispari.").toLowerCase().trim();
//VALIDAZIONE PARI O DISPARI
while(inserisciPariDispari !== "pari" && inserisciPariDispari !== "dispari"){
    inserisciPariDispari = prompt("DEVI INSERIRE PARI O DISPARI").toLowerCase().trim();
}
console.log("inserisci pari o dispari: " + inserisciPariDispari);

//1. INSERISCI UN NUMERO DA 1 A 5;

var numero = parseInt(prompt("inserisci un numero da 1 a 5."))
//VALIDAZIONE NUMERO
while(isNaN(numero) || numero < 1 || numero > 5){
    numero = parseInt(prompt("DEVI INSERIRE UN NUMERO DA 1 A 5"));
}
console.log("inserisci un numero da 1 a 5: " + numero);

// 2.GENERIAMO ATTRAVERSO LA FUNZIONE "generaNumero" UN NUMERO RANDOM PER IL COMPUTER
var numeroComputer = 0;
var numeroRandom = generaNumero(numeroComputer);
console.log("numero random generato dal computer: " + numeroRandom);

//3.SOMMIAMO I DUE NUMERI.

var somma = numero + numeroRandom;
console.log("somma dei due numeri inseriti: " + somma);

//4. USO LA FUNZIONE PARIDISPARI PER STABILIRE LA SOMMA TRA I DUE PARAMETRI SE è PARI O DISPARI;

var parametroPariDispari = pariDispari(numero, numeroRandom);
console.log("il numero è: " + parametroPariDispari);

//5. STABILIAMO IL VINCITORE 
if(parametroPariDispari === inserisciPariDispari){
    console.log("HAI VINTO");
}else{
    console.log("HAI PERSO");
}


/**************************************
 ************** UTILITIES FUNCTION
 **************************************/

/**LA FUNZIONA "generaNumero" ANDRA A DICHIARARE UN NUMERO RANDOM GENERATO PER IL COMPUTER
 * @param {number} num 
 * @returns RITORNA NUMERO RANDOM GENERATO
 */
function generaNumero (num){
    var num = Math.floor(Math.random ()*5)+1;
    return num;
}

/**LA FUNZIONE "pariDispari" ANDRA A DICHIARARE SE IL NUMERO SELEZIONATO SARA PARI O DISPARI
 * @param {number} num1 SELEZIONARE NUMERO DA SOMMARE
 * @param {number} num2 SELEZIONARE NUMERO DA SOMMARE
 * @returns RITORNA PARI SE IL NUMERO SOMMATO è UN NUMERO PARI RITORNA DISPARI IN CASO FALSE
 */
function pariDispari (num1, num2){
    var tot = num1 + num2;
    if(tot % 2 === 0){
        return "pari";
    }
    return "dispari";
}


