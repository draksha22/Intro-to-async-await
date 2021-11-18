function placeOrder(drink){
    return new Promise(function(resolve, reject){
        if(drink == "coffee"){
            resolve("order placed");
        }else{
            reject("Sorry, we only serve coffee");
        }
    })
}

function processOrder(order){
    return new Promise(function (resolve) {
        console.log("order is being processed");
        resolve(`Coffee served for the ${order}`);
    })
}

// placeOrder('tea').then(function (orderFromCustomer) {
//     console.log("request received");
//     let orderIsProcessed = processOrder(orderFromCustomer);
//     return orderIsProcessed;
// }).then(function (orderIsProcessed) {
//     console.log(orderIsProcessed);
// }).catch(function (err) {
//     console.log(err);
// })

//async await
async function serveOrder() {
    try{
        const orderReceived = await placeOrder("tea");
        console.log(orderReceived);
        const processedOrder = await processOrder(orderReceived);
        console.log(processedOrder);

    }catch(error){
        console.log(error);
    }
}

serveOrder();