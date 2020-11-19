// Simulates the growth of plants. This takes in the array of plants from field.js (usePlants).
// A new array will be returned with 
export const harvestPlants = (plantsArray) =>{
    const harvestedArray = [];
    plantsArray.forEach(element => {
        // If it is anything but corn, add the plantObject to harvestedArray (element.output number of times)
        if(element.type !== "Corn"){
            for(let i=0; i < element.output; i++){
                harvestedArray.push(element);
            }
        // If it is corn, only half of it is going to be sold
        } else if (element.type === "Corn"){
            for(let i=0; i < (element.output/2); i++){
                harvestedArray.push(element);
            }
        }
    });
    return harvestedArray;
}