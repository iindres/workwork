// 1.

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

// 2.

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

// 3. 

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

// 4. 
