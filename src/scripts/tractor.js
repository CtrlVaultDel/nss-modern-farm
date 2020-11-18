// Takes in the year's planting plans
// The plan is an array that contains 3 arrays of 6 items:
// --------------------EXAMPLE--------------------
// [
//     ["Potato", "Soybean", "Soybean", "Corn", "Potato","Wheat"],
//     ["Wheat", "Corn", "Wheat", "Asparagus", "Wheat", "Sunflower"],
//     ["Asparagus", "Wheat", "Soybean", "Corn", "Asparagus", "Soybean"]
// ]
// -----------------------------------------------
// plantSeeds takes this and iterates through the parent & child arrays
// As it iterates a row, it invokes the appropriate seed function
// e.g. if it sees "Potato" it will invoke the createPotato() function from ./seeds/potato.js
// The corresponding seed(s) will then be added to the array of plants (fieldPlants) in the field.js module

// Import seed functions
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js";

// Assign variables to each function that returns seed(s)
const asparagusSeed = createAsparagus();
const cornSeed = createCorn();
const potatoSeed = createPotato();
const soybeanSeed = createSoybean();
const sunflowerSeed = createSunflower();
const wheatSeed = createWheat();

export const plantSeeds = (plantingPlans) =>{
    plantingPlans.forEach(element => {
        element.forEach(element =>{
            switch(element){
                case "Asparagus":
                    addPlant(asparagusSeed);
                    break;

                case "Corn":
                    addPlant(cornSeed);
                    break;

                case "Potato":
                    addPlant(potatoSeed);
                    break;

                case "Soybean":  
                    addPlant(soybeanSeed);
                    break;

                case "Sunflower":
                    addPlant(sunflowerSeed);
                    break;

                case "Wheat":
                    addPlant(wheatSeed);
                    break;
            }
        })
    });
}