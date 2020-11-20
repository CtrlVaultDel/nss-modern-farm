import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"

export const catalog = () =>{
    const grownPlants = usePlants();
    const plantsToSell = harvestPlants(grownPlants);

    console.log("These are the plantsToSell");
    console.log(plantsToSell);
    plantsToSell.sort(function(a,b){
        if (a.type < b.type){
            return -1;
        }
        else if (a.type > b.type){
            return 1;
        }
        return 0;
    });
    console.log(plantsToSell);

    const contentElement = document.querySelector(".container");

    plantsToSell.forEach(element => {
        const plantToPage = element.type;
        contentElement.innerHTML += `<section class="plant">${plantToPage}</section>`;
    });
}