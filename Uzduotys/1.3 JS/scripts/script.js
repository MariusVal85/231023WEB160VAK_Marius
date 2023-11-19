function arPilnametis(gimimoData) {

    let dabartiniaiMetai = new Date().getFullYear();

    if (dabartiniaiMetai - gimimoData < 20) {
        return false;
    }

    return true;
}

let manoAmzius = prompt("Iveskite savo gimimo data:");

if (arPilnametis(manoAmzius)) {
    console.log("Jūs esate pilnametis");
} else {
    console.log("Jūs esate nepilnametis");
}