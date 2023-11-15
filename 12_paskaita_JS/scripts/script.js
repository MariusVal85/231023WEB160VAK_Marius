
let skaicius = 0;
let herbas = 0;

for (let x = 0; x < 10; x++) {

    let random = Math.random();

    // console.log(random);

    if (Math.random() < 0.5) {
        skaicius++;
    } else {
        herbas++;
    }
}

console.log(`Iskrito skaicius: ${skaicius}`);
console.log(`Iskrito herbas: ${herbas}`);

// console.log("Iskrito herbas: " + herbas);

// WHILE Ciklas

let metimai = 0;
let iskritoSkaicius = false;

while (!iskritoSkaicius) {
    metimai++;

   // let random = Math.random();

   // if (random < 0.5) {
   //     iskritoSkaicius = true;
   // }

    iskritoSkaicius = Math.random() < 0.5
}

console.log(`ismetem moneta ${metimai} karta/-u, kol iskrito skaicius`);



// console.log("*");

let vienosEilesZvaigzdutes = "";
for (let a = 0; a < 5; a++) {
    vienosEilesZvaigzdutes += "*";
    console.log(vienosEilesZvaigzdutes);
}

console.log("-------------");

for (let a = 4; a >= 0; a--) {

    vienosEilesZvaigzdutes = "";

    for (let b = 0; b <= a; b++) {
        vienosEilesZvaigzdutes += "*";
    }
    console.log(vienosEilesZvaigzdutes);
}


// *****
// ****
// ***
// **
// *


// for (let a = 4; a >= 0; a--) {
//     console.log(a);
// }


// isorinis ciklas:
// a = 4 
// a = 3
// a = 2
// a = 1
// a = 0

// for (let b = 0; b <= a; b++) {
//     vienosEilesZvaigzdutes += "*";
// }

    // vidinis ciklas:
    // jaigu a = 4 
    // itetaciju skaicius - 5

    // jaigu a = 3
    // itetaciju skaicius - 4

    // jaigu a = 2
    // itetaciju skaicius - 3

    let masyvas = ["raudona", "zalia", "melyna"];

    for (let x = 0; x < masyvas.lenght; x++); {
        // console.log(masyvas[x]);
    }

    masyvas.forEach(function (value, index, array) {
        console.log(value);
        console.log(index);
        console.log(array);
    })

    for (let spalva of masyvas) {
        console.log(spalva);
    }


    // FUNKCIJOS

    function pasisveikinimas(vardas, oras = "debesuota") {
        console.log(`Sveiki ${vardas}!`);
        console.log(`Siandien yra ${oras}.`);
    }

    // pasisveikinimas("Marius");

    let k1 = "Jonas";
    let k2 = "sauleta";
    pasisveikinimas(k1, k2);


    function suma(a, b) {
        return a + b;
    }

    let k3 = suma(15, 87);
    console.log(k3);

    // prideti menesio ir dienos patikrinima
    function arPilnametis(gimimoData) {

        let dabartiniaiMetai = new Date().getFullYear();

        if (dabartiniaiMetai - gimimoData < 20) {
            return false;
        }

        return true;
    }

    let manoAmzius = prompt("Iveskite savo gimimo data");

    if(arPilnametis(manoAmzius)) {
        console.log("Jus esate jau pilnametis");
    } else {
        console.log("Jus esate nepilnametis");
    }