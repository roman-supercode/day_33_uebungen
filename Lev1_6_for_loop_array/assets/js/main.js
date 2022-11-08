// Wir wollen ein Array von Bildern erstellen und die Dateinamen von image_1.jpg bis image_100.jpg sollen ausgeben werden.

let retArray = [];

for (i = 1; i <= 100; i++) {
    retArray.push(`image_${i}.jpg`);
}

console.log(retArray);
