let darbuotojai = [
    {
        vardas: "Jonas",
        pozicija: "vadybininkas",
        atlyginimas: 1500
    },
    {
        vardas: "Zigmas",
        pozicija: "mechanikas",
        atlyginimas: 1300
    },
    {
        vardas: "Bronius",
        pozicija: "vairuotojas",
        atlyginimas: 1100
    }
];

darbuotojai.map(function(darbuotojas) {
    darbuotojas.buvesAtlyginimas = darbuotojas.atlyginimas;
    let atlyginimoKoeficientas = Math.floor(Math.random()*20+11);

    console.log(atlyginimoKoeficientas);

    darbuotojas.atlyginimas = darbuotojas.buvesAtlyginimas * atlyginimoKoeficientas / 100 + darbuotojai.atlyginimas;

    darbuotojas.algosPalyginimas = function() {
        console.log(`Darbuotojo ${this.vardas} atlyginimas padidejo nuo ${this.buvesAtlyginimas} iki ${this.atlyginimas} (${(this.atlyginimas/this.buvesAtlyginimas-1)*100}%)`);
    }
    return darbuotojas;
});

darbuotojai[1].algosPalyginimas();
