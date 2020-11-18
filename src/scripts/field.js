const fieldPlants =[];

export const addPlant = (seed) =>{
    if(Array.isArray(seed)){
        fieldPlants.push(seed[0], seed[1]);
    } else{
        fieldPlants.push(seed)
    }
}

export const usePlants = () =>{
    return fieldPlants.slice();
}