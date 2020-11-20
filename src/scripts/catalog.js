import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"

export const catalog = () =>{
    const grownPlants = usePlants();
    const plantsToSell = harvestPlants(grownPlants);
    const contentElement = document.querySelector(".container");

    plantsToSell.forEach(element => {
        const plantToPage = element.type;
        contentElement.innerHTML += `<section class="plant">${plantToPage}</section>`;
    });
}