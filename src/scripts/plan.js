
// plan.js is responsible for defining THREE rows of crops to be planted
// For each row, there are SIX plots of land.

// ------- EXAMPLE -------
//  C1  C2  C3  C4  C5  C6
//  Co  Co  Wh  Su  So  Su
//  Po  Su  As  So  Wh  Wh
//

// Each plot is randomly assigned one of the following types of food:
// Corn (Co) -- Asparagus (As) -- Potato (Po) -- Wheat (Wh) -- Sunflower (Su) -- Soybean (So)

const types = ["Soybean", "Corn", "Asparagus", "Wheat", "Potato", "Sunflower"]

export const createPlan = () => {
    const plan = []

    for (let index = 0; index < 3; index++) {
        const row = []
        for (let j = 0; j < 6; j++) {
            row.push(crop.next().value)
        }
        plan.push(row)
    }

    return plan
}




/*
    This is a generator function used to randomly
    generate crop types to plants in each plot. It
    is not relevant for you implementing your code
    for this project.
*/
const crop = function* () {
    while (true) {
        const typeIdx = Math.floor(Math.random() * types.length)
        yield types[typeIdx]
    }
}()

