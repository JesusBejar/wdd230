const jsonfile = 'scripts/data.json';

async function getDirectoryData() {
const response = await fetch(jsonfile);
const data = await response.json();
console.table(data.businesses); 
displayBusinesses(data.businesses);
}

getDirectoryData();

const displayBusinesses = (businesses) => {
    let cards = document.querySelector("div.cards");

businesses.forEach((business) => {
        let single_card = document.createElement("section")
        let name = document.createElement("h1");
        let address = document.createElement("h3");
        let phone = document.createElement("h3");
        let website = document.createElement("a");
        let membership = document.createElement("h2");
        let image = document.createElement("img");

        name.innerHTML = `----${business.name}----`;

        address.innerHTML = `${business.address}`;

        phone.innerHTML = `${business.phone}`;

        website.innerHTML = `${business.website}`;
        website.setAttribute("href", `${business.website}`)

        membership.innerHTML = `${business.membership}`;
        membership.setAttribute("font-size", "44px")

        image.setAttribute("src", business.image);
        image.setAttribute("alt", `Portrain of ----${business.name}----`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "60");
        image.setAttribute("height", "60");

        single_card.append(image);
        single_card.append(name);
        single_card.append(address);
        single_card.append(phone);
        single_card.append(website);
        single_card.append(membership);

        cards.append(single_card);
    }
);
}

let meatball = document.querySelector(".meatball");
let gridMenu = document.querySelector(".grid-menu");
let container = document.querySelector("#cards");

meatball.addEventListener("click", () => {
    container.classList.remove("grid-menu");
    container.classList.add("list");
})

gridMenu.addEventListener("click", () => {
    container.classList.add("grid-menu");
    container.classList.remove("list");
})