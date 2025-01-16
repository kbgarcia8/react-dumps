const prices = {
    "solo": 160,
    "share": 220
} 

Object.keys(prices).map((price, index) => {
    console.log(price, prices[price]);
});