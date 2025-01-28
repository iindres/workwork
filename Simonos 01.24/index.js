// 1. Sugeneruokit atsitiktinių reikšmių masyvą, masyvo elementų skaičius 30,
// Masyvo elementų reikšmės nuo 1 iki 10. Tai yra klasės mokinių vidurkiai.
// Rasti geriausiai besimokantį ir blogiausiai.


const mokiniuPazymiai = Array.from({ length: 30 }, () => Math.floor(Math.random() * 10) + 1);

const geriausiPazymiai = Math.max(...mokiniuPazymiai);
const blogiausiPazymiai = Math.min(...mokiniuPazymiai);

console.log("Pazymiai:", mokiniuPazymiai);

const geriausiasMokinys = Math.max(...mokiniuPazymiai);
const blogiausiasMokinys = Math.min(...mokiniuPazymiai);

console.log("Geriausias mokinys:", geriausiasMokinys);
console.log("Blogiausias mokinys:", blogiausiasMokinys);



// 2. Studento trimestro disciplinų skaičius yra 7, kiekvienoje disciplinoj
// min 3 pažymiai. Rasti studento semestro vidurkį.
// Paprastesnis variantas susikuriam masyvą rankiniu būdu
// Sudėtingesnis variantas susigeneruojam masyvą iš random pažymių
// nuo 1 iki 10, pažymių kiekis irgi random nuo 3 iki 6

const studentuPazymiai = [
    [8, 7, 9],
    [6, 5, 7, 8],
    [9, 9, 8],
    [7, 6, 8, 7],
    [10, 9, 9],
    [6, 7, 7, 6],
    [8, 8, 9]
];
let suma = 0;
let pazymys = 0;
studentuPazymiai.forEach(disciplina => {
    const disciplinaSum = disciplina.reduce((suma, pazymys) => suma + pazymys, 0);
    const disciplinaVidurkis = disciplinaSum / disciplina.length;
    suma += disciplinaSum;
    pazymys += disciplina.length;
    console.log("Disciplinos vidurkis:", disciplinaVidurkis.toFixed(2));
});

console.log("Ivertinimai:", studentuPazymiai);

// 3. Mokytojų atlyginimai suvesti į masyvą. Rasti kiek žmonių gauna < nei
// 600 Eurų., < nei 800Eurų. ir < nei 1100 eurų. Iš tų trijų grupių surasti,
// kurių yra daugiausia?
// Paprastesnis variantas susikuriam masyvą rankiniu būdu su minimum 10 elementų
// Sudėtingesnis variantas susigeneruojam masyvą iš random skaičių nuo
// 500 iki 1100, elementų gali būti 100

const atlyginimai = [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400];
let maziau600 = 0;
let maziau800 = 0;
let maziau1100 = 0;


for (let i = 0; i < atlyginimai.length; i++) {
    if (atlyginimai[i] < 600) {
        maziau600++;
    } else if (atlyginimai[i] < 800) {
        maziau800++;
    } else if (atlyginimai[i] < 1100) {
        maziau1100++;
    }
}

console.log('Maziau 600 gauna: ', maziau600);
console.log('Maziau 800 gauna: ', maziau800);
console.log('Maziau 1100 gauna: ', maziau1100);

// 4. Parašyti f-ją kuri sudvigubintu masyvą
// @example ['Ace', 10, true] => ['Ace', 10, true, 'Ace', 10, true]
// [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]

function doubleArray(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result;
}


console.log(doubleArray(['Ace', 10, true]));
console.log(doubleArray([0, 1, 2, 3, 4, 5]));


// 5. Parašyti funkciją, kuri stringų masyvo elementus transformuoja
// į didžiasias raides.
// @example
// [ 'internship', 'glutinous-shriek', 'elevation' ] => [ 'INTERNSHIP', 'GLUTINOUS-SHRIEK', 'ELEVATION' ],
// [ 'a', 'b', 'c', 'd', 'e' ] => [ 'A', 'B', 'C', 'D', 'E' ]

function didziosiosRaides(masyvas) {
    return masyvas.map(item => item.toUpperCase());
}
console.log(didziosiosRaides(['internship', 'glutinous-shriek', 'elevation']));

console.log(didziosiosRaides(['a', 'b', 'c', 'd', 'e']));

function didziosiosRaides(masyvas) {
    return masyvas.map(word => word.toUpperCase());
}

console.log(didziosiosRaides(['labas', 'rytas', 'Lietuva']));

// 6. Parašyti f-ją, kuri, gražintų masyvą su kito masyvo string ilgiais
// @example
// [ '', 'a', 'bc', 'def', 'ghij' ] => [ 0, 1, 2, 3, 4 ]
// [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]

function gautiIlgius(masyvas) {
    return masyvas.map(str => str.length);
}

const zodziai = ["apple", "banana", "cherry"];
const ilgiai = gautiIlgius(zodziai);
console.log(ilgiai);


function gautiZodziuIlgius(masyvas) {
    return masyvas.map(item => item.length);
}

console.log(gautiZodziuIlgius(['', 'a', 'bc', 'def', 'ghij']));
console.log(gautiZodziuIlgius(['angular', 'react', 'ember']));