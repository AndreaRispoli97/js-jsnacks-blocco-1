//jsnack2
//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

let parola1 = prompt("Inserisci una parola");
let parola2 = prompt("Inserisci una parola");

for (let i = 0; i < 2; i++) {
    if (parola1.length > parola2.length) {
        console.log(parola2);
        console.log(parola1);
        break;
    } else {
        (parola1.length < parola2.length)
        console.log(parola1);
        console.log(parola2);
        break;
    }
}