// Du hast ein Array aus Zahlen und möchtest herausfinden, durch welche Zahlen sie (außer durch eins und sich selbst) teilbar sind.
// Schreibe das Ergebnis in dein HTML.

let numArr = [5, 22, 15, 100, 55];
const testArray = [];

for (let i = 0; i < numArr.length; i++) {

    for (let j = 2; j < numArr[i]; j++) {
        if (numArr[i] % j === 0) {
            let result = numArr[i] / j;
            // console.log(`${numArr[i]} ist durch ${j} teilbar`);
            document.getElementById("output").innerHTML += `${numArr[i]} lässt sich durch ${j} teilen. Das Ergebnis ist ${result} <br>`;
        }
    }
}
