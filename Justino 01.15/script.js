// 1. Sukurkite funkciją, kuri sukuria atsitiktinių skaičių masyvą iš N elementų. Atsitiktiniai skaičiai nuo M iki O;
// pvz: 
// console.log(generuotiAtsitiktinius(4, 100, 105)); 
// atsakymas konsolėje: [101, 101, 100, 105] 

function generuotiAtsitiktinius(N, M, O) {
    let atsitiktiniai = [];
    for (let i = 0; i < N; i++) {
        atsitiktiniai.push(Math.floor(Math.random() * (O - M + 1)) + M);
    }
    return atsitiktiniai;
}

console.log(generuotiAtsitiktinius(4, 100, 105));

// 2. Sukurkite funkciją, kuri console.log’e parašo tik skaičius iš masyvo M, mažesnius nei N.
// pvz: 
// tikMazesni([4,5,6,7,2,4], 5);
// atsakymas konsolėje: 4, 2, 4 

function tikMazesni(M, N) {
    let mazesni = [];
    for (let i = 0; i < M.length; i++) {
        if (M[i] < N) {
            mazesni.push(M[i]);
        }
    }
    return mazesni;
}

console.log(tikMazesni([4, 5, 6, 7, 2, 4], 5));

// 3. Sukurkite funkciją, countAllThrees(array), kuri suskaičiuotų, kiek kartų 
// pateiktame skaičių masyve yra pasikartojantis skaičius 3;

function countAllThrees(array) {
    let trys = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 3) {
            trys++;
        }
    }
    return trys;
}

console.log(countAllThrees([3, 4, 5, 3, 3, 6, 7, 3, 3, 3, 3, 3, 3, 3, 3]));

// 4. Sukurkite funkcijas countAllEven(array) ir countAllOdd(array). Pirmoji funkcija 
// suskaičiuoja, kiek yra lyginių skaičių pateiktame masyve. Kita suskaičiuoja kiek 
// yra nelyginių skaičių;

function countAllEven(array) {
    let lyginiai = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            lyginiai++;
        }
    }
    return lyginiai;
}

function countAllOdd(array) {
    let nelyginiai = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            nelyginiai++;
        }
    }
    return nelyginiai;
}

console.log(countAllEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log(countAllOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 5. Sukurkite funkciją countAllEvenUnderSix(array), kuri suskaičiuoja, kiek yra 
// lyginių skaičių, kurių reikšmė yra  6 arba mažesnė  pateiktame masyve.

function countAllEvenUnderSix(array) {
    let lyginiai = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 && array[i] <= 6) {
            lyginiai++;
        }
    }
    return lyginiai;
}

console.log(countAllEvenUnderSix([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 6. Sukurkite funkciją throwCoin(), kuri imituoja monetos metimą. 
// funkcijos gražinama reikšmė: “H” - Herbas arba “S” - Skaičius;

function throwCoin() {
    return Math.random() < 0.5 ? "H" : "S";
}

console.log(throwCoin());

// 7. Sukurkite funkciją, kuri imituoja monetos metimą 20 kartų, suskaičiuokite 
// kiek kartų iškrito skaičius, kiek kartų iškrito herbas. Paskaičiuokite procentaliai, 
// kokiu dažnumu krito skaičius, kokiu dažnumu krito skaičius; (pasiūlymas patobulinimui 
// mini-game - > pridėti puslapyje mygtuką, leisiantį pasirinkti kokios pusės monetos 
// tikitės, ir pridėti mesti monetą mygtukus, tada atitinkamai atvaizduoti, 
// buvo laimėta - ar pralaimėta)

function throwCoin20() {
    let H = 0;
    let S = 0;
    for (let i = 0; i < 20; i++) {
        if (Math.random() < 0.5) {
            H++;
        } else {
            S++;
        }
    }
    return `H: ${H}, S: ${S}, H: ${H / 20 * 100}%, S: ${S / 20 * 100}%`;
}

console.log(throwCoin20());

// 8. Sukurkite funkciją sumAll(masyvas), kuri susumuoja visus masyvo elementus, 
// bei gražina šią sumą kaip rezultatą;

function sumAll(masyvas) {
    let suma = 0;
    for (let i = 0; i < masyvas.length; i++) {
        suma += masyvas[i];
    }
    return suma;
}

console.log(sumAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 9. Sukurkite funkciją average(arr), kuri atranda visų masyve pateiktų 
// skaičių vidurkį; PVZ: average([1,2,3,4,5])//3

function average(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma / arr.length;
}

console.log(average([1, 2, 3, 4, 5]));

// 10. Sukurkite funkciją findAllUniqueNumbers(masyvas), kuri atranda masyve 
// esančius unikalius skaičius. gražina juos masyvo pavidalu: 
// pvz: findAllUniqueNumbers([1,1,2,8,8,1, 4, 6]) // [1,2,8,4,6];

function findAllUniqueNumbers(masyvas) {
    let unikalus = [];
    for (let i = 0; i < masyvas.length; i++) {
        if (!unikalus.includes(masyvas[i])) {
            unikalus.push(masyvas[i]);
        }
    }
    return unikalus;
}

console.log(findAllUniqueNumbers([1, 1, 2, 8, 8, 1, 4, 6]));


