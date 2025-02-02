// Generate a random number between 0 and 99
const number = Math.floor(Math.random() * 100);
console.log(`Sugeneruotas skaičius: ${number}`);

if (number >= 0 && number <= 10) {
    // Category 1: 0 - 10
    const result = number ** 2;
    console.log(`Skaičius: ${number}, Kategorija: 1, Operacijos rezultatas: ${result}`);
} else if (number >= 11 && number <= 19) {
    // Category 2: 11 - 19
    console.log(`Skaičius: ${number}, Kategorija: 2, Operacijos rezultatas: ${number}`);
} else if (number >= 20 && number <= 49) {
    if (number % 2 === 0) {
        // Category 3: 20 - 49 and even
        const result = number - Math.floor(number / 10) * 10;
        console.log(`Skaičius: ${number}, Kategorija: 3, Operacijos rezultatas: ${result}`);
    } else {
        // Category 4: 20 - 49 and odd
        const result = (number + (number % 10)) / 2;
        console.log(`Skaičius: ${number}, Kategorija: 4, Operacijos rezultatas: ${result}`);
    }
} else if (number >= 50 && number % 3 === 0) {
    // Category 5: 50 or greater and divisible by 3
    const randomString = Math.random().toString(36).substring(2, 6);
    console.log(`Skaičius: ${number}, Kategorija: 5, Operacijos rezultatas: ${randomString}`);
} else {
    // Other cases
    console.log(`Skaičius: ${number}, Kategorija: Jokia, Operacijos rezultatas: Skaičius netinka neivienai kategorijai`);
}

// Generate three random numbers between 1 and 10
const num1 = Math.floor(Math.random() * 10) + 1;
const num2 = Math.floor(Math.random() * 10) + 1;
const num3 = Math.floor(Math.random() * 10) + 1;

console.log(`Sugeneruoti skaičiai: ${num1}, ${num2}, ${num3}`);

// Find the largest and smallest numbers
const maxNum = Math.max(num1, num2, num3);
const minNum = Math.min(num1, num2, num3);

console.log(`Didžiausias skaičius: ${maxNum}`);
console.log(`Mažiausias skaičius: ${minNum}`);

// Calculate sums
const sumFirstTwo = num1 + num2;
const sumLastTwo = num2 + num3;
const totalSum = num1 + num2 + num3;

if (sumFirstTwo > sumLastTwo) {
    const result = Math.ceil(totalSum / 3);
    console.log(`Suma pirmų dviejų yra didesnė. Rezultatas: ${result}`);
} else if (sumFirstTwo < sumLastTwo) {
    const result = Math.floor(totalSum / 5);
    console.log(`Suma paskutinių dviejų yra didesnė. Rezultatas: ${result}`);
}

// Additional conditions
if (num1 > num2 && num1 < num3) {
    console.log("Pirmas - vidurinins");
}
if (num2 > num1 && num2 > num3) {
    console.log("Antras yra didžiausias");
}
if (num3 < num1 && num3 < num2) {
    console.log("Trečias yra mažiausias");
}
if (num1 === 3 || num1 === 5 || num1 === 7) {
    console.log(`Pirmas skaičius pakeltas 4-tuoju laipsniu: ${num1 ** 4}`);
}
if (num1 === 4 || num1 === 9) {
    console.log(`Šaknis pirmojo skaičiaus: ${Math.sqrt(num1)}`);
}