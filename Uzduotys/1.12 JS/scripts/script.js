let darbuotojai = [
    {
        vardas: "Jonas",
        pozicija: "vadybininkas",
        atlyginimas: 2500,
        patirtiesMetai: 6
    },
    {
        vardas: "Zigmas",
        pozicija: "mechanikas",
        atlyginimas: 1300,
        patirtiesMetai: 3
    },
    {
        vardas: "Bronius",
        pozicija: "vairuotojas",
        atlyginimas: 10000,
        patirtiesMetai: 6
    }
];


let naujasDarbuotojuSarasas = darbuotojai.filter(function(darbuotojas) {
    // if (darbuotojas.patirtiesMetai > 5 || darbuotojas.atlyginimas * 12 < 30000) {
    //     return true; 
    // } else {
    //     return false;
    // }
    return darbuotojas.patirtiesMetai > 5 && darbuotojas.atlyginimas * 12 < 30000
});
console.log(naujasDarbuotojuSarasas);