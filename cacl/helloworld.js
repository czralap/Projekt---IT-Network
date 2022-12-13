let pocetsalku = 5;
// pocetsalku = pocetsalku + 1
// pocetsalku += 1
// pocetsalku++
pocetsalku--
document.write(pocetsalku);
console.log(pocetsalku);


let salku = 5;
let dni = 2.5;
let vypito = salku * dni;
let typ = "Presso" + " s mlekem";
document.write(`Vypil jsi ${vypito} salku kavy ${typ}`);

// Nacteni textu

let vstup = prompt("Zadej text");
document.write(`Napsal jsi: ${vstup}`);

// Nacteni cisla

let vstup2 = prompt ("Zadej cislo ke zdvojnasobeni:");
let a = parseInt(vstup2);
a = a * 5;
document.write(`Dvojnasobek: ${a}`);