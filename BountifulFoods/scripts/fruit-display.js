// this async functions grabs the data and logs into console
const fruitJsonFile = "scripts/fruit-data.json";

const fruitImgJson = "scripts/fruit-img-data.json";
// global variable
let fruityData;

async function FruitData() {
    const response = await fetch(fruitJsonFile);
    const data = await response.json();
    fruityData = data;
    console.log(data);
    displayFruitImgs(data);
}
FruitData();

async function getFruitImgData() {
    const response = await fetch(fruitImgJson);
    const fruits = await response.json();
    let rightSide = document.querySelector(".right-side");

    fruits.forEach((fruitData) => {
        console.log(fruitData)
        let section = document.createElement("section");
        let pic = document.createElement("img");

        section.setAttribute("background-color", "#F6AE2D")
    
        // set attributes for the pic in each fruit
        pic.setAttribute("src", fruitData.photoUrl);
        pic.setAttribute("alt", `pic of ----${fruitData.name}----`);
        pic.setAttribute("loading", "lazy");
        pic.setAttribute("width", "180px");
        pic.setAttribute("height", "200px");
    
        section.append(pic);
        rightSide.append(section);
        }
    );
}
getFruitImgData();

const displayFruitImgs = (fruits) => {
    let rightSide = document.querySelector(".right-side");
    let main = document.querySelector(".fresh");

let submitButton = document.querySelector(".submitBtn");
submitButton.addEventListener("click", () => {
    // top info js 
    let formInfo = document.querySelector(".form-info");
    formInfo.innerHTML = "";
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let phoneNumber = document.querySelector("#number");

    let nameTag = document.createElement("h1")
    let emailTag = document.createElement("h2")
    let phoneTag = document.createElement("p")

    main.setAttribute("display", "none");

    nameTag.innerHTML = `Name : ${name.value}`;
    emailTag.innerHTML = `Email : ${email.value}`;
    phoneTag.innerHTML = `Phone # ${phoneNumber.value}`;

    formInfo.append(nameTag);
    formInfo.append(emailTag);
    formInfo.append(phoneTag);
    // input info js
    fruityData.forEach(fruit => {
        console.log(fruit.name);
        let fruit1 = document.querySelector("#input1")
        let input1 = fruit1.value 
        let fruit2 = document.querySelector("#input2")
        let input2 = fruit2.value
        let fruit3 = document.querySelector("#input3")
        let input3 = fruit3.value
        // order date, and
        // the total amount of carbohydrates, 
        // protein, 
        // fat, 
        // sugar, and 
        // calories
        console.log(input1)
        console.log(input2)
        console.log(input3)
        if (fruit.name === input1)
        {
            let fruitName = document.createElement("h3");
            fruitName.innerHTML = `Name : ${fruit.name}`;

            console.log(fruit.name);
            let carbs = document.createElement("p");
            carbs.innerHTML = `Carbs : ${fruit.nutritions.carbohydrates}`

            let protein = document.createElement("p");
            protein.innerHTML = `Protein ${fruit.nutritions.protein}`

            let fat = document.createElement("p");
            fat.innerHTML = `Fat : ${fruit.nutritions.fat}`

            let sugar = document.createElement("p");
            sugar.innerHTML = `Sugar : ${fruit.nutritions.sugar}`

            let calories = document.createElement("p");
            calories.innerHTML = `Calories ${fruit.nutritions.calories}`;
            
            // create section and append to section
            formInfo.append(fruitName);
            formInfo.append(carbs);
            formInfo.append(protein);
            formInfo.append(fat);
            formInfo.append(sugar);
            formInfo.append(calories);
        }
        else if (fruit.name === input2)
        {
            let fruitName = document.createElement("h3");
            console.log(fruitName);
            fruitName.innerHTML = `Name : ${fruit.name}`;

            let carbs = document.createElement("p");
            carbs.innerHTML = `Carbs : ${fruit.nutritions.carbohydrates}`

            let protein = document.createElement("p");
            protein.innerHTML = `Protein ${fruit.nutritions.protein}`

            let fat = document.createElement("p");
            fat.innerHTML = `Fat : ${fruit.nutritions.fat}`

            let sugar = document.createElement("p");
            sugar.innerHTML = `Sugar : ${fruit.nutritions.sugar}`

            let calories = document.createElement("p");
            calories.innerHTML = `Calories ${fruit.nutritions.calories}`;
            
            // create section and append to section
            formInfo.append(fruitName);
            formInfo.append(carbs);
            formInfo.append(protein);
            formInfo.append(fat);
            formInfo.append(sugar);
            formInfo.append(calories);
        }
        else if (fruit.name === input3)
        {
            let fruitName = document.createElement("h3");
            fruitName.innerHTML = `Name : ${fruit.name}`;

            let carbs = document.createElement("p");
            carbs.innerHTML = `Carbs : ${fruit.nutritions.carbohydrates}`

            let protein = document.createElement("p");
            protein.innerHTML = `Protein ${fruit.nutritions.protein}`

            let fat = document.createElement("p");
            fat.innerHTML = `Fat : ${fruit.nutritions.fat}`

            let sugar = document.createElement("p");
            sugar.innerHTML = `Sugar : ${fruit.nutritions.sugar}`

            let calories = document.createElement("p");
            calories.innerHTML = `Calories ${fruit.nutritions.calories}`;
            
            // create section and append to section
            formInfo.append(fruitName);
            formInfo.append(carbs);
            formInfo.append(protein);
            formInfo.append(fat);
            formInfo.append(sugar);
            formInfo.append(calories);
        }
    }) 

})


}

