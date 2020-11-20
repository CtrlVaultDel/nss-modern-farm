console.log("Welcome to the main module")

// IMPORTS
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js"

// Create randomly generated planting plans
const plantingPlans = createPlan();
console.log("These are the planting plans");
console.log(plantingPlans);

// Take the randomly generated planting plans and push 
// appropriate seeds to usePlants array based off the contents
plantSeeds(plantingPlans);

// Print out the seeds to be planted
const whatToPlant = usePlants();
console.log("These are the seeds we planted");
console.log(whatToPlant);

// An array that holds the plants that have been harvested
const harvestArray = harvestPlants(whatToPlant);
console.log("These are the plants we harvested")
console.log(harvestArray)

catalog();