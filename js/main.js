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

var numero = parseInt(prompt("inserisci un numero da 1 a 5."))
//VALIDAZIONE NUMERO
while(isNaN(numero) || numero < 1 || numero > 5){
    numero = parseInt(prompt("DEVI INSERIRE UN NUMERO DA 1 A 5"));
}

var numeroComputer = 0;
var numeroRandom = generaNumero(numeroComputer);
console.log(numeroRandom);

//3.SOMMIAMO I DUE NUMERI.

var somma = numero + numeroRandom;
console.log("somma dei due numeri inseriti: " + somma);

//5. USO LA FUNZIONE PARIDISPARI PER STABILIRE LA SOMMA TRA I DUE PARAMETRI SE è PARI O DISPARI;

var parametroPariDispari = pariDispari(numero + numeroRandom);
console.log(parametroPariDispari);

//6. STABILIAMO IL VINCITORE 
if(parametroPariDispari === inserisciPariDispari){
    console.log("HAI VINTO");
}else{
    console.log("HAI PERSO");
}

/*UTILITIES FUNCTION*/

//2.FUNZIONE PER GENERARE UN NUMERO RANDOM
function generaNumero (num){

    var num = Math.floor(Math.random ()*5)+1;
    return num;
}

//4. FUNZIONE PER STABILIRE SE è PARI O DISPARI;

function pariDispari (num1){
    
    if(num1 % 2 === 0){
        return "pari";
    }
    return "dispari";
}


