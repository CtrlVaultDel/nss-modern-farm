import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"

export const catalog = () =>{
    const grownPlants = usePlants();
    const plantsToSell = harvestPlants(grownPlants);
    const quantityOfPlants = getQuantity(grownPlants);

    plantsToSell.sort(function(a,b){
        if (a.type < b.type){
            return -1;
        }
        else if (a.type > b.type){
            return 1;
        }
        return 0;
    });

    // Add a unique identifier to each plant
    let identity =0;
    const plantsToSellWithID = plantsToSell.map(plant => {
        identity++;
        return{
            ...plant,
            id: identity
        }
    });
    console.log("These are the plants with unique IDs");
    console.log(plantsToSellWithID);

    // Can use .map to iterate through the original array and return a new array with the identity values
    // Check out the spread operator

    const contentElement = document.querySelector(".container");
    const quantityElement = document.querySelector(".quantityBox");

    quantityElement.innerHTML += `
        <section class="foodAndAmountHeader">
            <div class="foodHeader">Food</div>
            <div class="quantityHeader">Quantity</div>
        </section>
        `

    quantityOfPlants.forEach(element =>{
        quantityElement.innerHTML += `
            <section class="foodAndAmount">
                <div class="food">${element.type}</div>
                <div class="amount">${element.quantity}</div>
            </section>
        `
    });

    plantsToSellWithID.forEach(element => {
        const plantToPage = element.type;
        contentElement.innerHTML += `<section class="plant">${plantToPage}</section>`;
    });
}

const getQuantity = (plantArray) =>{
    let asparagusCount = 0;
    let cornCount = 0;
    let potatoCount = 0;
    let soybeanCount = 0;
    let sunflowerCount = 0;
    let wheatCount = 0;
    plantArray.forEach(element => {
        switch (element.type){
            case "Asparagus":
                asparagusCount += 4;
                break;
            case "Corn":
                cornCount += 3;
                break;
            case "Potato":
                potatoCount += 2;
                break;
            case "Soybean":
                soybeanCount += 4;
                break;
            case "Sunflower":
                sunflowerCount += 3;
                break;
            case "Wheat":
                wheatCount += 6;
                break;
        }
    });
    const quantityArray = [
        {
        type: "Asparagus",
        quantity: asparagusCount
        },
        {
        type: "Corn",
        quantity: cornCount
        },
        {
        type: "Potatos",
        quantity: potatoCount
        },
        {
        type: "Soybeans",
        quantity: soybeanCount
        },
        {
        type: "Sunflowers",
        quantity: sunflowerCount
        },
        {
        type: "Wheat",
        quantity: wheatCount
        }
    ]
    console.log("These are the quantities of each harvested plant")
    console.log(quantityArray);
    return quantityArray;
}