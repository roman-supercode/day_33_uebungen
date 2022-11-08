// Dein Ziel ist es, nur die Wörter ins HTML zu schreiben, bei denen die Länge des Wortes mit der Zahl des Inputfeld übereinstimmt.
const button = document.querySelector("button");


let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung'];
console.log(words.length);
button.addEventListener("click", () => {
    console.log(words.length);
    const inputNumber = Number(document.getElementById("inputNumber").value);

    document.getElementById("output").innerHTML = "";

    let i = 0;
    while (i < words.length) {

        if (words[i].length === inputNumber) {
            document.getElementById("output").innerHTML += `${words[i]} <br>`;
        }
        i++;
    }
});



button.addEventListener("click", () => {
    const input = document.getElementById("eingabe").value;
    
    words.push(input);
    // console.log(words);
    document.getElementById("output").innerHTML = "";

    let i = 0;
    while (i < words.length) {
        if (words[i].length === 5) {
            // console.log(words[i]);
            document.getElementById("output").innerHTML += `${words[i]} <br>`;
        }
        i++;
        // console.log(words);
    }
});


