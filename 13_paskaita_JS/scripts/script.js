
let kIsorinis = "Isorinis Tekstas";

function funkcija() {

    // Galima, bet bloga praktika
    console.log(kIsorinis);

    let kVidinis = "Vidinis tekstas";
}

// Negalima naudoti
// console.log(kVidinis)

// funkcija();


// Neribotas parametru skaicius
function daugParametru(...parametrai) {
    suma = 0;

    parametrai.forEach(function (value) {
        suma += value;
    })

    console.log(suma);  
}

daugParametru(1, 5, 6, 8, 9, 15, 31, 100);



function pasisveikinimas() {
    console.log("Sveiki!");
}

// Alternatyvus funkcijos aprasymas (arrow function)
let pasisveikinimas2 = () => {
    console.log("Sveiki!");
}

pasisveikinimas2();


function pliusDu(x) {
    return x + 2;
}

console.log(pliusDu(5));

// Alternatyvus pliusDu funkcijos aprasymui
// return tokiu atveju nerasom, grazins mums x + 2
const pliusDu2 = (x) => x + 2;

let grazintaReiksme = pliusDu2(10);
console.log(grazintaReiksme);

const pliusDu3 = x => x + 2;
console.log(pliusDu3(16));

function apskaiciuotiKvadrata(x) {
    console.log("Kvadrato krastine yra " + x + "."); 
    console.log(`Kvadrato plotas yra ${x * x}.`);
    console.log(`Kvadrato perimetras yra ${x * 4}.`);
}

apskaiciuotiKvadrata(6);


// let knygosPavadinimas = "Ziedu Valdovas";
// let knygosAutorius = "J. R. R. Tolkien";

// let knygosMasyvas = ["Ziedu Valdovas", "J. R. R. Tolkien"];
// console.log(knygosMasyvas[0], knygosMasyvas[1]);

// OBJEKTAS

// Sukurimas
let knyga = {
    // Ypatybes
    pavadinimas: "Ziedu Valdovas",
    autorius: "J. R. R. Tolkien",
    // Metodas
    pristatymas: function(leidejas = "Vaga") {
        console.log(`leidejas: ${leidejas}`);
        console.log(`${this.autorius} knyga - ${this.pavadinimas}.`);
    } 
}

// Ypatybiu naudojimas
console.log(knyga.pavadinimas);
console.log(knyga.autorius);

// Metodo iskvietimas
knyga.pristatymas();

// Prideti nauja ypatybe metai
knyga.metai = 1987;

// Pakeisti ypatybes pavadinimo reiksme
knyga.pavadinimas = "Hobitas";

delete knyga.autorius;

console.log(knyga);

if ("autorius" in knyga) {
    console.log(`Knygos objektas turi ypatybe autorius - ${knyga.autorius}`);
}

if ("pavadinimas" in knyga) {
    console.log(`Knygos objektas turi ypatybe pavadinimas - ${knyga.pavadinimas}`);
}


function Filmas(pavadinimas, rezisierius, metai) {
    this.pavadinimas = pavadinimas;
    this.rezisierius = rezisierius;
    this.pristatymas = function() {
        console.log(`${this.rezisierius} filmas - ${this.pavadinimas}`);
    }
}

let indianaJones = new Filmas("Indiana Jones", "Steven Spielberg", 2000);
let avatar = new Filmas("Avatar", "James Cameron", 2010);

console.log(indianaJones);
console.log(avatar);

indianaJones.pristatymas();
avatar.pristatymas();

let tekstas = "Kazkoks tekstas"

console.log(tekstas.toUpperCase());
console.log(tekstas.toLowerCase());

let daugNereikalinguTarpu = "  Tekstas      ";
console.log(daugNereikalinguTarpu.trim());

let zodis = "Lietuva";

console.log(zodis[3]);
console.log(zodis.indexOf['v']);

console.log(zodis.slice(3, 5));






console.log(Math.round(1.8))

console.log(parseInt(1.568));
console.log(parseInt("1.456"));

let skaiciuMasyvas = [1, 5, 9, 16, 20, 4, 6, 7];

let naujasSkaiciuMasyvas = skaiciuMasyvas.map(function(skaicius) {
    return skaicius * 10;
});

console.log(naujasSkaiciuMasyvas);

let filmai = [
    new Filmas("Filmas 1", "Rezisierius 1", 1996),
    new Filmas("Filmas 2", "Rezisierius 2", 1998),
    new Filmas("Filmas 3", "Rezisierius 3", 1991),
    new Filmas("Filmas 4", "Rezisierius 4", 2001),
    new Filmas("Filmas 5", "Rezisierius 5", 2008),
];

let naujasFilmuMasyvas = filmai.filter(function(filmas) {
    return filmas.metai >= 2000;
})

console.log(naujasFilmuMasyvas);