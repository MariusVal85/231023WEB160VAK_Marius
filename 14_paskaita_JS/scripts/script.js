let paragrafas = document.createElement("p");

paragrafas.innerText = "Kazkoks paragrafo tekstas";

document.body.append(paragrafas);

let antraste = document.createElement("div");
antraste.innerHTML = "<h2>JS antraste </h2>";

document.body.prepend(antraste);

// JavaScript selektoriai

let body = document.body;
console.log(body);

let paveiksleliai = document.images;
console.log(paveiksleliai);

let paragrafasSuId = document.getElementById("paragrafo-id");
console.log(paragrafasSuId);

let picsumPhotos = document.getElementsByTagName("img");
console.log(picsumPhotos);

let paveiksleliaiSuKlasemis = document.getElementsByClassName("pav");
console.log(paveiksleliaiSuKlasemis);


let paragrafasGalerijoje = document.querySelector("div.galerija p");
console.log(paragrafasGalerijoje);

let paragrafaiGalerijoje = document.querySelectorAll("div.galerija p");
console.log(paragrafaiGalerijoje);


paragrafasSuId.style.color = "red";
paragrafasSuId.style.backgroundColor = "black";

paveiksleliai[0].style.width = "300px";

console.log(paragrafasSuId.style);

console.log(paveiksleliai[0].getAttribute("src"));
paveiksleliai[0].getAttribute("src", "https://picsum.photos/id/56/200/100");

document.querySelector("h1").innerText = "Naujas antrastes tekstas";


paragrafasGalerijoje.classList.add("active");
paragrafasGalerijoje.classList.remove("kazkokia-klase");
paragrafasGalerijoje.classList.toggle("ijungimas");
paragrafasGalerijoje.classList.toggle("ijungimas");



let naujasAntrastesElementas = document.createElement("h3");
naujasAntrastesElementas.innerText = "Naujas antrastes elementas";

document.querySelector("div.galerija").prepend(naujasAntrastesElementas);


paveiksleliaiSuKlasemis[paveiksleliaiSuKlasemis.length - 1].insertAdjacentElement("afterend", naujasAntrastesElementas);




let mygtukas = document.getElementById("magic-button");

mygtukas.onclick = function() {
    console.log("MYGTUKAS BUVO PASPAUSTAS!");
};

let mygtukas2 = document.getElementById("magic-button-2");

// mygtukas2.addEventListener("click", function() {
//     if (document.body.style.backgroundColor === "orange") {
//         document.body.style.backgroundColor = "green";
//     } else {
//         document.body.style.backgroundColor = "orange";
//     }
// });

mygtukas2.addEventListener("click", function() {
    document.body.classList.toggle("change-bg");
});