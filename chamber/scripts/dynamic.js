const jsonfile = "scripts/data.json";
//const spotlight = document.getElementById('spotlight')
async function getBusinessMember() {
    try {
        const response = await fetch(jsonfile)
        if (response.ok) {
            const data = await response.json()
            display(data)
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error)
    }
}
getBusinessMember() 

const display = (data) => {
    const cards = document.querySelector('#spotlight-section');
    cards.innerHTML = "";
        const special = data.businesses.filter((memb) => memb.membership === 'Membership: Gold' || memb.membership === 'Membership: Silver')
        //console.log(special)
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * special.length); 

            let single_card = document.createElement("section")
            let name = document.createElement("h1");
            let address = document.createElement("h3");
            let phone = document.createElement("h3");
            let website = document.createElement("a");
            let membership = document.createElement("h2");
            let image = document.createElement("img");
            // let list = spotlight-section.classList

            name.innerHTML = special[randomIndex].name
            address.innerHTML = special[randomIndex].address
            phone.innerHTML = special[randomIndex].phone
            website.innerHTML = special[randomIndex].website
            membership.innerHTML = `${special[randomIndex].membership}`
            address.innerHTML = special[randomIndex].address
            // list.add('spots')

            image.setAttribute('src',special[randomIndex].image);
            image.setAttribute('alt',`image of ${special[randomIndex].image}`);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('width', '60px');
            image.setAttribute('height', '60px');
            website.setAttribute('href', special[randomIndex].website);

            single_card.setAttribute("text-align", "center");
            single_card.setAttribute("border", "solid var(--color3) 5px");
            single_card.setAttribute("background-color", "var(--color4)");
            single_card.setAttribute("padding", "5px");

            single_card.append(image);
            single_card.append(name);
            single_card.append(address);
            single_card.append(phone);
            single_card.append(website);
            single_card.append(membership);

            cards.append(single_card);
            special.splice(randomIndex,1);
    
        }
    }



            

            


 
      
   
  
 
    
    

