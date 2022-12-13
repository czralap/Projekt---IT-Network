const cisla = [10, 13, 4, 25, 2, 8];

for (let i = 0; i <= cisla.length; i++) {
    const hodnota = cisla [i];
    document.write(hodnota);
}

for (let i in cisla) {
    const hodnota = cisla [i];
    document.write(hodnota);
}

for (let hodnota of cisla) {
    document.write(hodnota);
}

