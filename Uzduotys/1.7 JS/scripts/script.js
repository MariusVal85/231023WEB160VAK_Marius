let savaitesDiena = prompt("Iveskite savaites dienos skaiciu");
switch (Number(savaitesDiena)) {
    case 1:
    console.log("Siandien yra pirmadienis");
    break;
    case 2:
    console.log("Siandien yra antradienis");
    break;
    case 3:
    console.log("Siandien yra treciadienis");
    break;
    case 4:
    console.log("Siandien yra ketvirtadienis");
    break;
    case 5:
    console.log("Siandien yra penktadienis");
    break;
    case 6:
    console.log("Siandien yra sestadienis");
    break;
    case 7:
    console.log("Siandien yra sekmadienis");
    break;
    default:
        console.log("Tokios dienos nera");
}