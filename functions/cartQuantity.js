//definign variable storing the quantity
let qtyEl = document.getElementById('qty');

let groundQty = 0;

//increase the quantity when + is clicked
document.getElementById('qty-add').onclick = increaseQty;

//reduce the quantity when  is clicked
document.getElementById('qty-remove').onclick = reduceQty;




//writing function to add qty
function increaseQty(){
    groundQty ++;
    console.log(groundQty)
    qtyEl.textContent= 'Qty: ' + groundQty;
}

let popularProducts = {
    name: 'orange',
    quantity: document.getElementById('qty'),
   
}
console.log(popularProducts.quantity);

,m 