// 1. Parašykite programą, kuri suskaičiuotų , kiek duotas skaičius a 
// turi lyginių ir nelyginių skaitmenų. @example: 63258 => ‘3 skaičiai 
// lyginiai, 2 nelyginiai’

function skaicius(n) {
    let lyginis = 0;
    let nelyginis = 0;

    while (n > 0) {
        let paskutinis = n % 10;
        if (paskutinis % 2 == 0) {
            lyginis++;
        }
        else {
            nelyginis++;
        }
        n = Math.floor(n / 10);
    }
    return `${lyginis} skaiciai lyginiai, ${nelyginis} nelyginiai`
}

console.log(skaicius(63258));

// 2. Parašykite funkciją, kuri priimtų parametru du tekstus ir išvestų 
// kuris tekstas ilgesnis ir tą tekstą @example: (‘abc’, ‘b’) => 
// ‘tekstas “abc” yra ilgesnis, jo ilgis 3 simboliai’ (‘abcd’, ‘abcd’) => 
// ‘abu tekstai lygus, jų ilgis 4 simboliai’

function duTekstai(a, b) {
    if (a.length > b.length) {
        return `tekstas ${a} yra ilgesnis, jo ilgis ${a.length} simboliai`
    }
    else if (a.length < b.length) {
        return `tekstas ${b} yra ilgesnis, jo ilgis ${b.length} simboliai`
    }
    else {
        return `abu tekstai lygus, ju ilgis ${a.length} simboliai`
    }
}

console.log(duTekstai("asdfgh", "asdfghi"));
console.log(duTekstai("asdfghi", "asdfgh"));
console.log(duTekstai("asdfgh", "asdfgh"));

// 3. Sukurkite tuščią masyvą.
// • Įdėkite 4 elementus į masyvą
// • Pridėkite 1 elementą į masyvo galą
// • Ištrinkite vidurinį elementą ir išveskite jį į consolę
// • Išveskite į consolę masyvą pasirašytos f-jos pagalba.
// • Pakeiskite 2 elementą nauja reikšme
// • Pridėkite du naujus elementus į masyvo pradžią
// • Išveskite į consolę masyvą pasirašytos f-jos pagalba.

let masyvas = [2, 5, "dkf", 85];

masyvas.push("paukstis");
console.log(masyvas);

const pr = masyvas.splice(Math.floor(masyvas.length / 2), 1);
console.log(pr);

function print(masyvas) {
    for (let i = 0; i < masyvas.length; i++) {
        console.log(masyvas[i])
    }
}
print(masyvas);

masyvas[1] = "sort";
console.log(masyvas);

masyvas.unshift("naujas", 54);
console.log(masyvas);

print(masyvas);

// 4. Parašykite f-ją kur konvertuotų masyvą į stringą 
// @example: arrayToString([1, 2, 3, 4, 5, 6]) 
// ➞ "123456" arrayToString(["a", "b", "c", "d", "e", "f"]) 
// ➞ "abcdef" arrayToString([1, 2, 3, "a", "s", "dAAAA"]) 
// ➞ "123asdAAAA"

function arrayToString(array) {
    return array.join('');
}

console.log(arrayToString([1, 2, 3, 4, 5, 6])); // "123456"
console.log(arrayToString(["a", "b", "c", "d", "e", "f"])); // "abcdef"
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"])); // "123asdAAAA"

// 5. Parašykite f-ją kur konvertuotų masyvą į stringą 
// @example: arrayToString([1, 2, 3, 4, 5, 6]) 
// ➞ "123456" arrayToString(["a", "b", "c", "d", "e", "f"]) 
// ➞ "abcdef" arrayToString([1, 2, 3, "a", "s", "dAAAA"]) 
// ➞ "123asdAAAA"

function reverse(array) {
    return array.reverse();
}

console.log(reverse([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(reverse([9, 9, 2, 3, 4])); // [4, 3, 2, 9, 9]
console.log(reverse([])); // []