let person = {
    vardas: "Marius",
    pavarde: "Valnickas",
    amzius: "38 metai",
    hobiai: "Kompiuteriniai zaidimai ir zvejyba",
    elPastas: "mariusval85@gmail.com"
}
console.log(person);

person.nickname = "Marukas";

console.log(person.nickname);

console.log(`As esu ${person.vardas} ${person.pavarde}. Draugai mane vadina ${person.nickname}. Man yra ${person.amzius}. Megstu ${person.hobiai}. Susisiekite su manimi el.pastu: ${person.elPastas}`);