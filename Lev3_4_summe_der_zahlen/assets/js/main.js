// Wir wollen mit Hilfe eines Loops etwas berechnen.
// Wir haben einen input, in dem der User eine Nummer eingeben soll.
// Wir haben 2 Select-Optionen, bei denen der User eine Zahl zwischen 2 und 9 auswählen kann.
// Wir wollen jede Zahl von 0 bis zu der Zahl, die der User in das Input-Feld eingegeben hat, überprüfen.
// Wenn diese Zahl durch eine der ausgewählten Zahlen teilbar ist, soll sie zur Gesamtsumme addiert werden


const button = document.querySelector("button");


button.addEventListener("click", () => {
    const input = Number(document.getElementById("input").value);
    const output = document.getElementById("output");
    // Meldung bei 0 Einagbe
    if (input === 0) {
        return alert("Bitte eine andere Zahl eingeben!");
    }

    // Zahlenauswahl
    const firstNumber = Number(document.getElementById("firstNumber").value);
    const secondNumber = Number(document.getElementById("secondNumber").value);

    // Meldung bei indentischer Zahlenwahl
    if (firstNumber === secondNumber) {
        return alert("Bitte wähle zwei verschiedene Werte aus!");
    }

    let sum = 0;

    for (let i = 1; i < input; i++) {

        if (i % firstNumber === 0) {
            sum += i;
            // console.log(sum);
        }

        if (i % secondNumber === 0) {
            sum += i;
            // console.log(sum);
        }

    }
    output.innerHTML = sum;
});