// Simulates the growth of plants. This takes in the array of plants from field.js (usePlants).
// A new array will be returned with 
export const harvestPlants = (plantsArray) =>{
    const harvestedArray = [];
    plantsArray.map(plant => {
        if(plant.type !== "Corn"){
            for(let i=0; i < plant.output; i++){
                harvestedArray.push(plant);
            }
        // If it is corn, only half of it is going to be sold
        } else if (plant.type === "Corn"){
            for(let i=0; i < (plant.output/2); i++){
                harvestedArray.push(plant);
            }
        } 
    })
    return harvestedArray;
}