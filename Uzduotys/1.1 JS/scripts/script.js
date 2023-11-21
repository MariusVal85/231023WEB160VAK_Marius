let vartotojoSvoris = prompt("Iveskite savo svori kilogramais");

if (vartotojoSvoris > 100) {
    console.log("Jusu svoris daugiau nei 100kg");
} else if(vartotojoSvoris < 100) {
    console.log("Jusu svoris mazesnis nei 100kg");
} else {
    console.log(`Jus sveriate ${vartotojoSvoris} kilogramu`)
}
