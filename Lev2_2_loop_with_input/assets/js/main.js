// Wir haben in unserem HTML ein Inputfeld, in dem der User eine Zahl eingeben soll.
// Schreibe eine Funktion, mit der du am Ende in deinem HTML das Wort “Loop” ausgibst.
// Die Anzahl der Buchstaben “o” variiert durch die Eingabe des Users.


const button = document.querySelector("button");


button.addEventListener("click", () => {
    const input = Number(document.getElementById("input").value);
    const output = document.getElementById("output");

    let outputoOo = [];

    let i = 1;
    while (i <= input) {
        outputoOo.splice(2, 0, "o");

        i++;
    }
    output.innerHTML = `L${outputoOo.join("")}p`;
});














// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // console.log(numbers);

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 1) {
//         console.log(numbers[i]);
//         continue;
//     }
//     console.log("übersprungen");
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // console.log(numbers);

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 1) {
//         console.log(numbers[i]);
//         break;
//     }
//     console.log("übersprungen");
// } 

// Syntax: for...of loop
// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const value of list) {
//     console.log(value);
// }
 // Gibt die Zahlen von 1 bis 10 aus