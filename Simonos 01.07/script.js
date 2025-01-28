// 1. Sukurti f-ją, kuriai būtų perduodamas vienas parametras skaičius, kuris
// padidinamas vienetu ir gražinamas rezultatas

function newNumber(num) {
    num = num + 1;
    return num;
}

console.log(newNumber(5));

// let n1 = 58;
// newNumber(n1);

// 2. Sukurti f-ją, kuriai būtų perduodamas vienas parametras skaičius(valandos)
// ir  konvertuotų valandos į sekundes, bei gražintų rezultatą

function newH(numHour) {
    numHour = numHour * 3600;
    return numHour;
}

console.log(newH(1));

// Sukurti f-ją, kuri skaičiuotų krepšinio taškus, pirmas perduodamas parametras baudų skaičius,
// antras perduodamas parametras dvitaškių skaičius, trečias perduodamas tritaškių.
// Apskaičiuoti ir gražinti bendrą surinkta komandos taškų skaičių.

function taskai(baudos, dvit, trit) {
    let result = baudos + dvit * 2 + trit * 3;
    return result;
}

console.log(taskai(2, 3, 5));

// Parašykite f-ją, kuri apskaičiuotų trikampio plotą.
//Perduodami parametrai trikampio aukštinė (h) ir trikampio pagrindas (b)
// Funkcija gražina trikampio plotą.

function plotas(h, b) {
    let result = h * b / 2;
    return result;
}

console.log(plotas(2, 5));

// Paraykite f-ją, kuriai būtų paduodami du parametrai (skaičiai), 
// ir f-ja gražintų true  jei dviejų skaičių sumą yra mažiau arba 
// lygų 100 ir false jei daugiau už 100.

function lessThan(n1, n2) {
    if (n1 + n2 <= 100) {
        return true;
    }
    return false;
}

console.log(lessThan(20, 101));

// Sukurkite f-ją, kuri nustatytų ar du paduodami argumentai yra 
// lygūs. Gražiname true arba false

function argument(ar1, ar2) {
    if (ar1 == ar2); {
    }
    return true;
}

console.log(argument(2, 2));

// Sukurti f-ją, kuri nustatytų, kuris iš paduodamų parametrų 
// (n1, n2) yra didesnis. Jei n1 didesnis gražintų tekstą "n1 
// skaičius didesnis", jei "n2 skaičius didesnis", jei skaičiai 
// lygūs gražintų n1 lygus n2.

function parametras(nr1, nr2) {
    if (nr1 > nr2) {
        return nr1 + `yra didesnis`;
    }
    else if (nr1 < nr2) {
        return nr2 + `yra didesnis`;
    }
    else if (nr1 == nr2) {
        return nr1 + `yra lygus` + nr2;
    }
}

console.log(parametras(14, 6));

// Sukurti f-ją, kuri paskaičiuotų bendrą ūkininko gyvulių kojų skaičių.
//  Ūkininkas pateikia tris parametrus Pirmas parametras vištų skaičius,
//  antras karvių skaičius, trečias paršelių skaičius ūkyje.
// F-ja gražiną bendrą kojų skaičių

function kojos(v, k, p) {
    return (v * 2 + ((k + p) * 4));
}
console.log(kojos(4, 3, 5));


// Sukurk f-ją, kuri gautu du parametrus (a, b). F-ja gražina 10 jei 
// vienas iš skaičiu = 10 arba tų skaičių suma  = 10

function arDesimt(a, b) {
    if (a == 10 || b == 10 || a + b == 10) {
        return true;
    }
    return false;
}

console.log(arDesimt(5, 5));

// Sukurk f-ją, kuri gauna vieną parametrą skaičių (n) ir jei skaičius 
// dalinasi iš 100, gražiną true, priešingu atveju false.

function dalinasi(n) {
    // return n % 100 === 0 ? true : false;
    if (n % 100 == 0) {
        return true;
    }
    return false;
}

console.log(dalinasi(500));

// Sukurk f-ją, kuri patikrintu ar asmuo turi leidimą ir ar 
// asmuo yra vyresnis nei 18 metų abi sąlygos būtinos, kad 
// f-ja gražintų true, priešingu atveju gražina false

function legalus(amzius, leidimas) {
    if (amzius >= 18 && leidimas == true) {
        return true;
    }
    return false;
}

console.log(legalus(19, true));

