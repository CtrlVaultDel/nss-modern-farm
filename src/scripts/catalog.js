import { usePlants } from "./field.js";
import { harvestPlants } from "./harvester.js";
import { catalogHTML } from "./catalogHTML.js";

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
    // The ... indicates a spread operator
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

    const contentElement = document.querySelector(".container");
    const quantityElement = document.querySelector(".quantityBox");

    // Convert the array to a string, put it in a new array and then send it to the DOM
    quantityElement.innerHTML += quantityOfPlants.map(plant => catalogHTML(plant)).join("");


    plantsToSellWithID.forEach(element => {
        const plantToPage = element.type;
        contentElement.innerHTML += `<section class="plant"><img src="./icons/${plantToPage}.png"></section>`;
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