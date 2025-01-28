const vardasInput = document.querySelector("#vardas");
const pavardeInput = document.querySelector("#pavarde");
const gimimoDataInput = document.querySelector("#gimimoData");
const emailInput = document.querySelector("#email");
const termsCheckBox = document.querySelector("#salygos");

function validate() {
    let arSutinkaSuTaisyklemis = termsCheckBox.checked;
    if (vardasInput.value.length < 3 || vardasInput.value.length > 40) {
        alert("Vardas turi buti tarp 3 ir 40 simbolių");
        return false;
    }
    else if (pavardeInput.value.length < 3 || pavardeInput.value.length > 70) {
        alert("Pavardė turi buti tarp 3 ir 70 simbolių");
        return false;
    }
    else if (gimimoDataInput.value.length < 1) {
        alert("Įveskite gimimo datą");
        return false;
    }
    else if (!arSutinkaSuTaisyklemis) {
        alert(
            "Norėdami Prisiregistruoti mūsų svetainėje, privalote sutikti su taisyklėmis ir sąlygomis");
        return false;
    }
    else {
        return true;
    }
}

function getFormData() {
    validate();

    if (validate() == true) {
        let vardas = vardasInput.value;
        let pavarde = pavardeInput.value;
        let metai = gimimoDataInput.value.slice(0, 4);
        let pastas = emailInput.value;

        console.log(
            `Siunčiamas laiškas adresu ${pastas}: 
        "Sveiki, ${vardas} ${pavarde}. 
        Ačiū kad registravotės mūsų socialiniame tinkle. 
        Jūsų laikinasis slaptažodis ${vardas}_${metai}. 
        Linkime gražios dienos - one.lt administracija"`);
    }
}