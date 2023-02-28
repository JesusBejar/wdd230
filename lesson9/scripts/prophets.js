const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
const response = await fetch(url);
const data = await response.json();
console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    let cards = document.querySelector("div.cards");

prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let portrait = document.createElement("img");
        let bday = document.createElement("p");
        let birthplace = document.createElement("p");
        let deathdate = document.createElement("p");

        h2.innerHTML = `----${prophet.name} ${prophet.lastname}----`;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrain of ----${prophet.name} ${prophet.lastname}----`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "360");
        portrait.setAttribute("height", "460");

        bday.innerHTML = `${prophet.birthdate}`;
        bday.setAttribute("font-size", "44px");
        bday.setAttribute("width", "100px");
        bday.setAttribute("height", "50px");
        bday.setAttribute("color", "solid black");

        deathdate.innerHTML = `${prophet.death}`;
        deathdate.setAttribute("font-size", "44px");
        deathdate.setAttribute("width", "100px");
        deathdate.setAttribute("height", "50px");
        deathdate.setAttribute("color", "solid black");

        birthplace.innerHTML = `${prophet.birthplace}`;
        birthplace.setAttribute("font-size", "44px");
        bday.setAttribute("width", "100px");
        bday.setAttribute("height", "50px");
        bday.setAttribute("color", "solid black");

        card.append(h2);
        card.append(portrait);
        card.append(bday);
        card.append(deathdate);
        card.append(birthplace);

        cards.append(card);
    }
);
}