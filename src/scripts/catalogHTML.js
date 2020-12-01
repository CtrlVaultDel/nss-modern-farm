// Used in catalog.js to return the value as a string to be input into the DOM as the quantities at the top

export const catalogHTML = (plant) => {
    return `
        <section class="foodAndAmount">
            <div class="food">${plant.type}</div>
            <div class="amount">${plant.quantity}</div>
        </section>
    `
}