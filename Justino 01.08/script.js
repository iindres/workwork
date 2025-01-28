// 1. Sukurti funkciją, kuri atiduoda pirmą pateikto teksto simbolį;

function pirma(tekstas) {
    return tekstas.charAt(0);
}

let rezult = pirma('Programa „Microsoft 365“');

console.log(rezult);

// 2. Sukurti funkciją, kuri atiduoda paskutinį pateikto teksto simbolį;

function paskutine(tekstas) {
    return tekstas.charAt(tekstas.length - 1);
}

console.log(paskutine("saldytuvas"));

// 3. Sukurti funkciją, kuri pakeičia visas tekste pateiktas o raides į 0 (nulius)

function pakeisti(sakinys) {
    return sakinys.replaceAll("o", "0");
}

console.log(pakeisti("Programa „Microsoft 365“ (anksčiau – „Office“) leidžia kurti, bendrinti ir bendradarbiauti vienoje vietoje naudojant parankinių programas, įskaitant „Copilot“."));


// 4. Sukurti funkciją, kuri atiduoda tekstą be paskutinio simbolio

function paskutine(sakinys) {
    return sakinys.slice(0, -1);
}

console.log(paskutine("Studijos"));

// 5. Sukurti funkciją, kuri priimanti tekstą pakeičia pirmąsias dvi raides vietomis
function pakeicia(change) {
    return change[1] + change[0] + change.slice(2);
}

console.log(pakeicia("Institutas"));

// 6. Sukurti funkciją, kuri gavusi datą formatu "2024-01-01" atiduoda metus "2024"

function metai(data) {
    return data.slice(0, 4);
}

console.log(metai("2024-01-01"));

// 7. Sukurti funkciją, kuri gavusi datą tekstiniu formatu "2024-01-01" atiduoda mėnesį pagal jo pavadinimą: "Sausis"

function menuo(data) {
    const months = [
        "Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis",
        "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"
    ];
    const date = new Date(data);
    const menesis = date.getMonth();
    return months[menesis];
}

console.log(menuo("2024-01-01"));

// 8. Sukurti funkciją, kuri priimant parametrą savaitėsDiena (skaičius), 
// atitinkamai gražina savaitės dienos pavadinimą lietuvių kalboje. pvz savaitesDiena(1) -> “Pirmadienis”;

function savaitesDiena(dayNumber) {
    const weekDays =
        [
            "Pirmadienis", "Antradienis", "Trečiadienis",
            "Ketvirtadienis", "Penktadienis", "Šeštadienis", "Sekmadienis"
        ];
    return weekDays[dayNumber - 1];
}

console.log(savaitesDiena(1));

// 9. Sukurti funkciją, kuri priima parametrą saliesKodas. 
// saliesKodas gali būti pateikiamas iš 3 raidžių (pvz: LTU) arba 2 raidžių (pvz.: LT). 
// Pateikite pilną šalies pavadinimą pagal pateiktą šalies trumpinį.
// LVA arba LV - Latvija
// LTU arba LT - Lietuva
// POL arba PL - Lenkija
// SWE arba SE - Švedija
// GER arba DE - Vokietija
// Visi kiti šalių kodai - Nežinoma šalis


function saliesKodas(trumpinys) {
    if (trumpinys.includes("LT") || trumpinys.includes("LTU")) {
        return `Lietuva`
    }

    else if (trumpinys.includes("LV") || trumpinys.includes("LVA")) {
        return `Latvija`
    }

    else if (trumpinys.includes("PL") || trumpinys.includes("POL")) {
        return `Lenkija`
    }

    else if (trumpinys.includes("SE") || trumpinys.includes("SWE")) {
        return `Švedija`
    }

    else if (trumpinys.includes("DE") || trumpinys.includes("GER")) {
        return `Vokietija`
    }

    else {
        return `Nežinoma šalis`
    }
}

console.log(saliesKodas("LV"));