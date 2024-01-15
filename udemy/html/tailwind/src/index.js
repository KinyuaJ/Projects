const form = document.querySelector("#form");
const product = document.querySelector("#product");
const amount = document.querySelector("#num");
const list = document.querySelector("#list");
form.addEventListener('submit', function(e){
    e.preventDefault();

    const productValue = product.value 
    const amountValue = amount.value

    const li = document.createElement('li');
    const b = document.createElement('b');

    b.append(productValue);
    li.append(b);
    li.append(` ${amountValue}`);
    list.append(li);

    product.value = "";
    amount.value = "";

})