// Masyvų metodai
// Dokumentacijos apie masyvus: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Įsiklijuokite šį masyvą pas savęs į kodą:

const prekes = [
    { barkodas: "4061615651", pavadinimas: "Degtukai", kaina: 0.2 },
    { barkodas: "4061615652", pavadinimas: "Dantų šepetėlis", kaina: 1.5 },
    { barkodas: "4061615653", pavadinimas: "Kava", kaina: 4.99 },
    { barkodas: "4061615654", pavadinimas: "Vandens butelis", kaina: 0.89 },
    { barkodas: "4061615655", pavadinimas: "Šokoladas", kaina: 1.79 },
    { barkodas: "4061615656", pavadinimas: "Tualetinis popierius", kaina: 2.5 },
    { barkodas: "4061615657", pavadinimas: "Makaronai", kaina: 0.99 },
    { barkodas: "4061615658", pavadinimas: "Ryžiai", kaina: 1.2 },
    { barkodas: "4061615659", pavadinimas: "Kondicionierius", kaina: 3.5 },
    { barkodas: "4061615660", pavadinimas: "Šampūnas", kaina: 3.99 }];


// 1 Užduotis: Kiekvienai prekei masyve pritaikykite metodą, kuris modifikuoja kiekvienos 
// prekės barkodą.
// Barkodai prasideda pirmąja prekės pavadinimo raide ir atskiriamas brūkšneliu, pvz:
// D-4061615651 (degtukai).
// Rezultatą console.log’inkite

prekes.forEach(preke => {
    preke.barkodas = `${preke.pavadinimas.charAt(0)}-${preke.barkodas}`;
});
console.log("Modified barcodes:", prekes);

// 2 Užduotis: Išfiltruokite prekes, kurios prasideda pirmąja raide 'D'.
// ezultate turi likti 2 prekės: ‘Degtukai’ ir ‘Dantų šepetėlis’.
// Rezultatą console.log’inkite

const productsStartingWithD = prekes.filter(preke => preke.pavadinimas.startsWith('D'));
console.log("Products starting with 'D':", productsStartingWithD);

// 3 Užduotis: Išfiltruokite prekes, kurios kainuoja daugiau nei 1 eur.

const productsMoreThanOneEuro = prekes.filter(preke => preke.kaina > 1);
console.log("Products costing more than 1 euro:", productsMoreThanOneEuro);

// 4 Užduotis: Išfiltruokite prekes, kurios kainuoja mažiau nei 3 eur.

const productsLessThanThreeEuros = prekes.filter(preke => preke.kaina < 3);
console.log("Products costing less than 3 euros:", productsLessThanThreeEuros);

// 5 Užduotis: Išfiltruokite prekes, kurios kainuoja daugiau nei 1 eur ir mažiau nei 3 eur.

const productsBetweenOneAndThreeEuros = prekes.filter(
    preke => preke.kaina > 1 && preke.kaina < 3);
console.log("Products costing more than 1 euro and less than 3 euros:",
    productsBetweenOneAndThreeEuros);

// 6 Užduotis: Raskite prekę, kurios pavadinimas: ‘Kava’. Jos reikšmę pakeiskite į
// ‘Kavos pupelės’.

const kavaProduct = prekes.find(preke => preke.pavadinimas === 'Kava');
if (kavaProduct) {
    kavaProduct.pavadinimas = 'Kavos pupelės';
}
console.log("Updated product list with 'Kavos pupelės':", prekes);


// 7 Užduotis: Prekėms, kurios kainuoja pigiau nei 1.5eur pridėkite pvmProcentas
// laukelį į šiuos objektus, šioms prekėms taikomas pvmProcentas: 15%,
// prekėms kurios yra brangesnės, taikomas pvmProcentas: 21%. Apskaičiuokite
// pvmMokestis laukelių reikšmes, pritaikę šį pvmProcentą prie kainos.

prekes.forEach(preke => {
    if (preke.kaina < 1.5) {
        preke.pvmProcentas = 15;
    } else {
        preke.pvmProcentas = 21;
    }
    preke.pvmMokestis = (preke.kaina * preke.pvmProcentas / 100).toFixed(2);
});
console.log("Products with PVM fields:", prekes);