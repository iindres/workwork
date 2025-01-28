// 1. Parašykite f-ją, kuri patikrintų ar galima sudaryti trikampį 
// iš 3 duotų kraštinių ilgių (a,b,c). 

function arTrikampis(a, b, c) {
    if ((a + b > c) && (a + c > b) && (b + c > a)) {
        return `Kraštinės ${a}, ${b}, ${c} sudaro trikampį.`
    }
    return `Kraštinės ${a}, ${b}, ${c} nesudaro trikampio.`
}
// console.log(arTrikampis(2, 2, 10));
// console.log(arTrikampis(15, 6, 10));



// 2. Kavos puodelių skaičiuotuvas. 6 nusiperki, 7 nemokamas. 
// Sukurti f-ją, kuri apskaičiuotų kiek kavos puodelių iš viso 
// pirkėjas gaus. 

function totalCups(sk) {
    nemokamas = sk / 6;
    viso = sk + nemokamas;
    return `Nupirkta ${sk} kavos. Iš viso pirkėjas gaus ${Math.floor(viso)} puodelių kavos.`;
}
// console.log(totalCups(6));
// console.log(totalCups(12));
// console.log(totalCups(213));



// 3. Parašykite funkciją, kuri apskaičiuos nuolaidos dydį 
// priklausomai nuo to, kiek pinigų pirkėjas išleido.  
// Skaičiavimai atlikti pagal šias taisykles:
// Iki 50 € – nuolaida nėra taikoma (0%). 
// Nuo 50 € iki 100 € – taikoma 10% nuolaida. 
// Nuo 100 € iki 200 € – taikoma 15% nuolaida. 
// Daugiau nei 200 € – taikoma 20% nuolaida.


const nuolaidaNuo50Iki100 = 10;
const nuolaidaNuo100Iki200 = 15;
const nuolaidaDaugiau200 = 20;


function sumoketaSuma(pinigai) {
    if (pinigai > 200) {
        suNuolaida = pinigai - ((pinigai * nuolaidaDaugiau200) / 100);
        return (`Pirkėjas pirko prekių už ${pinigai}€ sumą, kam buvo pritaikyta nuolaida 20%. Pirkėjas sumokėjo ${suNuolaida}€.`)
    }
    else if (pinigai > 100 && pinigai < 200) {
        suNuolaida = pinigai - ((pinigai * nuolaidaNuo100Iki200) / 100);
        return (`Pirkėjas pirko prekių už ${pinigai}€ sumą, kam buvo pritaikyta nuolaida 15%. Pirkėjas sumokėjo ${suNuolaida}€.`)
    }
    else if (pinigai > 50 && pinigai < 100) {
        suNuolaida = pinigai - ((pinigai * nuolaidaNuo50Iki100) / 100);
        return (`Pirkėjas pirko prekių už ${pinigai}€ sumą, kam buvo pritaikyta nuolaida 10%. Pirkėjas sumokėjo ${suNuolaida}€.`)
    }
    else {
        return (`Išleista ${pinigai}€ suma yra per maža. Nuolaida nėra taikoma.`)
    }
}
// console.log(sumoketaSuma(45));
// console.log(sumoketaSuma(60));
// console.log(sumoketaSuma(120));
// console.log(sumoketaSuma(210));




// 4. Sukurkite funkciją, kuri patikrins, ar skaičius yra tam 
// tikrame intervale. Funkcija turėtų priimti  tris parametrus:  
// skaičių ir du intervalus (minimalų ir maksimalų), grąžinti true, 
// jei skaičius yra intervale, ir false, jei ne. 

function arIntervale(num, min, max) {
    if (num >= min && num <= max) {
        return true;
    }
    else {
        return false;
    }
}
//  console.log(arIntervale(6, 4, 20));
// console.log(arIntervale(3, 4, 20));