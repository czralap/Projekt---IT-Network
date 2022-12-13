// let a = prompt("Zadej prvni cislo");
// let b = prompt("Zadej druhe cislo");
// a= parseInt(a);
// b= parseInt(b);
// soucet = a + b;
// rozdil = a - b;
// soucin = a * b;
// document.write(`Vysledkem scitani je ${soucet}`);
// document.write(`Vysledkem odcitani je ${rozdil}`);
// document.write(`Vysledkem nasobeni je ${soucin}`);


let x = parseInt(prompt("Zadej prvni cislo"));
let y = parseInt(prompt("Zadej prvni cislo"));

let soucet = x + y;
let rozdil = x - y;
let soucin = x * y;
let podil = x / y;

document.write(`Soucet: ${soucet} <br>
Rozdil: ${rozdil}<br>
Soucin: ${soucin}<br>
Podil: ${podil}`);


// let uzivatelZadal = "ano";
// while (Uzivatelzadal === "ano") {
//    prompt("chces pokracovat? [ano/ne]")
// }
// let chcePokracovat = true
// while(chcePokracovat)
//     let odpoved = prompt("Chces pokracovat? [ano/ne]");
//     if (odpoved === "ne") {
//   chcePokracovat = (odpoved !== "ne");
// }