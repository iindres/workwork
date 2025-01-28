// 1.


function daugyba(skaicius) {
    for (n = 1; n <= 10; n++) {
        console.log(`${n} * ${skaicius} = ${skaicius * n}`);
    }
}

daugyba(3);

// 2.

for (let u = 10; u <= 100; u += 10) {
    console.log(u);
}

let o = 10;
while (o <= 100) {
    console.log(o);
    o += 10;
}

let m = 10;
do {
    console.log(m);
    m += 10;
}
while (m <= 100);

// 3. 

for (let i = 0; i <= 10; i += 2) {
    console.log(`Skaicius i = ${i}`);
}

let i = 0;
while (i <= 10) {
    console.log(`Skaicius i = ${i}`);
    i += 2;
}

// 4. 

let suma = 0
let u = 1;
while (u <= 100) {
    suma += u;
    u++;
}

console.log(`Galutine suma yra: ${suma}`);

let sumaa = 0;
for (let a = 1; a <= 100; a++) {
    suma += a;
}

console.log(`Galutine suma yra: ${sumaa}`);

// 5. 

function dalyba(e) {
    let s = 0;
    while (s <= 100) {
        if (s % e === 0) {
            console.log(s);
        }
        s++;
    }
}
dalyba(3);

// 6. 

function countDigits(number) {
    // return Math.abs(number).toString().length;

    let result = 0;
    number = Math.abs(number)
    while (number > 0) {
        number = Math.floor(number / 10)
        result++;
    }
    return result;
}

console.log(countDigits(458962));
console.log(countDigits(452));
console.log(countDigits(-19));

// 7. 

function kasKiekGaus() {
    let turtuolisGaus = 0;
    let matematikasGaus = 2;
    for (let i = 1; i <= 31; i++) {
        turtuolisGaus += 1;
        matematikasGaus *= 2;
    }
    matematikasGaus = (matematikasGaus / 100 / 1000000).toFixed(1);
    return `Turtuoliui sumokes $${turtuolisGaus} mln., tuo tarpu Matematikas gaus $${matematikasGaus} mln.`
}

console.log(kasKiekGaus());

// 8. 

