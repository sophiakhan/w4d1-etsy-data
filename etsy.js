// 1. Average price of all items
var total = 0;

items.forEach(getPrices);

function getPrices(items) {
    total += items.price;
}

console.log('The average price is' + ' ' + '$' + Math.round((total / items.length) * 100) / 100);

    // var result = getAveragePrice(items);
    // function getAveragePrice(items) {
    //     var total = items.reduce(function (prev, next) {
    //         return {price: prev.price + next.price};
    //     }, {price: 0});
    //     console.log(total);
    //     var averagePrice = Math.round((total.price / items.length) * 100) / 100;
    //     console.log(averagePrice);
    //     return averagePrice;
    // }
    
    //  console.log('The average price is' + ' $' + result);


// 2. An array of items that cost between $14.00 and $18.00 USD
var priceArray = items.filter(function(item) {
    return (item.price >= 14.00 && item.price <= 18.00 && item.currency_code === "USD");
});

priceArray.forEach(function(item) {
    console.log(item.title); 
    })


// 3. Find the item with a "GBP" currency code and print its name and price
var gbpCode = items.filter(function(item) {
    return (item.currency_code === "GBP");
});

gbpCode.forEach(function(item) {
    console.log(item.title + ' costs ' + item.price); 
    })


// 4. Show how to find which items are made of wood
var searchTerm = 'wood';
var woodMaterial = items.filter(function(item) {
    return item.description.includes(searchTerm);
});

woodMaterial.forEach(function(item) {
    console.log(item.title); 
    })


// 5. Find which items are made of eight or more materials
var eightOrMoreMaterials = items.filter(function(item) {
    return(item.materials.length >= [8]);
});

eightOrMoreMaterials.forEach(function(item) {
    console.log(item.title + item.materials); 
    })



// 6. calculate how many items were made by their sellers
var searchWho = 'i_did'
var totalSold = items.filter(function(item) {
    return item.who_made.includes(searchWho);
}).length;

console.log(totalSold + ' ' + 'were made by their sellers');

// use forEach to target the title in each problem before console.logging. 