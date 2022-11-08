// Wir verfeinern unseren “Loooooop” aus Aufgabe 2_2
// Jetzt wollen wir eine Fehlermeldung ausgeben, wenn der User 0 eingibt
// Zusätzlich überprüfen wir, ob der User eine gerade Zahl eingegeben hat



const button = document.querySelector("button");


button.addEventListener("click", () => {
    const input = Number(document.getElementById("input").value);
    const output = document.getElementById("output");
    // Meldung bei 0 Einagbe
    if (input === 0) {
        return alert("Bitte eine andere Zahl eingeben!");
    }

    // O looooop
    let outputoOo = [];

    let i = 0;
    for (let i = 0; i <= input; i++) {
        if (i === 0) {
            continue;
        }

        if (input % 2 === 0) {
            outputoOo.push("o");
            // console.log(input);

        } else if (input % 2 !== 0 && i > 1) {
            outputoOo.push("0");
            outputoOo.push("o");
            i++;

        } else if (i === 1) {
            outputoOo.push("o");
        }
        // console.log(outputoOo);
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