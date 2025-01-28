// 1. parasykite f-ja, kuriai perduodamas vienas parametras, ir ji nustatytu 
// ar skaicius lyginis ar ne

function parametras(x){
    if(x % 2 == 0) {
        return x + ` skaicius yra lyginis`
    }
    return x + ` skaicius yra nelyginis`
}

console.log (parametras(6));

// 2. Parasykite f-ja, kuriai perduodami du parametrai (skaicius ir daliklis)
// paskaiciuotumete likuti dalinant

function likutis(skaicius, daliklis) {
    return (skaicius % daliklis);
}

console.log (likutis(10, 2));

// 3. Parasykite f-ja, kuriai perduodami du parametrai, paskaiciuotu dvieju
// skaiciu vidurki

function vidurkis(x, y) {
    return (x + y) / 2;
}

console.log (vidurkis(10,2));

// 4. Laikrodis rodo laika h, m, s. Parasykite prgrama kuri apskaiciuotu
// kiek sekundziu prabego po vidurnakcio. (3 parametrai)

function poVidurnakcio(h, m, s) {
    return (h * 3600 + m * 60 + s);
}

console.log (poVidurnakcio(0, 2, 15));

// 5. Parasykite programa kuri patikrintu ar skaicius dalinasi is 3, 5
// ar is abieju tai yra ir is 3 ir is 5.
// Jei dalinasi is 3 be liekanos atspausdinam "Labas"
// Jei dalinasi is 5 be liekanos atspausdinam "Rytas"
// Jei dalinasi is 3 ir is 5 atspausdinam "Labas rytas"
// Jei nesidalina nei is 3 nei is 5 isvedam paprasciausia skaiciu

function arDalinasi(skaicius) {
    if (skaicius % 3 == 0 && skaicius % 5 == 0) {
        return "Labas rytas";
    }
    else if (skaicius % 3 == 0) {
        return "Labas";
    }        
    else if (skaicius % 5 == 0){
        return "Rytas";
    }
    return skaicius;
}

console.log (arDalinasi(15));
console.log (arDalinasi(6));
console.log (arDalinasi(10));
console.log (arDalinasi(26));

// 6. Jonas ir Petras dalyvavo saskiu turnyre. Jonas surinko n tasku
// o Petras m. Nustatykite kuris is dalyviu surinko daugiau tasku turnyre.

function taskai(n, m) {
    if (n > m) {
        return "Laimetojo vardas : Jonas";
    }
        
    if (n < m) {
        return "Laimetojo vardas : Petras";
    }  

    return "Kova baigesi lygiosiomis";
}

console.log (taskai(15, 12));
console.log (taskai(13, 14));
console.log (taskai(13, 13));

// 7. Zinomi kambario matmenys ilgis ir plotis. Reikia apskaiciuoti, kokia
// pinigu suma reiks moketi uz plyteles, skirtas kambario grindims kloti, 
// jei plytelu vieno kvadrato kaina yra 23 eurai. Plyteliu reikia pirkti
// 5 proc. daugiau galimiems nuostoliams padengti. Plyteles supakuotos po
// 1.5m2 ir parduotuves darbuotojai nesutinhka ardyti pakuociu. Galima
// pirkti tik pilnas pakuotes.

function plyteliuSkaicius(ilgis, plotis, kaina, pakuote, paklaida) {
    let plotas = ilgis * plotis;
    let result = Math.ceil((((plotas * paklaida) / 100) + plotas) / pakuote);
    return `Kambario dydis ${ilgis} ir ${plotis}, reikes ${result} pakuociu
    plyteliu. Reikalinga pinigu suma ${result * pakuote * kaina}`
}

console.log(plyteliuSkaicius(3, 4, 23, 1.5, 5));

// 8. Pirmos lietuviskos litu monetos isejo 1925m. Tai buvo 5, 2 ir 1
// lito vertes sidabrines monetos. Duota pinigu suma n litais pakeiskite
// nurodytomis monetomis, panaudojant kuo maziau monetu.

function coins(n) {
   let n1 = (n - (n % 5))/5;
   let n2 = (n - n1 * 5 - ((n - n1) % 2))/2;
   let n3 = n - n1 * 5 - n2 * 2;

   return `norint gauti ${n} suma litais, mums reikes ${n1} monetu po 5 
   litus, ${n2} monetu po 2 litus ir ${n3} monetu po 1 lita. Viso 
   monetu skaicius ${n1 + n2 + n3}.`
}

console.log(coins(23))