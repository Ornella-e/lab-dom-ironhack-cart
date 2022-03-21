// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector ('.quantity input');
  
  price.innerHTML = "";
  quantity.innerHTML = "";
  //const productEl= product.querySelector('.product');
 const subtotalPrice = 0;
  // Step 3 Use the values you extracted from the above mentioned DOM elements to calculate the subtotal price. You can create a new variable, and its value will be equal to the product of these values. 
 const cartItem = [];
 getSubtotal ();{product.cartItem.reduce ((subtotalPrice, cartItem) => {const {price, quantity} = cartItem;},
 {price:0,
quantity:0,  }
 )};
  //Step 4: Now, when you are becoming DOM manipulation ninja, use your skills once again to get the DOM element that should hold the subtotal.
  subtotalPrice = product.querySelector ('.subtotal span');
  subtotalPrice.innerHTML = "";
 // Step 5: In step 3, you calculated the subtotal price, and in step 4, you got the DOM element that should have displaying this price. In this step, your goal is to set the subtotal price to the corresponding DOM element.

}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
const multipleProducts= document.getElementsByClassName ('.product');
updateSubtotal(multipleProducts);

  // ITERATION 3
  //... your code goes here
//At the end of the calculateAll() function, reuse the total value you just calculated in the previous iteration and update the corresponding DOM element. Calculate the total price for the products in your cart by summing all of the subtotals returned by updateSubtotal() when it was called with each product.
const total = document.querySelector ('#total-value span');

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  //The "Create Product" button should add a new product to the cart when triggered.
  const newProd = document.querySelector('.create product button').classList.add ('.product');

  //Add a click event handler to the "Create Product" that will take a function named createProduct as a callback.
  //In createProduct you should target the name and unit price input DOM nodes, extract their values, add a new row to the table with the product name and unitary price, as well as the quantity input and "Remove" button, and ensure that all of the functionality works as expected.
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  //document.querySelector('#create.btn').addEventListener ('click', function (){})
});
