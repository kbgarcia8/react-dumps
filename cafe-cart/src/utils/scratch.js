const prices = {
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
);