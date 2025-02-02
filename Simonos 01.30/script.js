// 1.

const button = document.getElementById("changeTextButton");
const tekstas = document.getElementById("myElement");

function changeText() {
    tekstas.innerHTML = "ketvirtadienis";
}

button.addEventListener("click", changeText);

// 2.

const spalvosElementai = document.querySelectorAll(".colorChange");
console.log(spalvosElementai);
const buttonElementas = document.querySelector("#changeColorButton");

function pridetiSpalva() {
    for (const elementas of spalvosElementai) {
        elementas.style.color = "red";
    }
}

buttonElementas.addEventListener("click", pridetiSpalva);

// 3. 

const sukurti = document.getElementById("createButtonButton");
const konteineris = document.getElementById("buttonContainer");

function sukurtiMygtuka() {
    const naujasMygtukas = document.createElement("button");
    naujasMygtukas.textContent = `Naujas mygtukas`;
    konteineris.appendChild(naujasMygtukas)
}

sukurti.addEventListener("click", sukurtiMygtuka);

// 4.

const listas = document.getElementById("myList");
const sarasoElementas = document.getElementById("addListItemButton");

let count = 2;

function pridetiSarasoElementa() {
    const naujasSarEle = document.createElement("li");
    naujasSarEle.innerText = `Elementas ${count}`;
    count++;
    listas.appendChild(naujasSarEle);
}

sarasoElementas.addEventListener("click", pridetiSarasoElementa);

// 5. 

const removeButton = document.querySelector("#removeButton");
const pasalinkMane = document.querySelector("#removeMe");

function trash() {
    pasalinkMane.remove();
}

removeButton.addEventListener("click", trash);

// 6.

const pasalintiVisusEle = document.querySelectorAll(".removeClass");
console.log(pasalintiVisusEle)
const pasalintiElementa = document.querySelector("#removeAllButton");
console.log(pasalintiElementa)

function pasalinomeElementus() {
    for (let i = pasalintiVisusEle.length - 1; i >= 0; i--) {
        pasalintiVisusEle[i].remove();
    }
}

pasalintiElementa.addEventListener("click", pasalinomeElementus);

// 7.

const changeSrcButton = document.getElementById("#changeSrcButton");
const myImage = document.getElementById("#myImage");

function changeImage() {
    myImage.setAttribute("src", "./js.jpg")
};

changeSrcButton.addEventListener("click", changeImage)

// 8. 

const myForm = document.getElementById("myForm");

function addName(event) {
    event.preventDefault();
    const userInput = document.getElementById("name").value;
    alert("formaPateikta" + userInput)
    document.getElementById("name").value = "";
}

myForm.addEventListener("submit", addName)