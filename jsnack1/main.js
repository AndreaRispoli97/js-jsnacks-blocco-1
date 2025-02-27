//jsnack1
//L’utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore.

let num1 = parseInt(prompt("Inserisci un numero"));
let num2 = parseInt(prompt("Inserisci un numero"));
for (let i = 0; i < 2; i++) {
    if (num1 > num2) {
        console.log(num1);
    }
    else (num2 > num1) {
        console.log(num2);
    }

}