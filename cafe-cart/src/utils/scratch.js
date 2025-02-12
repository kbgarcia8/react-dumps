/*const prices = {
    "solo": 160,
    "share": 220
} 

Object.keys(prices).map((price, index) => {
    console.log(price, prices[price]);
});

//Check elements overflowing
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);*/

(async () => {
  const response = await fetch('https://cafe-cart-db.vercel.app/menu/');
  const body = await response.text();
  console.log(body);
})();