// 1. Sukurkite objektą automobilis
// 2. Pridėkite savybę : pavadinimas
// 3. Pridėkite savybę : modelis
// 4. Pridėkite savybe : metai
// 5. Pridėkite savybę : rida
// 6. Pridėkite savybę : savininkas (savybė irgi objektas ir turi vardą ir pavardę)
// 7. Pridėkite objektui metodą, kuriame būtų realizuotas visų savybių išvedimas
// 8. Pakeiskite kurios nors savybės reikšmę
// 9. šsitestuokit, viską išsiveskit

const automobilis = {
    pavadinimas: 'Audi',
    modelis: 'A4',
    metai: 2010,
    rida: 200000,
    savininkas: {
        vardas: 'Jonas',
        pavarde: 'Jonaitis'
    },
};

automobilis.isvedimas = function () {
    console.log(`Automobilis: ${this.pavadinimas} ${this.modelis}, 
        ${this.metai} m., ${this.rida} km., savininkas: 
        ${this.savininkas.vardas} ${this.savininkas.pavarde}`);
}

automobilis.isvedimas();