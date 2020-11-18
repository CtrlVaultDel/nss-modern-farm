console.log("Welcome to the main module")

// IMPORTS
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"

// Create randomly generated planting plans
const plantingPlans = createPlan();
console.log("These are the planting plans");
console.log(plantingPlans);

// Take the randomly generated planting plans and push 
// appropriate seeds to usePlants array based off the contents
plantSeeds(plantingPlans);

// Print out the seeds to be planted
const whatToPlant = usePlants();
console.log("These are the seeds we need");
console.log(whatToPlant);

