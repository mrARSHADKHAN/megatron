lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })

var minusBtn = document.querySelector(".minus-btn");
var plusBtn = document.querySelector(".plus-btn");
var quantityInput = document.querySelector("#quantity");

minusBtn.addEventListener("click", function() {
  var currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = (currentValue - 1).toString();
  }
});

plusBtn.addEventListener("click", function() {
  var currentValue = parseInt(quantityInput.value);
  quantityInput.value = (currentValue + 1).toString();
});